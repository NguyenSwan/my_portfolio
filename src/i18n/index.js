import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      name: 'Nguyen Swan',
      about: "About me",
      about_description: "I am a software engineer with 6 months of experience, passionate about creating well-designed products. I am a proactive learner, constantly improving my skills and ready to take on new challenges.",
      experience: "Experience",
      EXPERIENCE: "EXPERIENCE",
      
      project_name: "Project's name",
      experience_finatech: "Frontend Developer at Finatech JSC",
      experience_finatech_date: "03/2025 - 08/2025",
      experience_finatech_date_project: "Wedding Event Management System",
      experience_finatech_date_project_desc: "A web-based platform that allows users to plan, organize, and manage wedding events, including budgets, suppliers, and guest lists,...",
      experience_finatech_desc:"As a Front-End Developer, I designed and developed responsive, user-friendly web interfaces using ReactJS and Material UI. Focused on creating clean, reusable components and ensuring smooth user interactions through well-structured, performant code. Integrated RESTful APIs for dynamic data handling and collaborated closely with backend engineers to deliver a seamless and optimized user experience.",

      experience_fpt: "Students at FPT University",
      experience_fpt_date: "2022 - Present",
      experience_fpt_desc: "During my time at FPT University, I built a strong foundation in programming and software development. I actively created and contributed to various projects ranging from Front-End to Full-Stack, using technologies such as ReactJS, Node.js, Express, MongoDB, and MySQL. These experiences helped me strengthen my problem-solving skills, creativity, and ability to build scalable, user-centered web applications.",

      projects: "Projects",
      PROJETCS: "PROJECTS",
      a_showcase: "A showcase of my work and experiments",
      
      prj_portfolio: "Portfolio",
      prj_portfolio_date: "4/2025",
      prj_portfolio_des: "A portfolio using React, i18n... to show my skills",
      
      prj_cake: "Cake Website",
      prj_cake_date: "8/2025",
      prj_cake_des: "A website using React Vite, Express, Mongo,... with role Admin, User",

      prj_ope: "Admin Dashboard",
      prj_ope_date: "3/2025",
      prj_ope_des: "A project Admin dashboarch using React, Taiwindcss,... in NodeJS",

      prj_on_thi: "Driving test",
      prj_on_thi_date: "10/2025",
      prj_on_thi_des: "A driving test preparation project using React, TaiwindCSS, with Admin and User roles",

      // Thêm cho project nhỏ (small projects)
      project_small1_title: "Calculator App",
      project_small1_desc: "A responsive calculator app with a sleek, modern design and custom themes.",

      skills: "Skills",
      skills_programming: "Programming Languages: TypeScript, Java, C",
      skills_frameworks: "Libraries & Frameworks: ReactJS, NextJS, TailwindCSS, Mantine, React-I18N, NestJS, Spring Boot",
      skills_tools: "Tools: Git, GitHub, Docker, MySQL, Cloudflare",
      contact: "Contact",
      contact_description: "Always available for freelancing if the right project comes along. Feel free to contact me!",
      contact_email: "Email: nthiennga211@gmail.com",
      lightdark: "Light/ Dark",
      welcome: "Welcome",
      cv: "Download CV",
      web_developer: "Web Developer",
      phone: "Phone",
      email: "Email",
      view_detail: "View detail",
      other_prj: "Other Projects"
    },
  },
  vi: {
    translation: {
      name: 'Nguyễn Thiên Nga',
      about: 'Giới thiệu',
      about_description: "Tôi là một kỹ sư phần mềm với 6 tháng kinh nghiệm, đam mê tạo ra những sản phẩm được thiết kế tỉ mỉ. Tôi là một người học hỏi tích cực, không ngừng nâng cao kỹ năng và sẵn sàng đón nhận những thử thách mới.",
      experience: "Kinh nghiệm",
      EXPERIENCE: "KINH NGHIỆM",
      
      project_name: "Tên project",
      experience_finatech: "Frontend Developer tại Finatech JSC",
      experience_finatech_date: "03/2025 - 08/2025",
      experience_finatech_date_project: "Hệ thống quản lý sự kiện đám cưới",
      experience_finatech_date_project_desc: "Nền tảng web cho phép người dùng lập kế hoạch, tổ chức và quản lý sự kiện đám cưới, bao gồm ngân sách, nhà cung cấp và danh sách khách mời,...",
      experience_finatech_desc:"Là một lập trình viên Front-End, tôi thiết kế và phát triển giao diện web hiện đại, thân thiện với người dùng bằng ReactJS và Material UI. Tập trung xây dựng các component tái sử dụng, tối ưu hiệu suất và đảm bảo trải nghiệm tương tác mượt mà. Tích hợp RESTful API để xử lý dữ liệu động và phối hợp chặt chẽ với nhóm backend nhằm mang lại trải nghiệm người dùng liền mạch và tối ưu.",
      
      experience_fpt: "Sinh viên tại Đại học FPT",
      experience_fpt_date: "2022 - Hiện tại",
      experience_fpt_desc: "Trong quá trình học tại Đại học FPT, tôi đã xây dựng nền tảng vững chắc về lập trình và phát triển phần mềm. Tôi chủ động thực hiện nhiều dự án từ Front-End đến Full-Stack, sử dụng các công nghệ như ReactJS, Node.js, Express, MongoDB và MySQL. Những trải nghiệm này giúp tôi nâng cao khả năng giải quyết vấn đề, tư duy sáng tạo và phát triển ứng dụng web hiệu quả, thân thiện với người dùng.",

      projects: "Dự án",
      PROJETCS: "DỰ ÁN",
      a_showcase: "Các dự án của tôi",
      
      prj_portfolio: "Portfolio",
      prj_portfolio_date: "4/2025",
      prj_portfolio_des: "Một dự án sử dụng React, i18n... để thể hiện kỹ năng của tôi",

      prj_cake: "Cake Website",
      prj_cake_date: "8/2025",
      prj_cake_des: "Một trang web sử dụng React Vite, Express, Mongo,... với vai trò Admin, User",

      prj_ope: "Admin Dashboard",
      prj_ope_date: "3/2025",
      prj_ope_des: "Một dự án Admin dashboard sử dụng React, Taiwindcss,... trong NodeJS",

      prj_on_thi: "Driving test",
      prj_on_thi_date: "10/2025",
      prj_on_thi_des: "Một dự án ôn thi bằng lái sử dụng React, TaiwindCSS, có role Admin và User",
      // Thêm cho project nhỏ (small projects)
      project_small1_title: "Calculator App",
      project_small1_desc: "Ứng dụng máy tính đáp ứng nhanh với thiết kế hiện đại, đẹp mắt và giao diện tùy chỉnh.",
     
      skills: "Kỹ năng",
      skills_programming: "Ngôn ngữ lập trình: TypeScript, Java, C",
      skills_frameworks: "Thư viện & Framework: ReactJS, NextJS, TailwindCSS, Mantine, React-I18N, NestJS, Spring Boot",
      skills_tools: "Công cụ: Git, GitHub, Docker, MySQL, Cloudflare",
      contact: "Liên hệ",
      contact_description: "Luôn sẵn sàng cho các dự án tự do nếu có cơ hội phù hợp. Hãy liên hệ với tôi!",
      contact_email: "Email: nthiennga211@gmail.com",
      lightdark: "Sáng/ Tối",
      welcome: "Xin chào",
      cv: "Tải CV",
      web_developer: "Web Developer",
      phone: "Điện thoại",
      email: "Email",
      view_detail: "Xem chi tiết",
      other_prj: "Các dự án khác"
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;