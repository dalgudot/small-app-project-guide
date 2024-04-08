import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['ko', 'en'] as const;

export type Locale = (typeof locales)[number];

interface Props {
  locale: string;
}

export default getRequestConfig(async ({ locale }: Props) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
