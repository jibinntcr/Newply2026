import { NextRequest, NextResponse } from 'next/server';
import { saveQuote } from '@/lib/store';
import { verifyCaptcha } from '@/lib/captcha';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      product,
      quantity,
      message,
      captchaToken,
      captchaAnswer,
      website_url_hp, // Honeypot field
    } = body;

    // 1. Honeypot check (bots fill this out)
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
        { error: 'Please enter a valid phone number (minimum 7 digits).' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { error: 'Please describe your plywood requirement or inquiry.' },
        { status: 400 }
      );
    }

    // Extract client IP
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0] ||
      req.headers.get('x-real-ip') ||
      '';

    // 4. Save to MongoDB & Resilient Store
    const saved = await saveQuote({
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      product: product || 'General Enquiry',
      quantity: quantity ? quantity.trim() : '',
      message: message.trim(),
      ip,
    });

    return NextResponse.json({
      success: true,
      message: 'Quote enquiry received successfully. Our sales team will connect with you promptly.',
      leadId: saved.id,
    });
  } catch (err: any) {
    console.error('Error handling quote submission:', err);
    return NextResponse.json(
      { error: 'Internal server error while processing your quote.' },
      { status: 500 }
    );
  }
}
