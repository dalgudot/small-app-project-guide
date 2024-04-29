import s from './SchedulerAddress.module.css';
import { NewTab } from '../../NewTab/NewTab';
import { SchedulerLogoSVG } from '../../../foundations/svg/SchedulerLogoSVG';
import { Locale } from '../../../typs';
import { AppInfo } from '../../../info/AppInfo';

interface Props {
  locale: Locale;
}

export function SchedulerAddress({ locale }: Props) {
  const appInfo = new AppInfo();

  return (
    <address className={s.address}>
      <NewTab href={appInfo.getSchedulerAppLink(locale)}>
        {/* SVG 크기 조정 위해 span 꼭 필요 */}
        <span>
          <SchedulerLogoSVG />
        </span>
        <p>{`${appInfo.getSchedulerAppName(locale)} · ${appInfo.getSchedulerMessage(locale)}`}</p>
      </NewTab>
    </address>
  );
}
