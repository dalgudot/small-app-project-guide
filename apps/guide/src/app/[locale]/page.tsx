import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Locale } from '@/i18n';
import { getPostMetaData } from '@/lib/getPostMetaData';

const GuideListPage = ({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) => {
  const t = useTranslations('Home');
  const posts = getPostMetaData(locale);

  const postPreviewForList = posts.map((post) => (
    <Link key={post.slug} href={`/${locale}/${post.slug}`}>
      <h1>{post.title}</h1>
    </Link>
  ));

  return (
    <main>
      <h1>{t('Small App Project')}</h1>
      {postPreviewForList}
    </main>
  );
};

export default GuideListPage;
