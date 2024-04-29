import { SchedulerLogoSVG } from '../../../foundations/svg';
import { IconNewTap24 } from '../../../foundations/svg/IconNewTap24';
import { AppInfo } from '../../../info/AppInfo';
import { Locale } from '../../../typs';
import { NewTab } from '../../NewTab/NewTab';
import s from './MDXAppLink.module.css';

interface Props {
  locale: Locale;
}

export function MDXAppLink({ locale }: Props) {
  const appInfo = new AppInfo();

  return (
    <footer style={{ marginTop: '72px' }}>
      <NewTab href={appInfo.getSchedulerAppLink(locale)} className={s.a}>
        <span>
          <SchedulerLogoSVG />
        </span>
        <div className={s.right__side}>
          <div className={s.right__side__info}>
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
