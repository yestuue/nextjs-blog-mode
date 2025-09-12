// Header.tsx
"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
    const locale = useLocale();
    const t = useTranslations("Header");

    return (
        <div className="navigation">
            <ul className="header">
                <li><Link href={`/${locale}`}>{t("home")}</Link></li>
                <li><Link href={`/${locale}/about`}>{t("about")}</Link></li>
                <li><Link href={`/${locale}/news-feed`}>{t("cryptoNews")}</Link></li>
                <li><Link href={`/${locale}/blogs`}>{t("learnBlogs")}</Link></li>
                <li><Link href={`/${locale}/people`}>{t("people")}</Link></li>
                <li><Link href={`/${locale}/contact`}>{t("contact")}</Link></li>
                <li>
                    <LanguageSwitcher currentLocale={locale} />
                </li>
            </ul>

        </div>
    );
}
