import { Locale } from '@/i18n';
import { ReactNode } from 'react';

export default function GuidePostLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <main>
      <article>{children}</article>
    </main>
  );
}
