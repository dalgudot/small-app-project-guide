import { Locale } from '@/i18n';
import { getPostMetaData } from '@/lib/getPostMetaData';
import dynamic from 'next/dynamic';

// ✨ SSG - next-intl이 아직 지원하지 않음. - Production /${locale}/blog 에서 500 에러 발생
// ```pnpm build``` 로 확인 가능
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
// export const generateStaticParams = async ({
//   params: { locale },
// }: Readonly<{
//   params: { locale: Locale };
// }>) => {
//   const posts = getPostMetaData(locale);

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

// Dynamic Routes
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
const BlogPostPage = ({
  params,
}: {
  params: { i: string; category: string; slug: string; locale: Locale };
}) => {
  const { i, category, slug, locale } = params;

  // MDX 활용 위한 Dynamic import
  // https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading
  // ✨ 한, 영으로 모든 콘텐츠를 작성하지 않기 위한 Custom Logic
  const MDXContent = dynamic(
    () => import(`../../../../../posts/${i}/${category}/${slug}.${locale}.mdx`)
  );

  return (
    // ✨ main 및 article 태그는 layout에서 넣어도 될 듯!
    <main>
      <article>
        <h1>{slug}</h1>
        <MDXContent />
      </article>
    </main>
  );
};

export default BlogPostPage;
