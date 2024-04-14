import { Locale } from '@/i18n';
import dynamic from 'next/dynamic';

// ✨ SSG - 모든 파일 주소 미리 받아와 각 MDXContent를 모두 가져와야 SSG 가능!
// ```pnpm build``` 로 확인 가능
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
// export const generateStaticParams = async ({
//   params,
// }: Readonly<{
//   params: { locale: Locale; category: string; title: string };
// }>) => {
//   const { locale, category, title } = params;

//   return params;

// const posts = getPostListData(locale);

// return posts.map((post) => ({
//   slug: post.slug,
// }));
// };

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
  // ✨ 한, 영으로 모든 콘텐츠를 작성하지 않기 위한 Custom Logic
  const MDXContent = dynamic(
    () => import(`../../../../posts/${locale}/${category}/${title}.mdx`)
  );

  return <MDXContent />;
}
