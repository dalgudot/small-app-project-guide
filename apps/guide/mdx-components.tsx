import { BlockQuote, Code, H1, H2, H3, HR, Li, P } from '@repo/ui/mdx';
import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <H1>{children}</H1>,
    h2: ({ children }) => <H2>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    p: ({ children }) => <P>{children}</P>,
    li: ({ children }) => <Li>{children}</Li>,
    blockquote: ({ children }) => <BlockQuote>{children}</BlockQuote>,
    code: ({ children }) => <Code>{children}</Code>,
    hr: ({ children }) => <HR>{children}</HR>,
    img: (props) => (
      <Image
        width={320}
        height={320}
        style={{
          width: '100%',
          height: 'auto',
          border: '1px solid var(--g7)',
          borderRadius: '12px',
        }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}

// https://nextjs.org/docs/app/building-your-application/configuring/mdx

// Allows customizing built-in components, e.g. to add styling.

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
