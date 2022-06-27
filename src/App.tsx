import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1 className="font-bold underline">Hello world!</h1>
      <h2>{t('welcome')}</h2>
    </div>
  );
}

export default App;
