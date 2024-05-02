import s from './NewTab.module.css';

export function NewTabSchedulerApp({ locale }: { locale: 'ko' | 'en' }) {
  const name = locale === 'ko' ? '스케줄러' : 'Scheduler';

  const href =
    locale === 'ko'
      ? 'https://apps.apple.com/kr/app/id6467635137'
      : 'https://apps.apple.com/app/id6467635137';

  return (
    <NewTab href={href} className={s.a__blue}>
      {name}
    </NewTab>
  );
}

export function NewTab({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a href={href} target='_blank' className={className ? className : s.a}>
      {children}
    </a>
  );
}
