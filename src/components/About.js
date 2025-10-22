import { useTranslation } from "react-i18next";
import ava from "../assets/ava.jpeg";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about py-20 px-4 relative overflow-hidden">
      {/* Colored wrapper/gradient background */}
      <div className="about-container max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="about-me text-center mb-16">
          <h1 className="title text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white bg-gradient-to-r from-[#F75270] to-pink-500 bg-clip-text text-transparent dark:from-pink-300 dark:to-rose-400">
            ABOUT ME
          </h1>
          <p className="subtitle text-xl text-gray-600 dark:text-gray-300">
            MY STORY
          </p>
        </div>

        {/* Main about */}
        <div className="main-about grid md:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className="about-img flex justify-center">
            <div className="relative group">
              <img
                src={ava}
                alt="Profile Picture"
                className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-[#F75270] dark:border-pink-400 group-hover:scale-105 transition-transform duration-300"
              />
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#F75270] to-pink-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content */}
          <div className="about-content space-y-4">
            <p className="story text-lg leading-relaxed text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg shadow-md">
              {t("name")}
            </p>
            <p className="story text-lg leading-relaxed text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg shadow-md">
              {t("about_description")}
            </p>
            <h3 className="story text-xl font-semibold text-gray-800 dark:text-white bg-gradient-to-r from-[#F75270] to-pink-500 bg-clip-text text-transparent dark:from-pink-300 dark:to-rose-400">
              {t("contact")}
            </h3>
            <div className="info-container grid md:grid-cols-2 gap-4">
              <div className="info-item bg-gradient-to-br from-[#F75270]/10 to-pink-500/10 dark:from-pink-500/20 dark:to-rose-500/20 p-4 rounded-lg shadow-md border border-[#F75270]/20 dark:border-pink-400/30">
                <p className="info-title font-semibold text-gray-800 dark:text-white mb-1 flex items-center">
                  <span className="mr-2 text-[#F75270] dark:text-pink-400">
                    📞
                  </span>{" "}
                  {t("phone")}:
                </p>
                <p className="info-value text-gray-600 dark:text-gray-300">
                  0335390209
                </p>
              </div>
              <div className="info-item bg-gradient-to-br from-[#F75270]/10 to-pink-500/10 dark:from-pink-500/20 dark:to-rose-500/20 p-4 rounded-lg shadow-md border border-[#F75270]/20 dark:border-pink-400/30">
                <p className="info-title font-semibold text-gray-800 dark:text-white mb-1 flex items-center">
                  <span className="mr-2 text-[#F75270] dark:text-pink-400">
                    📧
                  </span>{" "}
                  {t("email")}:
                </p>
                <p className="info-value text-gray-600 dark:text-gray-300">
                  nthiennga211@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
