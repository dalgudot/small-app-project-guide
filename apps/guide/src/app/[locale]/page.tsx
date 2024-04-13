import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Locale } from '@/i18n';
import { Post, getPostsByCategory } from '@/lib/getPostsByCategory';

const GuideListPage = ({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) => {
  const t = useTranslations('Home');
  const postsByCategory = getPostsByCategory(locale);

  const postListByCategory = postsByCategory.map((postByCategory) => {
    const category: string = postByCategory.category;
    const posts: Post[] = postByCategory.posts;

    // Category 폴더만 만들어 놓은 경우 방지
    if (posts.length !== 0) {
      return (
        <li key={category}>
          <h1>{category}</h1>
          {postList(category, posts)}
        </li>
      );
    }
  });

  function postList(category: string, posts: Post[]) {
    return posts.map((post) => {
      const pathName = post.pathName;

      return (
        <Link key={pathName} href={`/${locale}/${category}/${pathName}`}>
          <h2>{post.title}</h2>
        </Link>
      );
    });
  }

  return (
    <main>
      <h1>{t('Small App Project')}</h1>
      {postListByCategory}
    </main>
  );
};

export default GuideListPage;
