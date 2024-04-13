import fs from 'fs';
import matter from 'gray-matter';

interface PostsByCategory {
  category: string;
  posts: Post[];
}

export interface Post {
  title: string;
  date: string;
  pathName: string;
  content: string;
}

export const getPostsByCategory = (
  postFolderPath: string
): PostsByCategory[] => {
  const categoryFolderNames: string[] = fs.readdirSync(postFolderPath);

  const posts: PostsByCategory[] = categoryFolderNames.map((category) => {
    const postPath = `${postFolderPath}/${category}`;

    const markdownPostsFileNames: string[] = fs
      .readdirSync(postPath)
      .filter((file) => file.endsWith('.mdx'));

    const posts: Post[] = markdownPostsFileNames.map((name) => {
      const fileContent = fs.readFileSync(`${postPath}/${name}`, 'utf8');
      const matterResult = matter(fileContent);
      const post: Post = {
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        pathName: name.replace('.mdx', ''),
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
