import { Code } from '@repo/ui/mdx/code';
import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import { ReactNode } from 'react';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <H1>{children}</H1>,
    h2: ({ children }) => <h2 style={{ color: 'red' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ color: 'blue' }}>{children}</h3>,
    p: ({ children }) => <p style={{ color: 'gray' }}>{children}</p>,
    code: ({ children }) => <Code>{children}</Code>,
    // img: (props) => (
    //   <Image
    //     sizes='100vw'
    //     style={{ width: '100%', height: 'auto' }}
    //     {...(props as ImageProps)}
    //   />
    // ),
    ...components,
  };
}

function H1({ children }: { children: ReactNode }): JSX.Element {
  return <h1 style={{ fontSize: '100px' }}>{children}</h1>;
}
