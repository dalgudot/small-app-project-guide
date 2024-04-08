import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Locale } from '@/i18n';

export default function Home({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  const t = useTranslations('Home');

  return (
    <main>
      <h1>{t('Small App Project')}</h1>
      <Link href={`/${locale}/guide`}>Guide</Link>
    </main>
  );
}
