import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import { useApp } from './config/context/AppContext/useApp';

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
