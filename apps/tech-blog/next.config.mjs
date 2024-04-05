import createNextra from 'nextra';

const withNextra = createNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },

  transpilePackages: ['@repo/ui'],
};

export default withNextra(nextConfig);
