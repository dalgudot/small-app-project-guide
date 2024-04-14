import { useTranslations } from 'next-intl';
import { Locale } from '@/i18n';
import { PostListView } from '@repo/ui/templates/post';
import { unstable_setRequestLocale } from 'next-intl/server';

// ✨ [2024.4.2 기준] next-intl에서 아직 SSG를 지원하지 않음 -> 지원하면 SSG로 변환
// ```pnpm build``` 실패, 즉 production build 실패
export async function generateStaticParams() {
  const locales = ['ko', 'en'];

  return locales.map((locale) => ({ locale }));
}

export default function GuideListPage({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  // unstable_setRequestLocale()은 임시 해결책으로 모든 Layout과 페이지에서 쓰여야 함.
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
