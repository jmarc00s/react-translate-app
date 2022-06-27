import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ENUS from './en-US/en-US.json';
import PTBR from './pt-BR/pt-BR.json';

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
