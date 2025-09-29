import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{t('experience')}</h2>
      <div className="space-y-8">
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{t('experience_vpbank_title')}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('experience_vpbank_date')}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{t('experience_vpbank_desc')}</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{t('experience_viettel_title')}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('experience_viettel_date')}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{t('experience_viettel_desc')}</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;