import { Locale, locales } from '@/i18n';
import dynamic from 'next/dynamic';
import fs from 'fs';
import { getFrontMatterMetaData } from '@repo/ui/templates/post';
import { Metadata } from 'next';

interface Params {
  locale: Locale;
  category: string;
  title: string;
}

// 포스트별로 동적으로 MetaData 생성
export function generateMetadata({ params }: { params: Params }): Metadata {
  const { locale, category, title } = params;
  const meta = getFrontMatterMetaData(locale, category, title);

  const metaTitle = meta.title;
  const description = meta.description;
  const myName = locale === 'ko' ? '김경환' : 'KyungHwan Kim';

  return {
    title: metaTitle,
    description: description,

    openGraph: {
      title: metaTitle,
      description: description,
      type: 'article',
      publishedTime: '2023-01-01T00:00:00.000Z',
      authors: [myName],
    },
  };
}

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params#multiple-dynamic-segments
export function generateStaticParams(): Params[] {
  let paramsArr: Params[] = [];

  // ✨ 한, 영으로 모든 콘텐츠를 작성하지 않으면서 SSG
  locales.forEach((locale) => {
    const categories = fs.readdirSync(`src/posts/${locale}`);

    categories.forEach((category) => {
      const files: string[] = fs
        .readdirSync(`src/posts/${locale}/${category}`)
        .filter((file) => file.endsWith('.meta.mdx'));

      files.forEach((file) => {
        const params: Params = {
          locale: locale,
          category: category,
          title: file.replace('.meta.mdx', ''),
        };

        paramsArr.push(params);
      });
    });
  });

  return paramsArr;
}

// Dynamic Routes
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default function PostPage({ params }: { params: Params }): JSX.Element {
  const { locale, category, title } = params;

  // MDX 활용 위한 Dynamic import
  // https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading
  const MDXContent = dynamic(
    () => import(`../../../../posts/${locale}/${category}/${title}.mdx`)
  );

  return <MDXContent />;
}
