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
      project_mindgpt_title: "MindGPT",
      project_mindgpt_date: "July 2024",
      project_mindgpt_desc: "Champion of GenAI Hackathon 2024. An AI application offering intelligent suggestions and personalized mindmaps to improve learning efficiency and creative thinking.",
      project_jsclub_recruitment_title: "JS Club's 12th Gen Membership Recruitment Landing Page",
      project_jsclub_recruitment_date: "Jan 2024",
      project_jsclub_recruitment_desc: "Landing page promoting the 12th generation member recruitment event of the Japanese Software Engineers Club - FPT University Hanoi.",
      project_cmed_title: "CMED.VN",
      project_cmed_date: "Nov 2023",
      project_cmed_desc: "Developed and maintained the official website of CMED medical business and operations consulting JSC.",
      skills: "Skills",
      skills_programming: "Programming Languages: TypeScript, Java, C",
      skills_frameworks: "Libraries & Frameworks: ReactJS, NextJS, TailwindCSS, Mantine, React-I18N, NestJS, Spring Boot",
      skills_tools: "Tools: Git, GitHub, Docker, MySQL, Cloudflare",
      contact: "Contact",
      contact_description: "Always available for freelancing if the right project comes along. Feel free to contact me!",
      contact_email: "Email: your.email@example.com",
      lightdark: "Light/ Dark",
      welcome: "Welcome",
      cv: "Download CV",
      web_developer: "Web Developer",
      phone: "Phone",
      email: "Email"
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
      project_mindgpt_title: "MindGPT",
      project_mindgpt_date: "Tháng 7/2024",
      project_mindgpt_desc: "Quán quân GenAI Hackathon 2024. Ứng dụng AI cung cấp gợi ý thông minh và bản đồ tư duy cá nhân hóa để cải thiện hiệu quả học tập và tư duy sáng tạo.",
      project_jsclub_recruitment_title: "Landing Page Tuyển thành viên Gen 12 JS Club",
      project_jsclub_recruitment_date: "Tháng 1/2024",
      project_jsclub_recruitment_desc: "Landing page quảng bá sự kiện tuyển thành viên thế hệ 12 của Câu lạc bộ Kỹ sư Phần mềm Nhật Bản - Đại học FPT Hà Nội.",
      project_cmed_title: "CMED.VN",
      project_cmed_date: "Tháng 11/2023",
      project_cmed_desc: "Phát triển và duy trì website chính thức của Công ty Tư vấn Kinh doanh và Vận hành Y tế CMED.",
      skills: "Kỹ năng",
      skills_programming: "Ngôn ngữ lập trình: TypeScript, Java, C",
      skills_frameworks: "Thư viện & Framework: ReactJS, NextJS, TailwindCSS, Mantine, React-I18N, NestJS, Spring Boot",
      skills_tools: "Công cụ: Git, GitHub, Docker, MySQL, Cloudflare",
      contact: "Liên hệ",
      contact_description: "Luôn sẵn sàng cho các dự án tự do nếu có cơ hội phù hợp. Hãy liên hệ với tôi!",
      contact_email: "Email: your.email@example.com",
      lightdark: "Sáng/ Tối",
      welcome: "Xin chào",
      cv: "Tải CV",
      web_developer: "Web Developer",
      phone: "Điện thoại",
      email: "Email"
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