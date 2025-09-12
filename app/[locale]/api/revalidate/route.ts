import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const requestHeaders = new Headers(request.headers);
    const secret = requestHeaders.get("x-vercel-reval-key");

    if (!secret) {
      return NextResponse.json(
        { message: "Missing revalidation key" },
        { status: 400 }
      );
    }

    if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: "Invalid revalidation key" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { type, tags } = body;

    // Validate the webhook payload
    if (!type || !tags || !Array.isArray(tags)) {
      return NextResponse.json(
        { message: "Invalid webhook payload" },
        { status: 400 }
      );
    }

    // Revalidate all provided tags
    for (const tag of tags) {
      revalidateTag(tag);
    }

    return NextResponse.json({
    revalidated: true,
    type,
    tags,
    now: Date.now(),
  });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating tags" },
      { status: 500 }
    );
  }
}
