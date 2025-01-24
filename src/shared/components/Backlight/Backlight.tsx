import { cn } from 'shared/utils';
import styles from './styles.module.css';

interface Props {
  isTop?: boolean;
}

export const Backlight: React.FC<Props> = ({ isTop }) => {
  return <div className={cn(styles.container, isTop && styles.top)} />;
};
