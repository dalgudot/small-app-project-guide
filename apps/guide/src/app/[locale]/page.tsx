import { useTranslations } from 'next-intl';
import { Locale } from '@/i18n';
import { PostListView } from '@repo/ui/templates/post';

const GuideListPage = ({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) => {
  const t = useTranslations('Home');

  return (
    <main>
      <h1>{t('Small App Project')}</h1>
      <PostListView locale={locale} />
    </main>
  );
};

export default GuideListPage;
