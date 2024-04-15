import fs from 'fs';
import matter from 'gray-matter';

// https://nextjs.org/docs/app/building-your-application/configuring/mdx#frontmatter
interface FrontMatterMetaData {
  title: string;
  description: string;
  date: string;
}

export function getFrontMatterMetaData(
  locale: string,
  category: string,
  title: string
): FrontMatterMetaData {
  const fileContent = fs.readFileSync(
    `src/posts/${locale}/${category}/${title}.meta.mdx`,
    'utf8'
  );

  const matterResult = matter(fileContent);
  const meta = matterResult.data;

  return {
    title: meta.title,
    description: meta.description,
    date: meta.date,
  };
}
