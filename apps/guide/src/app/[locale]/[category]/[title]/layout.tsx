import { getFrontMatterMetaData } from '@repo/ui/templates/post';
import { ReactNode } from 'react';

// 포스트별로 동적으로 MetaData 생성
export async function generateMetadata({
  params,
}: {
  params: { locale: string; category: string; title: string };
}) {
  const { locale, category, title } = params;
  const meta = getFrontMatterMetaData(locale, category, title);

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function GuidePostLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  return (
    <main>
      <article>{children}</article>
    </main>
  );
}
