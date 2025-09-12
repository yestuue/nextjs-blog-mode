// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "./i18n";

const PUBLIC_FILE = /\.(.*)$/; // ignore static files

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Skip public files, api, and locales already in path
    if (
        pathname.startsWith("/api") ||
        PUBLIC_FILE.test(pathname) ||
        locales.some(locale => pathname.startsWith(`/${locale}`))
    ) {
        return;
    }

    // Redirect root `/` → `/en`
    return NextResponse.redirect(new URL("/en", req.url));
}
