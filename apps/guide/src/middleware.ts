import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

/**
 * The middleware matches a locale for the request and handles redirects and rewrites accordingly.
 */
export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'ko',

  // ✨ 이런저런 이유로 'ko와 en'이라는 접두사를 언제나 쓰는 게 좋을 듯!
  // Don't use a locale prefix for the default locale
  // https://next-intl-docs.vercel.app/docs/routing/middleware#locale-prefix-as-needed
  // localePrefix: 'as-needed',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ko|en)/:path*'],
};
