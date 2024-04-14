import { Locale, locales } from '@/i18n';
import dynamic from 'next/dynamic';
import fs from 'fs';

interface Param {
  locale: Locale;
  category: string;
  title: string;
}

export async function generateStaticParams() {
  let params: Param[] = [];

  // ✨ 한, 영으로 모든 콘텐츠를 작성하지 않으면서 SSG
  locales.forEach((locale) => {
    const categories = fs.readdirSync(`src/posts/${locale}`);

    categories.forEach((category) => {
      const files: string[] = fs
        .readdirSync(`src/posts/${locale}/${category}`)
        .filter((file) => file.endsWith('.meta.mdx'));

      files.forEach((file) => {
        const param: Param = {
          locale: locale,
          category: category,
          title: file.replace('.meta.mdx', ''),
        };

        params.push(param);
      });
    });
  });

  // console.log('params', params);

  return params;
}

// Dynamic Routes
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default function PostPage({
  params,
}: {
  params: { locale: Locale; category: string; title: string };
}) {
  const { locale, category, title } = params;

  // MDX 활용 위한 Dynamic import
  // https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading
  const MDXContent = dynamic(
    () => import(`../../../../posts/${locale}/${category}/${title}.mdx`)
  );

  return <MDXContent />;
}
