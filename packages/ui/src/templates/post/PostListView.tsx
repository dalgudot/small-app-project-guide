import { Post, getPostsByCategory } from './getPostsByCategory';
import Link from 'next/link';

interface Props {
  locale: string;
}

export const PostListView = ({ locale }: Props) => {
  const postsByCategory = getPostsByCategory(`src/posts/${locale}`);

  return (
    <>
      {postsByCategory.map((postByCategory) => {
        const category: string = postByCategory.category;
        const posts: Post[] = postByCategory.posts;

        // Category 폴더만 만들어 놓은 경우 방지
        if (posts.length !== 0) {
          return (
            <li key={category}>
              <h1>{category}</h1>
              <PostList locale={locale} category={category} posts={posts} />
            </li>
          );
        }
      })}
    </>
  );
};

const PostList = ({
  locale,
  category,
  posts,
}: {
  locale: string;
  category: string;
  posts: Post[];
}) => {
  return posts.map((post) => {
    const pathName = post.pathName;

    return (
      <Link key={pathName} href={`/${locale}/${category}/${pathName}`}>
        <h2>{post.title}</h2>
      </Link>
    );
  });
};
