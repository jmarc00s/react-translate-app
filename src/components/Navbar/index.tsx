import LanguageSelector from '../LanguageSelector';
import Menu from '../Menu';

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-blue-900 text-white flex justify-between items-center px-4">
      <h1 className="font-bold text-xl">TranslateApp</h1>
      <Menu />
      <LanguageSelector />
    </div>
  );
};

export default Navbar;
