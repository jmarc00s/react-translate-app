import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../../types/language';

interface AppContextProps {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
}

const initialState: AppContextProps = {
  language: 'pt-BR',
  changeLanguage: () => {},
};

export const AppContext = React.createContext<AppContextProps>(initialState);

export const AppContextProvider = ({ children }: any) => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState<Language>('pt-BR');

  const changeLanguage = (newLanguage: Language): void => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <AppContext.Provider value={{ language, changeLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
