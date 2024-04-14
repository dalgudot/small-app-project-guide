import fs from 'fs';
import matter from 'gray-matter';

interface MatterMetaData {
  title: string;
  description: string;
}

export function getMatterMetaData(
  locale: string,
  category: string,
  title: string
): MatterMetaData {
  const fileContent = fs.readFileSync(
    `src/posts/${locale}/${category}/${title}.meta.mdx`,
    'utf8'
  );

  const matterResult = matter(fileContent);
  const meta = matterResult.data;

  return {
    title: meta.title,
    description: meta.description,
  };
}
