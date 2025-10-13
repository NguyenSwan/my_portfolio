import { useTranslation } from 'react-i18next';
import ava from '../assets/ava.jpeg';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="about-container max-w-6xl mx-auto">
        {/* Title */}
        <div className="about-me text-center mb-16">
          <h1 className="title text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">{t('about_me')}</h1>
          <p className="subtitle text-xl text-gray-600 dark:text-gray-300">{t('my_story')}</p>
        </div>

        {/* Main about */}
        <div className="main-about grid md:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className="about-img flex justify-center md:justify-end">
            <img 
              src={ava}
              alt="Profile Picture" 
              className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-gray-200 dark:border-gray-700"
            />
          </div>

          {/* Content */}
          <div className="about-content space-y-4">
            <p className="story text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('i_am_nguyen_thien_nga')}
            </p>
            <p className="story text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t('about_description')}
            </p>
            <h3 className="story text-xl font-semibold text-gray-800 dark:text-white">
              {t('personal_information')}
            </h3>
            <div className="info-container grid md:grid-cols-2 gap-4">
              <div className="info-item bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <p className="info-title font-semibold text-gray-800 dark:text-white mb-1">📞 {t('phone')}:</p>
                <p className="info-value text-gray-600 dark:text-gray-300">0335390209</p>
              </div>
              <div className="info-item bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <p className="info-title font-semibold text-gray-800 dark:text-white mb-1">📧 {t('email')}:</p>
                <p className="info-value text-gray-600 dark:text-gray-300">nguyenthiennga21@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;