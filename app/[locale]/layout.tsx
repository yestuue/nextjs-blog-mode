// app/[locale]/layout.tsx
import "../globals.css"; // ✅ Tailwind global CSS
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { headers } from "next/headers";
import { Locale, locales } from "@/i18n";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>; // ✅ Fixed: params is Promise in Next.js 15
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  // ✅ Fixed: Await params in Next.js 15
  const { locale } = await params;
  
  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages(locale);
  
  // ✅ Fixed: Await headers() in Next.js 15
  const headersList = await headers();
  const isDraftMode = headersList.get("x-draft-mode") === "true";

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <section className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {isDraftMode && (
                <div className="bg-yellow-50 border-b border-yellow-200 p-2 text-sm text-yellow-800 text-center">
                  Preview Mode Enabled -{" "}
                  <a
                    href={`/${locale}/api/disable-draft`}
                    className="underline hover:text-yellow-900"
                  >
                    Click here to exit
                  </a>
                </div>
              )}
              {children}
            </main>
            <Footer />
          </section>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}