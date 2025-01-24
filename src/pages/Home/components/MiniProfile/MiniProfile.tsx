import { IMGHomeHeader } from 'assets';
import { BlurWrapper } from 'shared/components';

import { Account, Cards, Progress } from './components';

import styles from './styles.module.css';

export const MiniProfile: React.FC = () => {
  return (
    <BlurWrapper image={IMGHomeHeader} className={styles.container}>
      <Account />
      <Cards />
      <Progress />
    </BlurWrapper>
  );
};
