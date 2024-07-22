import Parser from 'rss-parser';

const parser = new Parser();

export async function fetchRSSFeed(url: string) {
  const feed = await parser.parseURL(url);
  return feed.items; // Return the items in the feed
}
