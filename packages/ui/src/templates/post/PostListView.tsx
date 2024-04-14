import { PostListItem, getPostListData } from './getPostListData';
import Link from 'next/link';

interface Props {
  locale: string;
}

export const PostListView = ({ locale }: Props) => {
  const PostListData = getPostListData(`src/posts/${locale}`);

  return (
    <>
      {PostListData.map((postByCategory) => {
        const category: string = postByCategory.category;
        const postListItems: PostListItem[] = postByCategory.postListItems;

        // Category 폴더만 만들어 놓은 경우 방지
        if (postListItems.length !== 0) {
          return (
            <li key={category}>
              <span>{category}</span>
              <PostListItemView
                locale={locale}
                category={category}
                postListItems={postListItems}
              />
            </li>
          );
        }
      })}
    </>
  );
};

const PostListItemView = ({
  locale,
  category,
  postListItems,
}: {
  locale: string;
  category: string;
  postListItems: PostListItem[];
}) => {
  return postListItems.map((item) => {
    const pathName = item.pathName;

    return (
      <Link key={pathName} href={`/${locale}/${category}/${pathName}`}>
        <h2>{item.title}</h2>
      </Link>
    );
  });
};
