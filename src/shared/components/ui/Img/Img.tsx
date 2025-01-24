import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { cn } from 'shared/utils';

import styles from './styles.module.css';

interface Props extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  url: string;
}

export const Img: React.FC<Props> = ({ url, className, ...rest }) => {
  return <img className={cn(styles.image, className)} src={url} {...rest} loading='lazy'/>;
};

export const ImgBackground: React.FC<Props> = ({ ...rest }) => {
  return <Img {...rest} className={styles.bg} />;
};
