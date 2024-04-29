import { Locale } from '../typs';

export class AppInfo {
  getSchedulerAppName(locale: Locale): string {
    return locale === 'ko' ? '스케줄러' : 'Scheduler';
  }

  getSchedulerAppLink(locale: Locale): string {
    return locale === 'ko'
      ? 'https://apps.apple.com/kr/app/id6467635137'
      : 'https://apps.apple.com/app/id6467635137';
  }

  getSchedulerMessage(locale: Locale): string {
    return locale === 'ko'
      ? // ? '한국인이 만든 아이폰 달력(캘린더) 앱'
        '미리 알림부터 캘린더까지. 쉽게 연동하는 아이폰 달력 앱' // 2024.4.29 메시지 변경
      : // : 'iPhone Calendar App with Essential Features';
        'Seamlessly Link Reminders and Calendars. iPhone Calendar App.'; // 2024.4.29 메시지 변경
  }
}
