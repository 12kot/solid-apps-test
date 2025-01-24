import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { cn } from 'shared/utils';

import styles from './styles.module.css';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}

export const IconWrapper: React.FC<Props> = ({ children, className, ...rest }) => {
  return <div className={cn(styles.container, className)} {...rest}>{children}</div>;
};
