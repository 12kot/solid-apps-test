import { useTranslation } from 'react-i18next';
import { IconWrapper, Img, P, Span } from 'shared/components';

import { PHOTO_URL } from 'shared/utils';
import { IMGAvatar, SVGRobot } from 'assets';

import styles from './styles.module.css';

export const Account: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section className={styles.container}>
      <button className={styles.profile}>
        <Img url={PHOTO_URL || IMGAvatar} className={styles.avatar} />
        <P className={styles.name}>Max</P>
      </button>
      <div className={styles.robots}>
        <IconWrapper className={styles.robot}>
          <SVGRobot />
        </IconWrapper>
        <div className={styles.activeRobots}>
          <P>3 /12</P>
          <Span>{t('activeRobots')}</Span>
        </div>
      </div>
    </section>
  );
};
