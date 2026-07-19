// Portfolio Data Configuration for Minh Phúc

export const personalInfo = {
  name: "Minh Phúc",
  title: "Software Engineer & Full-Stack Developer",
  status: "Available for new opportunities",
  bio: "Tôi là một Kỹ sư Phần mềm đam mê tạo ra các ứng dụng web chất lượng cao, hiệu năng tốt và trải nghiệm người dùng ấn tượng. Thích thử thách bản thân với các công nghệ mới từ Frontend (React/Vite) đến Backend (Java Spring Boot/Node.js).",
  location: "TP. Hồ Chí Minh, Việt Nam",
  email: "phuc.dev@example.com",
  github: "https://github.com/MinhPhuc00ne",
  linkedin: "https://linkedin.com",
  facebook: "https://facebook.com",
  cvLink: "#"
};

export const stats = [
  { value: "15+", label: "Dự án đã hoàn thành" },
  { value: "2+", label: "Năm kinh nghiệm dev" },
  { value: "100%", label: "Tập trung chất lượng" },
  { value: "24/7", label: "Đam mê lập trình" }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    iconName: "Code",
    skills: ["React.js", "Vite", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Redux Toolkit", "RESTful API Integration"]
  },
  {
    id: "backend",
    title: "Backend Development",
    iconName: "Server",
    skills: ["Java", "Spring Boot", "Spring Security", "Node.js", "Express.js", "Microservices Architecture"]
  },
  {
    id: "database",
    title: "Database & DevOps",
    iconName: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "Git & GitHub", "CI/CD Pipeline", "Linux"]
  },
  {
    id: "tools",
    title: "Tools & Practices",
    iconName: "Wrench",
    skills: ["Agile/Scrum", "Postman", "VS Code", "IntelliJ IDEA", "Figma", "Unit Testing", "Clean Code"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Horse Racing Management System",
    category: "fullstack",
    description: "Hệ thống quản lý giải đua ngựa trực tuyến đầy đủ tính năng: Quản lý lượt đua, theo dõi tay đua (Jockey), ví thanh toán spectator, hệ thống email tự động và bảng điều khiển Admin.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Java Spring Boot", "PostgreSQL", "Docker", "Tailwind CSS"],
    github: "https://github.com/MinhPhuc00ne",
    demo: "#"
  },
  {
    id: 2,
    title: "Personal Developer Portfolio",
    category: "frontend",
    description: "Trang web Portfolio cá nhân giao diện Glassmorphism hiện đại, tối ưu SEO, hỗ trợ Responsive toàn diện và tích hợp giao diện tối/sáng năng động.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tech: ["Vite", "React", "Vanilla CSS", "Lucide Icons"],
    github: "https://github.com/MinhPhuc00ne/porfolio",
    demo: "#"
  },
  {
    id: 3,
    title: "E-Commerce Shopping Platform",
    category: "fullstack",
    description: "Nền tảng thương mại điện tử với giỏ hàng realtime, thanh toán tích hợp VNPay, hệ thống đánh giá sản phẩm và quản lý đơn hàng theo thời gian thực.",
    image: "https://images.unsplash.com/photo-1556742049-0a67568d049f?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    github: "https://github.com/MinhPhuc00ne",
    demo: "#"
  },
  {
    id: 4,
    title: "Task & Project Management API",
    category: "backend",
    description: "Hệ thống REST API phân quyền nâng cao bằng Spring Security JWT, hỗ trợ WebSocket gửi thông báo tức thì khi có cập nhật tiến độ công việc.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    tech: ["Java", "Spring Boot", "JWT", "MySQL", "Swagger"],
    github: "https://github.com/MinhPhuc00ne",
    demo: "#"
  }
];

export const timeline = [
  {
    period: "2024 - Hiện tại",
    role: "Full-Stack Software Engineer (Dự án Cá nhân & Đội ngũ)",
    company: "Freelance & University Projects",
    description: "Phát triển các ứng dụng web phức tạp sử dụng React & Java Spring Boot. Xây dựng kiến trúc hệ thống, tích hợp thanh toán, mã hoá dữ liệu và CI/CD."
  },
  {
    period: "2022 - 2024",
    role: "Sinh viên Kỹ thuật Phần mềm",
    company: "Đại học",
    description: "Chuyên sâu về Cấu trúc dữ liệu & Giải thuật, Thiết kế Cơ sở dữ liệu, Lập trình Hướng đối tượng, và Quy trình Kiểm thử phần mềm chuẩn Agile."
  }
];
