import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="p-4 bg-gray-800 text-white dark:bg-gray-900">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">{t('name')}</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-red-200">{t('about')}</a></li>
          <li><a href="#experience" className="hover:text-red-200">{t('experience')}</a></li>
          <li><a href="#projects" className="hover:text-red-200">{t('projects')}</a></li>
          <li><a href="#skills" className="hover:text-red-200">{t('skills')}</a></li>
          <li><a href="#contact" className="hover:text-red-200">{t('contact')}</a></li>
        </ul>
        <div className="flex space-x-2">
          <button
            onClick={() => changeLanguage('vi')}
            className="px-2 py-1 rounded hover:bg-gray-700"
          >
            VI
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className="px-2 py-1 rounded hover:bg-gray-700"
          >
            EN
          </button>
          <button
            onClick={toggleTheme}
            className="px-2 py-1 rounded hover:bg-gray-700"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;