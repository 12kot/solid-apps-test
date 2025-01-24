import { cn } from 'shared/utils';

import styles from './styles.module.css';

export const PageLoader: React.FC = () => {
  return (
    <div className={styles.page}>
      <Loader />
    </div>
  );
};

export const Loader: React.FC = () => {
  return (
    <svg viewBox="25 25 50 50" className={styles.container}>
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  );
};

interface LineProps {
  progress: number;
}

export const LineLoader: React.FC<LineProps> = ({ progress }) => {
  return (
    <div className={styles.lineLoader}>
      <div className={cn(styles.lineStyles, styles.blur)} style={{ width: `${progress}%` }} />
      <div className={cn(styles.lineStyles, styles.lineLoad)} style={{ width: `${progress}%` }} />
    </div>
  );
};
