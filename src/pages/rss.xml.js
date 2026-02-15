import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Raphael Hemme | IO-Garden',
    description: 'Some thoughts, notes, code snippets and ideas',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}`,
    })),
    customData: `<language>en-us</language>`,
  })
}
