import { Locale } from '@/i18n';
import { ReactNode } from 'react';
import s from './layout.module.css';

interface Params {
  locale: Locale;
}

export default function GuidePostLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Params;
}>) {
  return (
    <main className={s.main}>
      <article className={s.article}>{children}</article>
    </main>
  );
}
