import { useTranslation } from 'react-i18next';
import { IconWrapper, LineLoader, P, Span } from 'shared/components';

import { SVGTimer, SVGLightning } from 'assets';

import styles from './styles.module.css';

interface ICard {
  icon: JSX.Element;
  text: string;
  desc: string;
}

export const Progress: React.FC = () => {
  const { t } = useTranslation('common');
  
  const CARDS: ICard[] = [
    {
      icon: <SVGLightning />,
      text: '1.1k / 3.5k',
      desc: t('amountOfEnergy'),
    },
    {
      icon: <SVGTimer />,
      text: '00:12:56',
      desc: t('timeUntilEnergyEnds'),
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.balance}>
        {CARDS.map((card, i) => (
          <Card {...card} key={i} />
        ))}
      </div>
      <LineLoader progress={40} />
    </section>
  );
};

const Card: React.FC<ICard> = ({ text, desc, icon }) => {
  return (
    <div className={styles.card}>
      <IconWrapper className={styles.cardIcon}>{icon}</IconWrapper>
      <div className={styles.cardText}>
        <P>{text}</P>
        <Span>{desc}</Span>
      </div>
    </div>
  );
};
