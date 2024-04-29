import s from './SchedulerAddress.module.css';
import s2 from './MDXAppLink.module.css';
import { NewTab } from '../../NewTab/NewTab';
import { SchedulerLogoSVG } from '../../../foundations/logo/SchedulerLogoSVG';
import { Locale } from '../../../typs';
import { AppInfo } from '../../../info/AppInfo';
import { IconNewTap24 } from '../../../foundations/svg/icon-new-tap-24';

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

export function MDXAppLink({ locale }: Props) {
  const appInfo = new AppInfo();

  return (
    <footer style={{ marginTop: '72px' }}>
      <NewTab href={appInfo.getSchedulerAppLink(locale)} className={s2.a}>
        <span>
          <SchedulerLogoSVG />
        </span>
        <div className={s2.right__side}>
          <div className={s2.right__side__info}>
            <h4>{appInfo.getSchedulerAppName(locale)}</h4>
            <p>{appInfo.getSchedulerMessage(locale)}</p>
          </div>
          {/* span이 있어야 반응형에서 크기 유지한 채로 줄어든다. */}
          <span>
            <IconNewTap24 />
          </span>
        </div>
      </NewTab>
    </footer>
  );
}
