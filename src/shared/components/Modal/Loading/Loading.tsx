import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RigthModal } from '../RigthModal';

import { IMGLoaderScreen } from 'assets/img';
import { BlurWrapper, H1, ImgBackground, LineLoader, H3, Span, Backlight } from 'shared/components';

import styles from './styles.module.css';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const LoadingModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation('common');
  const [loadingPercents, setLoadingPercents] = useState<number>(0);

  useEffect(() => {
    if (!isOpen) return;

    const timeout = setInterval(() => {
      if (loadingPercents >= 100) {
        setLoadingPercents(100);
        clearInterval(timeout);
        setIsOpen();
      } else {
        setLoadingPercents((v) => v + 2);
      }
    }, 100);

    return () => clearInterval(timeout);
  }, [loadingPercents, setIsOpen, isOpen]);

  return (
    <RigthModal setIsOpen={setIsOpen} isOpen={isOpen} className={styles.container}>
      <H1 className={styles.logo}>{t('logo')}</H1>
      <section className={styles.content}>
        <div className={styles.loaderContainer}>
          <H3>{t('loading')}</H3>
          <LineLoader progress={loadingPercents} />
        </div>
        <BlurWrapper>
          <Span>In the "friends" tab you can see statistics on the number of referrals of 3 lines and additional earnings from them</Span>
        </BlurWrapper>
      </section>
      <Backlight />
      <Backlight isTop />
      <ImgBackground url={IMGLoaderScreen} />
    </RigthModal>
  );
};
