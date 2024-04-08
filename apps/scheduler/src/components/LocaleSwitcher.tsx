'use client';

import { Locale, locales } from '@/i18n';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LocaleSwitcher = () => {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale): string => {
    if (!pathName) return '/';

    const pathNameSegments: string[] = pathName.split('/');
    pathNameSegments[1] = locale; // pathNameSegments의 index 1은 'locale'

    return pathNameSegments.join('/');
  };

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LocaleSwitcher;
