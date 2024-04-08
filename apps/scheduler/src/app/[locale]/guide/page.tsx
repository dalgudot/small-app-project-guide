import { Locale } from '@/i18n';
import { getPostMetaData } from '@/lib/getPostMetaData';
import Link from 'next/link';

const BlogPostListPage = ({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) => {
  const posts = getPostMetaData(locale);

  const postPreviewForList = posts.map((post) => (
    <Link key={post.slug} href={`/${locale}/guide/${post.slug}`}>
      <h1>{post.title}</h1>
    </Link>
  ));

  return <>{postPreviewForList}</>;
};

export default BlogPostListPage;
