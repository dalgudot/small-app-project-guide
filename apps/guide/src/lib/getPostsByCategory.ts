import { Locale } from '@/i18n';
import fs from 'fs';
import matter from 'gray-matter';

interface PostsByCategory {
  category: string;
  posts: Post[];
}

export interface Post {
  title: string;
  date: string;
  path: string;
  content: string;
}

export const getPostsByCategory = (locale: Locale): PostsByCategory[] => {
  const postSourceFolderRoot = `src/posts/${locale}`;
  const categoryFolderNames: string[] = fs.readdirSync(postSourceFolderRoot);

  const posts: PostsByCategory[] = categoryFolderNames.map((category) => {
    const postPath = `${postSourceFolderRoot}/${category}`;

    const markdownPostsFileNames: string[] = fs
      .readdirSync(postPath)
      .filter((file) => file.endsWith('.mdx'));

    const posts: Post[] = markdownPostsFileNames.map((name) => {
      const fileContent = fs.readFileSync(`${postPath}/${name}`, 'utf8');
      const matterResult = matter(fileContent);
      const post: Post = {
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        path: name.replace('.mdx', ''),
        content: matterResult.content,
      };

      return post;
    });

    return {
      category: category,
      posts: posts,
    };
  });

  return posts;
};
