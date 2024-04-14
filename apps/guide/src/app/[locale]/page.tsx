import { useTranslations } from 'next-intl';
import { Locale, locales } from '@/i18n';
import { PostListView } from '@repo/ui/templates/post';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import s from './page.module.css';

interface Params {
  locale: Locale;
}

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export function generateMetadata({ params }: { params: Params }): Metadata {
  const locale = params.locale;
  const smallAppGuide = locale === 'ko' ? '작은 앱 가이드' : 'Small App Guide';
  const desc = '';
  const myName = locale === 'ko' ? '김경환' : 'KyungHwan Kim';
  const url =
    locale === 'ko'
      ? 'https://guide.dalgu.app/ko'
      : 'https://guide.dalgu.app/en';

  const schedulerLink =
    locale === 'ko'
      ? 'https://apps.apple.com/kr/app/id6467635137'
      : 'https://apps.apple.com/app/id6467635137';

  const reminderLink =
    locale === 'ko'
      ? 'https://apps.apple.com/kr/app/id6444939279'
      : 'https://apps.apple.com/app/id6444939279';

  return {
    title: smallAppGuide,
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
          ]
        : [
            'Small App Project',
            'scheduler',
            'calendar',
            'app',
            'application',
            'reminder',
            'reminders',
          ],

    // S of Basic Fields
    generator: myName,
    applicationName: smallAppGuide,
    referrer: 'origin-when-cross-origin',
    authors: [{ name: myName, url: url }],
    creator: myName,
    publisher: myName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    // E of Basic Fields

    metadataBase: new URL(`https://guide.dalgu.app/${locale}`),

    // alternates
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        ko: '/ko',
      },
    },

    // Open Graph
    openGraph: {
      title: smallAppGuide,
      description: desc,
      url: url,
      siteName: smallAppGuide,
      images: [
        {
          url: '', // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: '', // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
      locale: locale,
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: smallAppGuide,
      description: desc,
      // siteId: '1467726470533754880',
      creator: '@SmallAppProject',
      // creatorId: '1467726470533754880',
      images: [''], // Must be an absolute URL
    },

    appLinks: {
      ios: [
        // 스케줄러
        {
          url: schedulerLink,
          app_store_id: '6467635137',
        },
        // 리마인더
        {
          url: reminderLink,
          app_store_id: '6444939279',
        },
      ],
    },
  };
}

export function generateStaticParams(): Params[] {
  return locales.map((locale) => ({ locale }));
}

export default function GuideListPage({
  params,
}: Readonly<{
  params: Params;
}>): JSX.Element {
  const locale = params.locale;

  // [next-intl temp api for SSG] unstable_setRequestLocale()은 임시 해결책으로 모든 Layout과 페이지에서 쓰여야 함.
  // https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations('Home');

  return (
    <main className={s.main}>
      {/* <h1>{t('Small App Project')}</h1> */}
      <PostListView locale={locale} />
    </main>
  );
}
