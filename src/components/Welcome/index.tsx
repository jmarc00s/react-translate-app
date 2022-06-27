import React from 'react';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <h1 className="text-center py-2 font-bold text-3xl text-gray-800">{t('welcome')}</h1>
  );
};

export default Welcome;
