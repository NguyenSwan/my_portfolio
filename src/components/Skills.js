import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{t('skills')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('skills_programming')}</h3>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('skills_frameworks')}</h3>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('skills_tools')}</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;