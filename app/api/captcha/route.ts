import { NextResponse } from 'next/server';
import { generateCaptcha } from '@/lib/captcha';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const captcha = generateCaptcha();
    return NextResponse.json(captcha);
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Failed to generate captcha' },
      { status: 500 }
    );
  }
}
