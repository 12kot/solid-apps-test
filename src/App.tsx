import { BrowserRouter } from 'react-router-dom';

import { useEffect } from 'react';
import { ENV } from 'shared/utils';
import { Routes } from 'shared/router';

import i18n from './locales/config';
i18n.init();

const App: React.FC = () => {
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

  return (
    <BrowserRouter basename={ENV.BASE_URL}>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
