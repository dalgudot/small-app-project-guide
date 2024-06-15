import { Locale, locales } from '@/i18n';
import dynamic from 'next/dynamic';
import fs from 'fs';
import {
  FrontMatterMetaData,
  getFrontMatterMetaData,
} from '@repo/ui/templates/post';
import { Metadata } from 'next';
import { MDXAppLink, MDXDesc, MDXHeader } from '@repo/ui/components';
import GoToList from '@/components/GoToList';
import s from './page.module.css';

interface Params {
  locale: Locale;
  category: string;
  title: string;
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

  const meta: FrontMatterMetaData = getFrontMatterMetaData(
    locale,
    category,
    title
  );

  return (
    <>
      <MDXHeader locale={locale}>{meta.title}</MDXHeader>
      <MDXDesc>{meta.description}</MDXDesc>
      <MDXContent />
      <MDXAppLink locale={locale} />
      {/* 🔥 추후 언어별로 '미디엄' '티스토리' 링크(더 많은 가이드 보기)로 변경하기! */}
      {/* <GoToList locale={locale} className={s.go__to__list} /> */}
    </>
  );
}

// 포스트별로 동적으로 MetaData 생성
export function generateMetadata({ params }: { params: Params }): Metadata {
  const { locale, category, title } = params;
  const meta: FrontMatterMetaData = getFrontMatterMetaData(
    locale,
    category,
    title
  );

  const metaTitle = meta.title;
  const desc = meta.description;
  const date = meta.date;
  const myName = locale === 'ko' ? '김경환' : 'KyungHwan Kim';

  // https://guide.dalgu.app/ <-- Base URL 있어야 링크 공유 시 image 작동
  const thumbnail = `https://guide.dalgu.app/images/${locale}/${category}/${title}/thumbnail.jpg`;

  const url = `https://guide.dalgu.app/${locale}/${category}/${title}`;

  const schedulerLink =
    locale === 'ko'
      ? 'https://apps.apple.com/kr/app/id6467635137'
      : 'https://apps.apple.com/app/id6467635137';

  return {
    title: metaTitle,
    description: desc,
    keywords:
      locale === 'ko'
        ? [
            '작은 앱 프로젝트',
            '스케줄러',
            '캘린더',
            '달력',
            '앱',
            '어플',
            '리마인더',
            '미리 알림',
            '미리알림',
            '아이폰',
          ]
        : [
            'Small App Project',
            'scheduler',
            'calendar',
            'app',
            'application',
            'reminder',
            'reminders',
            'iphone',
          ],

    openGraph: {
      title: metaTitle,
      description: desc,
      url: url,
      publishedTime: date,
      authors: [myName],
      images: thumbnail,
      locale: locale,
      type: 'article',
    },

    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: desc,
      // siteId: '1467726470533754880',
      creator: '@SmallAppProject',
      // creatorId: '1467726470533754880',
      images: thumbnail, // Must be an absolute URL
    },

    appLinks: {
      ios: [
        {
          url: schedulerLink,
          app_store_id: '6467635137',
        },
      ],
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
