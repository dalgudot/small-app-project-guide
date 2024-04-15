import { PostListData, PostListItem, getPostListData } from './getPostListData';
import Link from 'next/link';
import s from './PostListView.module.css';
interface Props {
  title: string;
  locale: string;
}

export function PostListView({ title, locale }: Props) {
  const PostListDatas: PostListData[] = getPostListData(`src/posts/${locale}`);

  return (
    <ul className={s.list__ul}>
      <h2>{title}</h2>
      {PostListDatas.map((postByCategory) => {
        const category: string = postByCategory.category;
        const postListItems: PostListItem[] = postByCategory.postListItems;

        // Category 폴더만 만들어 놓은 경우 방지
        if (postListItems.length !== 0) {
          return (
            <PostListItemView
              locale={locale}
              category={category}
              postListItems={postListItems}
            />
          );
        }
      })}
    </ul>
  );
}

function PostListItemView({
  locale,
  category,
  postListItems,
}: {
  locale: string;
  category: string;
  postListItems: PostListItem[];
}) {
  return postListItems.map((item) => {
    const pathName = item.pathName;

    return (
      <li key={pathName} className={s.list__li}>
        <Link href={`/${locale}/${category}/${pathName}`}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </Link>
      </li>
    );
  });
}
