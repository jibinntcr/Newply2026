import { NextRequest, NextResponse } from 'next/server';
import { saveContact } from '@/lib/store';
import { verifyCaptcha } from '@/lib/captcha';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      subject,
      message,
      captchaToken,
      captchaAnswer,
      website_url_hp,
    } = body;

    // 1. Honeypot check
    if (website_url_hp) {
      return NextResponse.json(
        { error: 'Spam submission detected.' },
        { status: 400 }
      );
    }

    // 2. CAPTCHA verification
    const captchaCheck = verifyCaptcha(captchaToken, captchaAnswer);
    if (!captchaCheck.success) {
      return NextResponse.json(
        { error: captchaCheck.message || 'Verification challenge failed.' },
        { status: 400 }
      );
    }

    // 3. Field validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid full name.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || !/^[0-9+\s\-()]{7,18}$/.test(phone.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid contact phone number.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { error: 'Please enter your message.' },
        { status: 400 }
      );
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0] ||
      req.headers.get('x-real-ip') ||
      '';

    const saved = await saveContact({
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      subject: subject || 'General Contact',
      message: message.trim(),
      ip,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out. We have received your message.',
      contactId: saved.id,
    });
  } catch (err: any) {
    console.error('Error handling contact submission:', err);
    return NextResponse.json(
      { error: 'Internal server error while processing your message.' },
      { status: 500 }
    );
  }
}
