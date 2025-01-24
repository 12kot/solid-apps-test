import { ReactNode } from 'react';

import { cn } from 'shared/utils';
import { Backlight } from 'shared/components';

import styles from './styles.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      {children}
      <Backlight />
    </div>
  );
};
