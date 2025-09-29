import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-800 transition-all duration-300">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{t('projects')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{t('project_mindgpt_title')}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('project_mindgpt_date')}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{t('project_mindgpt_desc')}</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{t('project_jsclub_recruitment_title')}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('project_jsclub_recruitment_date')}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{t('project_jsclub_recruitment_desc')}</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{t('project_cmed_title')}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('project_cmed_date')}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{t('project_cmed_desc')}</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;