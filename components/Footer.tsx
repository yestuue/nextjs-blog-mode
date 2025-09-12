// Footer.tsx
"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Footer() {
    const t = useTranslations("Footer");
    const { locale } = useParams();

    return (
        <footer className="bg-accent-1 border-accent-2">
            <div className="footer-image">
                <div className="footer-content">
                    <div>
                        <h2>{t("readyTransform1")}</h2>
                        <h2>{t("readyTransform2")}</h2>
                    </div>
                    <span>{t("contactUs")}</span>
                    <div className="button">{t("freeQuote")}</div>
                </div>
            </div>
            <div className="crypto-footer">
                <div className="crypto-content">
                    <div className="crypto-content-desc">
                        <div className="first-part">
                            <img src="/assets/logo.png" alt="logo" />
                            <span>{t("empowering1")}</span>
                            <span>{t("empowering2")}</span>
                            <span>{t("empowering3")}</span>
                        </div>
                        <div className="second-part">
                            <h2>{t("quickLinks")}</h2>
                            <div className="connect-header">
                                <Link href={`/${locale}`}>{t("home")}</Link>
                                <Link href={`/${locale}/about`}>{t("about")}</Link>
                                <Link href={`/${locale}/news-feed`}>{t("cryptoNews")}</Link>
                                <Link href={`/${locale}/blogs`}>{t("learnBlogs")}</Link>
                                <Link href={`/${locale}/people`}>{t("people")}</Link>
                                <Link href={`/${locale}/contact`}>{t("contact")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="crypto-bottom">
                    <h2>{t("copyright")}</h2>
                </div>
            </div>
        </footer>
    );
}
