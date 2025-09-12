import { NextResponse } from 'next/server';
import { getDraftPost } from '@/lib/api';

export async function GET(request: Request, { params }: { params: { locale: string } }) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const slug = searchParams.get('slug');

    if (!secret || secret !== process.env.DRAFT_SECRET) {
        return NextResponse.json({ message: 'Invalid secret' }, { status: 403 });
    }

    if (!slug) {
        return NextResponse.json({ message: 'Slug is required' }, { status: 400 });
    }

    const draftPost = await getDraftPost(slug);

    if (!draftPost) {
        return NextResponse.json({ message: 'Draft not found' }, { status: 404 });
    }

    return NextResponse.json(draftPost);
}