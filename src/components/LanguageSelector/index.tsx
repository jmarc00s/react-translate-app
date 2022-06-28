import React, { useState } from 'react';
import { useApp } from '../../config/context/AppContext/useApp';
import { Language } from '../../config/types/language';

const LanguageSelector = () => {
  const { language, changeLanguage } = useApp();

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(language);

  const handleSelectLanguage = (newLanguage: any) => {
    setSelectedLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
      value={selectedLanguage}
      onChange={({ target }) => handleSelectLanguage(target.value)}
    >
      <option value="pt-BR">Português</option>
      <option value="en-US">English</option>
    </select>
  );
};

export default LanguageSelector;
