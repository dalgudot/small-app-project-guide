import '@repo/ui/text-styles';
import '@repo/ui/globals';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import Link from 'next/link';
import ThemeSelector from '@/components/ThemeSelector';
import NextThemeProvider from '@/lib/NextThemeProviders';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale;

  return {
    title: locale == 'ko' ? '작은 앱 가이드' : 'Small App Guide',
    description: '',
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body>
        <NextThemeProvider>
          <nav>
            <Link href={`/${locale}`}>Home</Link>
            <LocaleSwitcher />

            {/* 추후 라이트 색상 추가 시 추가 */}
            {/* <ThemeSelector /> */}
          </nav>
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
