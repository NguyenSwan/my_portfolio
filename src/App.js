import { useTranslation } from "react-i18next";
import "./index.css";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {

  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div>
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
