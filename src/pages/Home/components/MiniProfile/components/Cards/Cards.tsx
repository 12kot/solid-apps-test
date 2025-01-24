import { IconWrapper, Img, P } from 'shared/components';

import { IMGCard1, IMGCard2, IMGCard3, IMGCard4 } from 'assets';

import styles from './styles.module.css';

export const Cards: React.FC = () => {
  const CARDS = [
    {
      image: IMGCard1,
      bg: '#227CE738',
      text: '4.2k',
    },
    {
      image: IMGCard2,
      bg: '#2AE3C01A',
      text: '5.7k',
    },
    {
      image: IMGCard3,
      bg: '#F469FF24',
      text: '5.1k',
    },
    {
      image: IMGCard4,
      bg: '#FFE76924',
      text: '2.2M',
    },
  ];

  return (
    <section className={styles.container}>
      {CARDS.map((card, i) => (
        <div className={styles.card} key={i}>
          <IconWrapper className={styles.cardIcon} style={{ backgroundColor: card.bg }}>
            <Img url={card.image} />
          </IconWrapper>
          <P>{card.text}</P>
        </div>
      ))}
    </section>
  );
};
