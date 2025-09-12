import { NextResponse } from 'next/server';
import { revalidatePath } from '@/lib/api';

export async function POST(request: Request) {
  const { secret, slug } = await request.json();

  // Check for the secret to confirm the request is valid
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 403 });
  }

  // Revalidate the specified path
  try {
    await revalidatePath(slug);
    return NextResponse.json({ message: 'Revalidated successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to revalidate', error: error.message }, { status: 500 });
  }
}