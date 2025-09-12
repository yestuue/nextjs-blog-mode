// app/[locale]/news-feed/NewsFeedClient.tsx
"use client";

import "./news-feed.css";
import { useTranslations } from "next-intl";

export default function NewsFeedClient({ feed }: { feed: any }) {
    const t = useTranslations("NewsFeed");

    return (
        <div className="news">
            <div className="news-header">
                <h2>{t("newsFeed")}</h2>
            </div>
            <div className="news-content">
                <h2>{t("headline1")}</h2>
                <h2>{t("headline2")}</h2>
                <h5>{t("subheadline")}</h5>
                <h3>{t("dailyNews")}</h3>
                <h4>{t("bitcoin")}</h4>
                <span>{t("intro1")}</span>
                <span>{t("intro2")}</span>
            </div>

            <div className="crypto-news">
                {feed.items.map((item: any) => {
                    const match = item.content.match(/<img[^>]+src="([^">]+)"/);
                    const url = match ? match[1] : null;

                    const date = new Date(item.isoDate);
                    const formatted = date.toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                    });
                    const formatDate = formatted.replace(/\//g, "-").replace(",", "");

                    return (
                        <div key={item.link} className="crypto-news-content">
                            <div className="content-image">
                                <a href={item.link} target="_blank">
                                    <img src={url || ""} alt="" />
                                </a>
                            </div>
                            <div className="content-description">
                                <h2>
                                    <a href={item.link} target="_blank">
                                        {item.title}
                                    </a>
                                </h2>
                                <div className="creator">
                                    <div className="created-time">{formatDate}</div>
                                    <div>|</div>
                                    <div className="creator-name">{item.creator}</div>
                                </div>
                                <p>{item.contentSnippet}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
