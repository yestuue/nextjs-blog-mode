import Parser from 'rss-parser';
import { NewsArticle } from '../../../types/components';
import CryptoNewsClient from './CryptoNewsClient';

export default async function page() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://rss.app/feeds/t2qEpzoAbyQi091X.xml');
  
  const articles: NewsArticle[] = feed.items.map(item => ({
    title: item.title || '',
    excerpt: item.contentSnippet || '',
    date: item.pubDate ? new Date(item.pubDate).toLocaleDateString() : '',
    author: item.creator || 'Anonymous',
    slug: item.guid || '',
    image: item.enclosure?.url || undefined,
  }));

  return <CryptoNewsClient articles={articles} />;
}