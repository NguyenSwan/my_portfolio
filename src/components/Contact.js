import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 px-4 max-w-6xl mx-auto bg-gray-100 dark:bg-gray-800 transition-all duration-300">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{t('contact')}</h2>
      <div className="max-w-md mx-auto text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{t('contact_description')}</p>
        <p className="text-lg text-gray-600 dark:text-gray-300">{t('contact_email')}</p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Contact;