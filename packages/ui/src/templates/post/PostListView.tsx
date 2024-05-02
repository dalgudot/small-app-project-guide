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
      {/* GNB가 생기면 h2는 사라져야 함. */}
      <h2>{title}</h2>
      {PostListDatas.map((postByCategory) => {
        const category: string = postByCategory.category;

        // 최신순 정렬
        // https://lagom777.tistory.com/26
        const postListItems: PostListItem[] = postByCategory.postListItems.sort(
          (a, b) => +new Date(b.date) - +new Date(a.date)
        );

        // Category 폴더만 만들어 놓은 경우 방지
        if (postListItems.length !== 0) {
          return (
            <PostListItemView
              key={category}
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
    const { title, description, date, pathName } = item;

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    const localizedDate: string = new Date(date).toLocaleDateString();
    const dateToDisplay =
      locale === 'ko' ? date.replaceAll('-', '. ') + '.' : localizedDate;

    return (
      <li key={pathName}>
        <Link href={`/${locale}/${category}/${pathName}`} className={s.list__a}>
          <time dateTime={date}>{dateToDisplay}</time>
          <h1>{title}</h1>
          <p>{description}</p>
        </Link>
      </li>
    );
  });
}
