import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-16 px-4 max-w-6xl mx-auto relative">
      <div className="about-me text-center mb-16">
        <h1 className="title text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white bg-gradient-to-r from-[#F75270] to-pink-500 bg-clip-text text-transparent dark:from-pink-300 dark:to-rose-400">
          {t(`EXPERIENCE`)}
        </h1>
      </div>
      <div className="relative">
        {/* Vertical line in the middle - only on desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 dark:bg-gray-600 h-full top-0 hidden md:block"></div>

        {/* Experiences container - vertical stack */}
        <div className="flex flex-col space-y-16 relative z-10 max-w-4xl mx-auto">
          {/* First experience - left side on desktop, full width on mobile */}
          <div className="flex items-center w-full group md:mr-auto md:-ml-16 md:w-1/2">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:mr-auto">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {t("experience_finatech")}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("experience_finatech_date")}
              </p>
              <hr />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                <span className="font-bold">{t("project_name")}: </span>
                <span>{t("experience_finatech_date_project")}</span>
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t("experience_finatech_date_project_desc")}
              </p>
              <hr />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t("experience_finatech_desc")}
              </p>
            </div>
          </div>

          {/* Second experience - right side on desktop, full width on mobile */}
          <div className="flex items-center w-full group md:ml-auto md:-mr-16 md:w-1/2">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:ml-auto">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {t("experience_fpt")}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t("experience_fpt_date")}
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t("experience_fpt_desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
