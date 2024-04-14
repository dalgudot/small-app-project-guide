import fs from 'fs';
import matter from 'gray-matter';

interface PostListData {
  category: string;
  postListItems: PostListItem[];
}

export interface PostListItem {
  title: string;
  date: string;
  pathName: string;
}

export function getPostListData(postFolderPath: string): PostListData[] {
  const categoryFolderNames: string[] = fs.readdirSync(postFolderPath);

  const postListData: PostListData[] = categoryFolderNames.map((category) => {
    const postPath = `${postFolderPath}/${category}`;

    const markdownPostsFileNames: string[] = fs
      .readdirSync(postPath)
      .filter((file) => file.endsWith('.meta.mdx'));

    const postListItems: PostListItem[] = markdownPostsFileNames.map((name) => {
      const fileContent = fs.readFileSync(`${postPath}/${name}`, 'utf8');
      const matterResult = matter(fileContent);
      const meta = matterResult.data;

      // content는 @next/mdx에 의존
      const postListItem: PostListItem = {
        title: meta.title,
        date: meta.date,
        pathName: name.replace('.meta.mdx', ''),
      };

      return postListItem;
    });

    return {
      category: category,
      postListItems: postListItems,
    };
  });

  return postListData;
}
