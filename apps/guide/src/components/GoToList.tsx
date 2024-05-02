import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export default function GoToList({
  locale,
  className,
}: Readonly<{
  locale: Locale;
  className?: string;
}>): JSX.Element {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Post');

  return (
    <Link href='/' className={className}>
      {t('Guide List')}
    </Link>
  );
}
