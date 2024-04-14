import { useTranslations } from 'next-intl';
import { Locale, locales } from '@/i18n';
import { PostListView } from '@repo/ui/templates/post';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Params {
  locale: Locale;
}

export async function generateMetadata({ params }: { params: Params }) {
  const locale = params.locale;

  return {
    title: locale == 'ko' ? '작은 앱 가이드' : 'Small App Guide',
    description: '',
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function GuideListPage({
  params: { locale },
}: Readonly<{
  params: Params;
}>) {
  // [next-intl temp api for SSG] unstable_setRequestLocale()은 임시 해결책으로 모든 Layout과 페이지에서 쓰여야 함.
  // https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations('Home');

  return (
    <main>
      <h1>{t('Small App Project')}</h1>
      <PostListView locale={locale} />
    </main>
  );
}
