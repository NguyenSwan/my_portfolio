import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

function Projects() {
  const { t } = useTranslation();
  const largeScrollRef = useRef(null);

  // Function để scroll left/right cho large
  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Danh sách project lớn (chỉ ảnh, hover hiện info với overlay nhẹ)
  const largeProjects = [
    {
      title: t('prj_portfolio'),
      date: t('prj_portfolio_date'),
      desc: t('prj_portfolio_des'),
      image: './porfolio.png', // Thay bằng ảnh thực
      link: './home'
    },
    {
      title: t('prj_cake'),
      date: t('prj_cake_date'),
      desc: t('prj_cake_des'),
      image: './cakewebsite.png',
      link: 'https://github.com/NguyenSwan/cake-website'
    },
    {
      title: t('prj_ope'),
      date: t('prj_ope_date'),
      desc: t('prj_ope_des'),
      image: './operator.png',
      link: ''
    },
    {
      title: t('prj_on_thi'),
      date: t('prj_on_thi_date'),
      desc: t('prj_on_thi_des'),
      image: './on_bang_lai.png',
      link: 'https://github.com/NguyenSwan/on-thi-bang-lai'
    },
  ];

  // Danh sách project nhỏ (vertical scroll, như hình)
  const smallProjects = [
    {
      title: t('project_small1_title'),
      desc: t('project_small1_desc'),
      icon: './icons/calculator.svg',
      link: 'https://calculator-lyx5hs32d-swans-projects-59b1ffe2.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto dark:bg-gray-800 transition-all duration-300">
      <div className="about-me text-center mb-16">
        <h1 className="title text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white bg-gradient-to-r from-[#F75270] to-pink-500 bg-clip-text text-transparent dark:from-pink-300 dark:to-rose-400">
          {t(`PROJETCS`)}
        </h1>
        <p className="subtitle text-xl text-gray-600 dark:text-gray-300">
            {t('a_showcase')}
        </p>
      </div>

      {/* Phần project lớn - Horizontal scroll với arrows, chỉ ảnh, overlay nhẹ */}
      <div className="mb-12 relative">
        <div className="flex items-center">
          {/* Nút trái */}
          <button
            onClick={() => scrollLeft(largeScrollRef)}
            className="absolute left-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 opacity-80 hover:opacity-100 -translate-y-1/2"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scroll container large */}
          <div 
            ref={largeScrollRef} 
            className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide w-full no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {largeProjects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => window.open(project.link, '_blank')}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {/* Hover overlay nhẹ - opacity thấp hơn để không che hết ảnh */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{project.date}</p>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-2">{project.desc}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm self-start"
                  >
                    {t('view_detail')} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Nút phải */}
          <button
            onClick={() => scrollRight(largeScrollRef)}
            className="absolute right-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 opacity-80 hover:opacity-100 -translate-y-1/2"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Phần Other Projects - Đồng nhất màu đen tối (bg-gray-900 cho toàn bộ, cards bg-gray-800 cho tương phản nhẹ) */}
      <div className="relative">
        {/* Thanh tiêu đề đen đồng nhất */}
        <div className="p-4 rounded-t-lg flex justify-between items-center mb-0">
          <h3 className="text-xl font-semibold">{t('other_prj')}</h3>
        </div>
        
        {/* Container vertical scroll - đồng nhất bg-gray-900, text trắng */}
        <div className="rounded-b-lg overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-gray-600 p-4 space-y-4">
          {smallProjects.map((project, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 cursor-pointer border border-gray-700 hover:border-red-500"
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* Icon nhỏ */}
              <img
                src={project.icon}
                alt={project.title}
                className="w-12 h-12 object-cover rounded flex-shrink-0 mt-1"
              />
              
              {/* Nội dung */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm mb-1 line-clamp-1">{project.title}</h4>
                <p className="text-xs line-clamp-2 mb-3">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-xs inline-block"
                >
                  {t('view_detail')} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;