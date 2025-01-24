import { IMGHomeScreen, IMGHomeScreenPlaner, SVGLightning } from 'assets';
import { ImgBackground, Navigation, PageWrapper, Button, P } from 'shared/components';

import { MiniProfile } from './components';

import styles from './styles.module.css';

export const Home: React.FC = () => {
  return (
    <PageWrapper className={styles.container}>
      <div className={styles.padding}>
        <MiniProfile />
      </div>

      <div className={styles.management}>
        <Button className={styles.button}>
          <P>Charge storage devices</P> <SVGLightning />
        </Button>
        <Navigation />
      </div>

      <ImgBackground url={IMGHomeScreenPlaner} />
      <ImgBackground url={IMGHomeScreen} />
    </PageWrapper>
  );
};
