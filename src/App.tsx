import { useTranslation } from 'react-i18next';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import { useApp } from './config/context/AppContext/useApp';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Welcome />
      </Container>
    </>
  );
}

export default App;
