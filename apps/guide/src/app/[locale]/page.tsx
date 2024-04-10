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
  const folderPath: string = 'iphone/widget'; // - Dynamic Route: [i]/[category]
  const posts = getPostMetaData(locale, folderPath);

  const postPreviewForList = posts.map((post) => (
    <Link key={post.slug} href={`/${locale}/${folderPath}/${post.slug}`}>
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
