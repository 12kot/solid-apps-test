import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { Img, P, Span } from 'shared/components';
import { EAppRoutes } from 'shared/router';

import { IMGFooter, IMGStarship, IMGStarshipBg, SVGFriends, SVGLightning, SVGPlanet, SVGTask } from 'assets';

import styles from './styles.module.css';

interface ICard {
  path: EAppRoutes;
  icon: JSX.Element;
  text: string;
}

export const Navigation: React.FC = () => {
  const { t } = useTranslation('common');

  const CARDS1: ICard[] = [
    {
      path: EAppRoutes.HOME,
      icon: <SVGPlanet />,
      text: t('navigation.radar'),
    },
    {
      path: EAppRoutes.HOME,
      icon: <SVGLightning />,
      text: t('navigation.marker'),
    },
  ];

  const CARDS2: ICard[] = [
    {
      path: EAppRoutes.HOME,
      icon: <SVGTask />,
      text: t('navigation.tasks'),
    },
    {
      path: EAppRoutes.HOME,
      icon: <SVGFriends />,
      text: t('navigation.friends'),
    },
  ];

  return (
    <footer className={styles.container}>
      <nav className={styles.nav}>
        <NavigationLinks cards={CARDS1} />
        <NavigationLinks cards={CARDS2} />
      </nav>
      <div className={styles.name}>
        <P>Starship</P>
        <div className={styles.blur} />
      </div>
      <button className={styles.starship}>
        <Img url={IMGStarshipBg} className={styles.bg} />
        <Img url={IMGStarship} className={styles.ship} />
      </button>
      <Img url={IMGFooter} className={styles.image} />
    </footer>
  );
};

const NavigationLinks: React.FC<{ cards: ICard[] }> = ({ cards }) => {
  return (
    <ul className={styles.ul}>
      {cards.map((card, i) => (
        <li key={i}>
          <NavLink to={card.path} className={styles.link}>
            {card.icon}
            <Span>{card.text}</Span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
