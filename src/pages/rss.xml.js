import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Raphael Hemme | IO-Garden',
    description: 'Some thoughts, notes, code snippets and ideas',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
    customData: `<language>en-us</language>`,
  })
}
