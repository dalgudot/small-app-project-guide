import { SchedulerAddress } from '../SchedulerAddress/SchedulerAddress';

interface Props {
  children: React.ReactNode;
  locale: 'ko' | 'en';
}

export function MDXHeader({ children, locale }: Props) {
  return (
    <header>
      {children}
      <SchedulerAddress locale={locale} />
    </header>
  );
}
