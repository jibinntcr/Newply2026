import { NextRequest, NextResponse } from 'next/server';
import { validateAdminCredentials, createAdminSession } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Please enter both username and password.' },
        { status: 400 }
      );
    }

    const isValid = validateAdminCredentials(username.trim(), password);

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid admin username or password.' },
        { status: 401 }
      );
    }

    await createAdminSession(username.trim());

    return NextResponse.json({
      success: true,
      message: 'Login successful.',
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Authentication error: ' + err.message },
      { status: 500 }
    );
  }
}
