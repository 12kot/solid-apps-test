import { ReactNode } from 'react';

import { cn } from 'shared/utils';
import { useDocumentScroll } from 'shared/hooks';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  setIsOpen: () => void;
}

export const RigthModal: React.FC<Props> = ({ children, isOpen, setIsOpen, className }) => {
  useDocumentScroll(isOpen);

  return (
    <div className={cn(styles.container, isOpen && styles.active)} onClick={setIsOpen}>
      <div className={cn(styles.content, className)} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
