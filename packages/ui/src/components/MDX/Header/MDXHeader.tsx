import { Locale } from '../../../typs';
import { SchedulerAddress } from '../AppLink/SchedulerAddress';

interface Props {
  children: React.ReactNode;
  locale: Locale;
}

export function MDXHeader({ children, locale }: Props) {
  return (
    <header style={{ marginBottom: '72px' }}>
      <h1 style={{ fontSize: '34px', fontWeight: '700' }}>{children} </h1>
      <SchedulerAddress locale={locale} />
    </header>
  );
}
