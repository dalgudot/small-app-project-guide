import s from './SchedulerAddress.module.css';
import { NewTab } from '../../NewTab/NewTab';
import { SchedulerLogoSVG } from '../../../Foundations/Logo/SchedulerLogoSVG';

export function SchedulerAddress({ locale }: { locale: 'ko' | 'en' }) {
  const name =
    locale === 'ko'
      ? // ? '스케줄러 · 한국인이 만든 아이폰 달력(캘린더) 앱'
        '스케줄러 · 미리 알림부터 캘린더까지. 쉽게 연동하는 아이폰 달력 앱' // 2024.4.29 메시지 변경
      : // : 'Scheduler · iPhone Calendar App with Essential Features';
        'Scheduler · Seamlessly Link Reminders and Calendars. iPhone Calendar App.'; // 2024.4.29 메시지 변경

  const href =
    locale === 'ko'
      ? 'https://apps.apple.com/kr/app/id6467635137'
      : 'https://apps.apple.com/app/id6467635137';

  return (
    <address className={s.address}>
      <NewTab href={href}>
        {/* SVG 크기 조정 위해 span 꼭 필요 */}
        <span>
          <SchedulerLogoSVG />
        </span>
        <p>{name}</p>
      </NewTab>
    </address>
  );
}
