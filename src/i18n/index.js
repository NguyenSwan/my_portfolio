import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      name: 'Nguyen Swan',
      about: "About Me",
      about_description: "I am a software engineer with over 1 year of experience, passionate about creating carefully crafted products. I am an active learner, constantly improving my skills and embracing new challenges.",
      experience: "Experience",
      experience_vpbank_title: "Fullstack Developer at VPBank",
      experience_vpbank_date: "08/2024 - Present",
      experience_vpbank_desc: "Specially recruited after winning VPBank Technology Hackathon 2024. Developing CAIP (Conversation AI Platform) to enhance customer experience. Working on front-end and back-end features for business customer applications, optimizing performance, and ensuring robust deployment.",
      experience_viettel_title: "Backend Developer at Viettel Telecom",
      experience_viettel_date: "04/2024 - 08/2024",
      experience_viettel_desc: "Developed and maintained backend services for internal systems and contributed to a new customer information management system.",
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
    },
  },
  vi: {
    translation: {
      name: 'Nguyễn Thiên Nga',
      about: 'Giới thiệu',
      about_description: "Tôi là một kỹ sư phần mềm với hơn 1 năm kinh nghiệm, đam mê tạo ra các sản phẩm được đầu tư kỹ lưỡng. Tôi luôn chủ động học hỏi, không ngừng nâng cao kỹ năng và đón nhận những thử thách mới.",
      experience: "Kinh nghiệm",
      experience_vpbank_title: "Lập trình viên Fullstack tại VPBank",
      experience_vpbank_date: "08/2024 - Hiện tại",
      experience_vpbank_desc: "Được tuyển dụng đặc biệt sau khi giành chiến thắng tại VPBank Technology Hackathon 2024. Phát triển CAIP (Nền tảng AI Hội thoại) để nâng cao trải nghiệm khách hàng. Làm việc trên các tính năng front-end và back-end cho ứng dụng khách hàng doanh nghiệp, tối ưu hóa hiệu suất và đảm bảo triển khai ổn định.",
      experience_viettel_title: "Lập trình viên Backend tại Viettel Telecom",
      experience_viettel_date: "04/2024 - 08/2024",
      experience_viettel_desc: "Phát triển và duy trì các dịch vụ backend cho hệ thống nội bộ và tham gia xây dựng hệ thống quản lý thông tin khách hàng mới.",
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