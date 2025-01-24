export const TG = window.Telegram?.WebApp;
export const TELEGRAM_LANGUAGE = TG?.initDataUnsafe?.user?.language_code || 'en'; 
export const PHOTO_URL = TG?.initDataUnsafe?.user?.photo_url; 

export const SHOULD_FULLLSCREEN =
  window.Telegram.WebApp.isVersionAtLeast('8.0') &&
  window.Telegram.WebApp.platform !== 'tdesktop' &&
  window.Telegram.WebApp.platform !== 'weba';
