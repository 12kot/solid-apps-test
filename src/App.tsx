import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from 'shared/router';
import { ENV, SHOULD_FULLLSCREEN, TELEGRAM_LANGUAGE, TG } from 'shared/utils';

import i18n from './locales/config';
i18n.init();

const App: React.FC = () => {
  i18n.changeLanguage(TELEGRAM_LANGUAGE);

  useEffect(() => {
    const callback = (e: TouchEvent) => {
      const event = (e as any).originalEvent || e;
      if (event.scale !== 1) {
        event.preventDefault();
      }
    };

    document.addEventListener('touchmove', callback, { passive: false });
    return () => document.removeEventListener('touchmove', callback);
  }, []);

  useEffect(() => {
    if (SHOULD_FULLLSCREEN) {
      //@ts-ignore
      window.Telegram.WebApp?.requestFullscreen();
    } else {
      const rootStyles = document.documentElement;
      rootStyles.style.setProperty('--fullscreen-page-top', '16px');
    }
  }, []);

  if (!TG?.initData) return <>Only in Telegram</>;

  return (
    <BrowserRouter basename={ENV.BASE_URL}>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
