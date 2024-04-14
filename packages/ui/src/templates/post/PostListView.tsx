import { PostListData, PostListItem, getPostListData } from './getPostListData';
import Link from 'next/link';
import s from './PostListView.module.css';
interface Props {
  locale: string;
}

export function PostListView({ locale }: Props) {
  const PostListDatas: PostListData[] = getPostListData(`src/posts/${locale}`);

  return (
    <ul className={s.list__ul}>
      {PostListDatas.map((postByCategory) => {
        const category: string = postByCategory.category;
        const postListItems: PostListItem[] = postByCategory.postListItems;

        // Category 폴더만 만들어 놓은 경우 방지
        if (postListItems.length !== 0) {
          return (
            <li key={category} className={s.list__li}>
              {/* 🔥 category의 Localization은 어떻게 할 것인가? */}
              {/* Props에 locaizedCategory: { categoryKey: { ko: '', en:'' } } 추가해서 각 app별로 받아오기 */}
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
  return (
    <ul className={s.item__ul}>
      {postListItems.map((item) => {
        const pathName = item.pathName;

        return (
          <li key={pathName}>
            <Link href={`/${locale}/${category}/${pathName}`}>
              <h1 className={s.item__title}>{item.title}</h1>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
