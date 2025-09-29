import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 px-4 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-800 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <img
            src="/assets/avatar.jpg" // Thay bằng đường dẫn ảnh của bạn trong src/assets/
            alt="Avatar"
            className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{t('about')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{t('about_description')}</p>
        </div>
      </div>
    </section>
  );
}

export default About;