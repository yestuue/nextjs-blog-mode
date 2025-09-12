import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Logic to disable draft mode
    // This could involve clearing a session or a token that indicates draft mode is active

    return NextResponse.json({ message: 'Draft mode disabled' });
}