import { Locale } from '@/i18n';
import fs from 'fs';
import matter from 'gray-matter';

export interface PostMetaData {
  title: string;
  date: string;
  slug: string;
}

export const getPostMetaData = (
  locale: Locale,
  folderPath: string
): PostMetaData[] => {
  const folder = `src/posts/${folderPath}/`;
  const files = fs.readdirSync(folder);
  const markdownPosts: string[] = files.filter((file) =>
    file.endsWith(locale === 'ko' ? '.ko.mdx' : '.en.mdx')
  );

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`${folder}${fileName}`, 'utf8');
    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      category: matterResult.data.category,
      date: matterResult.data.date,
      slug:
        locale === 'ko'
          ? fileName.replace('.ko.mdx', '')
          : fileName.replace('.en.mdx', ''),
    };
  });

  return posts;
};
