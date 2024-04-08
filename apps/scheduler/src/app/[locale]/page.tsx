import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Locale } from '@/i18n';
import { Code } from '@repo/ui/code';
import { Button } from '@repo/ui/button';

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
      <Button className='' appName='Scheduler'>
        This is a Button!
      </Button>
      <Link href={`/${locale}/blog`}>Blog</Link>
    </main>
  );
}
