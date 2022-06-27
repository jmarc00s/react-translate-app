import { useTranslation } from 'react-i18next';
import { useApp } from './config/context/AppContext/useApp';

function App() {
  const { language, changeLanguage } = useApp();
  const { t } = useTranslation();

  const handleChangeLanguageClick = () => {
    changeLanguage('en-US');
  };

  return (
    <div className="App">
      <h1 className="font-bold underline">Hello world!</h1>
      <h2>{t('welcome')}</h2>
      <p>{language}</p>
      <button
        className="bg-slate-900 px-2 py-4 rounded-sm shadow-sm text-gray-100"
        onClick={handleChangeLanguageClick}
      >
        Change Language
      </button>
    </div>
  );
}

export default App;
