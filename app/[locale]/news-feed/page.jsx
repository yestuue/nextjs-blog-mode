// app/[locale]/news-feed/page.tsx
import Parser from "rss-parser";
import NewsFeedClient from "./NewsFeedClient";

export default async function Page() {
    const parser = new Parser();
    const feed = await parser.parseURL("https://rss.app/feeds/t2qEpzoAbyQi091X.xml");

    return <NewsFeedClient feed={feed} />;
}
