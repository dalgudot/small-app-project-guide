// https://next-intl-docs.vercel.app/docs/getting-started/app-router
import createNextIntlPlugin from 'next-intl/plugin';

// https://nextjs.org/docs/pages/building-your-application/configuring/mdx#remark-and-rehype-plugins
import createMDX from '@next/mdx';

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    // remarkPlugins: [remarkGfm],
    // rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  transpilePackages: ['@repo/ui'],

  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

// Merge MDX config with Next.js config
export default withNextIntl(withMDX(nextConfig));
