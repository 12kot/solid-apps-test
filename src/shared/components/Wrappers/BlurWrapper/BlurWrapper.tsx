import { ReactNode } from 'react';

import { cn } from 'shared/utils';
import { Img } from 'shared/components';

import styles from './styles.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
  image?: string;
}

export const BlurWrapper: React.FC<Props> = ({ children, className, image }) => {
  return (
    <div className={styles.wripper}>
      <div className={cn(styles.container, className)}>{children}</div>
      {image && <Img url={image} className={styles.bg} />}
    </div>
  );
};
