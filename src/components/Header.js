import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    changeLanguage(i18n.language === "vi" ? "en" : "vi");
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSettingsMenu = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const isDark = theme === "dark";
  const isEn = i18n.language === "en";
  const currentLang = isEn ? "EN" : "VI";

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 z-50 shadow-lg ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white/30 text-gray backdrop-blur-sm"
      }`}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">{t("name")}</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#about" className="hover:text-red-200">
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-red-200">
              {t("experience")}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-red-200">
              {t("projects")}
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-red-200">
              {t("skills")}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-200">
              {t("contact")}
            </a>
          </li>
        </ul>

        {/* Right side container for mobile and desktop actions */}
        <div className="flex items-center space-x-2">
          {/* Mobile Settings */}
          <div className="md:hidden flex space-x-4 items-center">
            {/* Language Button */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded hover:bg-gray-700 text-sm font-medium text-gray"
            >
              {currentLang}
            </button>

            {/* Theme Toggle */}
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isDark}
                onChange={toggleTheme}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-gray-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              <span className="ml-3 text-sm font-medium text-gray">
                {t("lightdark")}
              </span>
            </label>

            {/* Mobile Hamburger Menu Button */}
            <button onClick={toggleMobileMenu} className="p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1 bg-gray-400">
                <span className="block w-full h-0.5 bg-white"></span>
                <span className="block w-full h-0.5 bg-white"></span>
                <span className="block w-full h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Desktop Settings Button */}
          <div className="hidden md:block relative">
            <button onClick={toggleSettingsMenu} className="p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>

            {/* Desktop Settings Dropdown */}
            {isSettingsOpen && (
              <div className="absolute top-full right-0 mt-2 bg-gray-700 rounded-md shadow-lg py-2 px-2 z-50 min-w-[150px]">
                {/* Language Button */}
                <button
                  onClick={toggleLanguage}
                  className="block w-full text-left px-3 py-1 rounded hover:bg-gray-600 text-sm font-medium mb-2 text-white"
                >
                  {currentLang}
                </button>

                {/* Theme Toggle inside Dropdown */}
                <label className="relative inline-flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isDark}
                    onChange={toggleTheme}
                    className="sr-only peer"
                  />
                  <div
                    className="relative w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-gray-500 
                      after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                      after:bg-white after:border-gray-300 after:border after:rounded-full 
                      after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"
                  ></div>
                  <span className="ml-3 text-sm font-medium text-white">
                    {t("lightdark")}
                  </span>
                </label>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#about" className="block py-2 hover:text-red-200">
            {t("about")}
          </a>
          <a href="#experience" className="block py-2 hover:text-red-200">
            {t("experience")}
          </a>
          <a href="#projects" className="block py-2 hover:text-red-200">
            {t("projects")}
          </a>
          <a href="#skills" className="block py-2 hover:text-red-200">
            {t("skills")}
          </a>
          <a href="#contact" className="block py-2 hover:text-red-200">
            {t("contact")}
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
