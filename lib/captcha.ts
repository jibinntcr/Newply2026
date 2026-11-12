import crypto from 'crypto';

const CAPTCHA_SECRET =
  process.env.JWT_SECRET || 'newtech_plywood_captcha_secret_perumbavoor_2026';

export interface CaptchaChallenge {
  question: string;
  token: string;
}

export function generateCaptcha(): CaptchaChallenge {
  const num1 = Math.floor(Math.random() * 9) + 2; // 2 to 10
  const num2 = Math.floor(Math.random() * 8) + 1; // 1 to 8
  const operations = ['+', '-'];
  const op = operations[Math.floor(Math.random() * operations.length)];

  let answer: number;
  let question: string;

  if (op === '+') {
    answer = num1 + num2;
    question = `What is ${num1} + ${num2}?`;
  } else {
    // Ensure non-negative answer
    const [big, small] = num1 >= num2 ? [num1, num2] : [num2, num1];
    answer = big - small;
    question = `What is ${big} - ${small}?`;
  }

  const payload = {
    answer,
    timestamp: Date.now(),
  };

  const payloadStr = JSON.stringify(payload);
  const signature = crypto
    .createHmac('sha256', CAPTCHA_SECRET)
    .update(payloadStr)
    .digest('hex');

  const token = Buffer.from(`${payloadStr}::${signature}`).toString('base64');

  return { question, token };
}

export function verifyCaptcha(token: string, userAnswer: string | number): {
  success: boolean;
  message?: string;
} {
  try {
    if (!token || userAnswer === undefined || userAnswer === null || userAnswer === '') {
      return { success: false, message: 'Please complete the verification challenge.' };
    }

    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [payloadStr, signature] = decoded.split('::');

    if (!payloadStr || !signature) {
      return { success: false, message: 'Invalid verification token.' };
    }

    const expectedSig = crypto
      .createHmac('sha256', CAPTCHA_SECRET)
      .update(payloadStr)
      .digest('hex');

    if (signature !== expectedSig) {
      return { success: false, message: 'Verification signature mismatch.' };
    }

    const payload = JSON.parse(payloadStr);

    // Expiration: 10 minutes
    if (Date.now() - payload.timestamp > 10 * 60 * 1000) {
      return { success: false, message: 'Verification expired. Please refresh the challenge.' };
    }

    // Minimum time: 1 second to prevent immediate bot scraping
    if (Date.now() - payload.timestamp < 1000) {
      return { success: false, message: 'Verification failed (too fast).' };
    }

    if (parseInt(String(userAnswer).trim(), 10) !== payload.answer) {
      return { success: false, message: 'Incorrect math verification answer. Please try again.' };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, message: 'Verification error: ' + err.message };
  }
}
