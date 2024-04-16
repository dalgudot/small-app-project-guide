import s from './SchedulerAddress.module.css';
import { NewTab } from '../../NewTab/NewTab';
import { SchedulerLogoSVG } from '../../../Foundations/Logo/SchedulerLogoSVG';

export function SchedulerAddress({ locale }: { locale: 'ko' | 'en' }) {
  const name =
    locale === 'ko'
      ? '스케줄러 · 한국인이 만든 아이폰 달력(캘린더) 앱'
      : 'Scheduler · iPhone Calendar App with Essential Features';

  const href =
    locale === 'ko'
      ? 'https://apps.apple.com/kr/app/id6467635137'
      : 'https://apps.apple.com/app/id6467635137';

  return (
    <address className={s.address}>
      <NewTab href={href}>
        <SchedulerLogoSVG />
        <p>{name}</p>
      </NewTab>
    </address>
  );
}
