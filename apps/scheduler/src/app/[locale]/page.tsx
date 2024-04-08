import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Locale } from '@/i18n';
import { Code } from '@repo/ui/code';

export default function Home({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  const t = useTranslations('Home');

  return (
    <main>
      <h1>{t('Small App Project')} </h1>
      <Code> This is a code!</Code>
      <Link href={`/${locale}/blog`}>Blog</Link>
    </main>
  );
}
