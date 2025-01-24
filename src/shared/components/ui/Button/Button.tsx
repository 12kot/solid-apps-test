import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import { cn } from 'shared/utils';
import { Img } from 'shared/components';

import styles from './styles.module.css';
import { IMGButton } from 'assets';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
}

export const Button: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div className={cn(styles.container, className)}>
      <button className={styles.button} {...rest}>
        {children}
      </button>
      <Img url={IMGButton} className={styles.image} />
    </div>
  );
};
