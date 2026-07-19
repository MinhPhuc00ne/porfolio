// Portfolio Data Configuration for Jos Nguyen (Minh Phuc)
import meImg from '../assets/ME.png';
import heroImg from '../assets/hero.png';

export const personalInfo = {
  name: "Jos Nguyen",
  title: "Software Engineer & Game Developer",
  status: "Available for new opportunities",
  bio: "I am a passionate Software Engineer & Game Developer specializing in architecting scalable full-stack web applications and immersive 3D game engines. Skilled in building robust RESTful microservices, responsive React interfaces, and high-performance Unity gameplay systems, combining core software engineering principles with dynamic interactive design.",
  location: "Ho Chi Minh City, Vietnam",
  email: "phucgammer012345@gmail.com",
  github: "https://github.com/MinhPhuc00ne",
  linkedin: "https://linkedin.com",
  facebook: "https://www.facebook.com/jos.nguyen.329862",
  cvLink: "#"
};

export const stats = [
  { value: "15+", label: "Completed Projects" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Quality Commitment" },
  { value: "24/7", label: "Passion for Coding" }
];

export const skillCategories = [
  {
    id: "gamedev",
    title: "Game Dev & 3D",
    iconName: "Gamepad2",
    skills: ["Unity Engine", "C#", "Blender 3D", "Mixamo Animation", "Physics Interactions", "Shader Lab"]
  },
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
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "Socket.io", "Microservices Architecture"]
  },
  {
    id: "database",
    title: "Database & DevOps",
    iconName: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Docker", "Git & GitHub", "CI/CD Pipeline", "Linux"]
  }
];

export const projects = [
  {
    id: "nightmare",
    title: "NightMare",
    subtitle: "A psychological horror-puzzle experience",
    category: "gamedev",
    description: "A first-person horror-puzzle game that delivers players into a dark, atmospheric environment with spatial audio-deduction mechanics.",
    image: meImg,
    tech: ["Unity", "C#", "Blender", "MongoDB", "Socket.io", "Mixamo"],
    itchLink: "https://monkz-dct.itch.io/night-mare",
    demo: "https://monkz-dct.itch.io/night-mare",
    paragraphs: [
      "Night-Mare is a first-person horror-puzzle game that delivers players into a dark, atmospheric environment. The game merges immersive visual styling with intricate spatial audio-deduction mechanics, challenging players to navigate tension-filled escape spaces.",
      "As the **gameplay and systems developer**, the primary responsibility was on building interactive puzzle mechanics, refining physics-based interactions, and maintaining player state persistence. On the backend, a secure persistent save system and player authentication flow was integrated utilizing MongoDB, managing dynamic document schemas to serialize level progression, player settings, and state transitions seamlessly.",
      "This individual project deepened technical expertise in asynchronous database operations, assembly resolution, and network serialization within the Unity engine. It also sharpened critical skills in performance profiling and custom tools development, establishing a solid understanding of keeping clean architectural boundaries between runtime game clients and persistent cloud databases."
    ],
    galleryImages: [meImg, heroImg],
    techStackSummary: {
      "Engine & 3D": "Unity Engine, Blender 3D, Mixamo Animation",
      "Programming": "C# (Async & Assembly Resolution)",
      "Backend & Realtime": "Socket.io, Node.js",
      "Database": "MongoDB (Dynamic Schema Serialization)"
    },
    techIcons: [
      { name: "Unity", key: "unity" },
      { name: "Blender", key: "blender" },
      { name: "MongoDB", key: "mongodb" },
      { name: "C#", key: "csharp" },
      { name: "Socket.io", key: "socketio" },
      { name: "Mixamo", key: "mixamo" }
    ],
    contextData: {
      motivation: "Night-Mare was born out of a desire to create a deeply atmospheric psychological horror-puzzle game where environmental spatial audio and physical mechanics drive the tension rather than cheap jumpscares.",
      myRole: {
        intro: "As the gameplay and systems developer, I was responsible for:",
        primaryFocus: [
          "Fully designed and built interactive puzzle mechanics and physics manipulation using Unity and C#.",
          "Implemented spatial audio-deduction systems to guide players through tension-filled environments.",
          "Created custom lighting, fog post-processing, and shader effects to enhance horror atmosphere."
        ],
        backendSystems: [
          "Built persistent save system and player authentication utilizing MongoDB.",
          "Serialized dynamic document schemas for level progression, player settings, and state transitions.",
          "Integrated real-time state synchronization using Socket.io and Node.js."
        ],
        collaboration: [
          "Managed version control via Git & GitHub with modular assembly definitions.",
          "Utilized Mixamo 3D animations and Blender assets for 3D character and environment setup."
        ]
      },
      keyFeatures: [
        "First-person spatial audio deduction and physical puzzle interactions.",
        "Persistent cloud save system powered by MongoDB dynamic schemas.",
        "Real-time state synchronization via Socket.io.",
        "Custom shaders, atmospheric fog, and dynamic horror lighting."
      ]
    }
  },
  {
    id: "last-ember",
    title: "Last Ember",
    subtitle: "Dark fantasy survival-action game engine & combat mechanics",
    category: "gamedev",
    description: "A dark fantasy survival-action game featuring responsive melee combo combat, enemy AI behavior trees, and dynamic particle shader effects.",
    image: heroImg,
    tech: ["Unity", "C#", "Blender", "Mixamo"],
    github: "https://github.com/MinhPhuc00ne/Last-Ember",
    demo: "https://github.com/MinhPhuc00ne/Last-Ember",
    paragraphs: [
      "Last Ember is an immersive dark fantasy survival-action game engineered using Unity and C#. It puts players in a land shrouded by darkness where managing fire mechanics and combat timing is vital to survival.",
      "As the **lead combat & systems developer**, I engineered responsive sword combat combos, weapon hit-box calculations, and modular finite state machines for enemy AI behavior.",
      "The project showcases clean architectural separation between runtime game logic, ScriptableObject data containers, and UI state management."
    ],
    galleryImages: [heroImg, meImg],
    techStackSummary: {
      "Engine": "Unity Engine, C# (State Machine Architecture)",
      "Graphics": "Shader Graph, Universal Render Pipeline (URP)",
      "3D Assets": "Blender, Mixamo Rigging"
    },
    techIcons: [
      { name: "Unity", key: "unity" },
      { name: "Blender", key: "blender" },
      { name: "C#", key: "csharp" },
      { name: "Mixamo", key: "mixamo" }
    ],
    contextData: {
      motivation: "Last Ember was developed to explore complex action-RPG combat mechanics, enemy AI decision trees, and custom particle shader interactions within Unity.",
      myRole: {
        intro: "As the lead combat and AI systems engineer, my responsibilities included:",
        primaryFocus: [
          "Developed fluid melee combo combat systems, hit-stop feedback, and dynamic hit-box collision checks.",
          "Implemented enemy AI state machines using finite state patterns and pathfinding.",
          "Architected inventory and item drop systems using C# ScriptableObjects."
        ],
        backendSystems: [
          "Implemented local binary state serialization and encrypted save/load file systems.",
          "Optimized runtime garbage collection for smooth 60 FPS combat performance."
        ],
        collaboration: [
          "Structured modular C# assemblies to maintain clean boundaries between core gameplay and UI components."
        ]
      },
      keyFeatures: [
        "Responsive action combat with hit-stop feedback and branching combos.",
        "Modular enemy AI behavior trees and spatial perception mechanics.",
        "ScriptableObject-driven inventory, stats, and equipment systems."
      ]
    }
  },
  {
    id: "horse-racing-system",
    title: "Horse Racing Management System",
    subtitle: "Enterprise race scheduling, wallet integration & spectator portal",
    category: "fullstack",
    description: "A comprehensive online horse racing management platform featuring race scheduling, jockey tracking, spectator wallet integration, and automated notifications.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Java Spring Boot", "PostgreSQL", "Docker", "Tailwind CSS"],
    github: "https://github.com/MinhPhuc00ne/horse-racing-system",
    demo: "https://github.com/MinhPhuc00ne/horse-racing-system",
    paragraphs: [
      "Horse Racing Management System is a full-featured web application designed to digitize race organization, jockey stats tracking, and spectator betting operations.",
      "Built with a Java Spring Boot backend and React frontend, the system processes real-time odds calculations and handles high-concurrency ticket transactions smoothly.",
      "This project provided hands-on experience in implementing robust transaction management, role-based security access, and Dockerized microservices deployments."
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
      heroImg
    ],
    techStackSummary: {
      "Frontend": "ReactJS, TailwindCSS, Axios",
      "Backend": "Java Spring Boot, RESTful API",
      "Real-time": "WebSockets, Redis",
      "Database": "PostgreSQL, Docker"
    },
    techIcons: [
      { name: "React", key: "react" },
      { name: "Spring", key: "spring" },
      { name: "PostgreSQL", key: "postgres" },
      { name: "Docker", key: "docker" },
      { name: "Tailwind", key: "tailwind" }
    ],
    contextData: {
      motivation: "Built to digitize large-scale horse racing events, providing real-time odds tracking, automated race scheduling, and spectator wallet management.",
      myRole: {
        intro: "As a full-stack engineer, I was responsible for:",
        primaryFocus: [
          "Designed and built the responsive frontend dashboard using ReactJS and Tailwind CSS.",
          "Implemented real-time race state dashboards and jockey leaderboards.",
          "Crafted spectator wallet transaction flows and bet placement modals."
        ],
        backendSystems: [
          "Architected scalable RESTful APIs with Java Spring Boot and Spring Security JWT authentication.",
          "Optimized PostgreSQL database schemas for high-concurrency ticket transactions.",
          "Integrated WebSockets and Redis caching for instant live odds updates."
        ],
        collaboration: [
          "Automated Docker containerization and CI/CD deployment pipelines."
        ]
      },
      keyFeatures: [
        "Real-time race odds calculation and live WebSocket updates.",
        "Spectator digital wallet integration for automated payouts.",
        "Role-Based Access Control (RBAC) for admins, jockeys, and spectators."
      ]
    }
  },
  {
    id: "academic-performance-prediction-system",
    title: "Academic Performance Prediction System",
    subtitle: "AI-driven student performance analytics & predictive modeling",
    category: "fullstack",
    description: "An intelligent web application that applies machine learning regression models to historical student data to predict academic performance and identify at-risk students.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "FastAPI", "Python", "Scikit-Learn", "PostgreSQL"],
    github: "https://github.com/MinhPhuc00ne/academic-performance-prediction-system",
    demo: "https://github.com/MinhPhuc00ne/academic-performance-prediction-system",
    paragraphs: [
      "Academic Performance Prediction System empowers educators and academic advisors to identify students who may need early intervention.",
      "The system combines a Python machine learning engine (FastAPI + Scikit-Learn) with an interactive React dashboard to visualize prediction confidence and historical trends.",
      "It demonstrates end-to-end data pipeline processing, model feature selection, and seamless RESTful integration."
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      meImg
    ],
    techStackSummary: {
      "Frontend": "React, Chart.js, TailwindCSS",
      "AI & Backend": "Python, FastAPI, Scikit-Learn, Pandas",
      "Database": "PostgreSQL"
    },
    techIcons: [
      { name: "React", key: "react" },
      { name: "Tailwind", key: "tailwind" },
      { name: "PostgreSQL", key: "postgres" }
    ],
    contextData: {
      motivation: "Envisioned as an analytical tool for educators to identify at-risk students early by applying machine learning prediction models on academic performance data.",
      myRole: {
        intro: "As the lead full-stack developer & ML engineer, I was responsible for:",
        primaryFocus: [
          "Built an interactive analytics dashboard in ReactJS for visualizing student performance metrics.",
          "Designed intuitive chart visualization components for grade distributions and risk warnings."
        ],
        backendSystems: [
          "Trained regression and classification models using Python (Scikit-Learn, Pandas) to predict student GPA.",
          "Exposed model inference endpoints via FastAPI REST web services.",
          "Structured PostgreSQL database tables for historic academic records storage."
        ],
        collaboration: [
          "Conducted feature engineering to select key academic indicators for high model accuracy."
        ]
      },
      keyFeatures: [
        "Machine learning regression model predicting student academic performance trends.",
        "Interactive React charts and grade analytics dashboard.",
        "FastAPI backend serving real-time model inference endpoints."
      ]
    }
  },
  {
    id: "perfume-management-system",
    title: "Perfume Management System",
    subtitle: "Luxury fragrance inventory management & e-commerce platform",
    category: "fullstack",
    description: "A full-stack e-commerce and inventory management platform designed for luxury fragrance brands, featuring dynamic catalog management and shopping cart functionality.",
    image: "https://images.unsplash.com/photo-1556742049-0a67568d049f?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/MinhPhuc00ne/perfume-management-system",
    demo: "https://github.com/MinhPhuc00ne/perfume-management-system",
    paragraphs: [
      "Perfume Management System provides luxury fragrance retailers with a streamlined digital storefront and inventory management dashboard.",
      "Engineered with Node.js and MongoDB on the backend and ReactJS on the frontend, it handles real-time stock synchronization, product filtering by scent notes, and secure user checkout.",
      "Features dynamic document schema management and JWT role-based access control for store managers."
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1556742049-0a67568d049f?q=80&w=1000&auto=format&fit=crop",
      heroImg
    ],
    techStackSummary: {
      "Frontend": "ReactJS, Tailwind CSS",
      "Backend": "Node.js, Express.js",
      "Database": "MongoDB, Mongoose"
    },
    techIcons: [
      { name: "React", key: "react" },
      { name: "MongoDB", key: "mongodb" },
      { name: "Express", key: "express" },
      { name: "Tailwind", key: "tailwind" }
    ],
    contextData: {
      motivation: "Created to streamline luxury perfume inventory management, order processing, and customer catalog browsing.",
      myRole: {
        intro: "As a full-stack developer, my role covered:",
        primaryFocus: [
          "Developed product catalog interfaces, search filters, and shopping cart management in ReactJS.",
          "Implemented responsive layouts and dark/light UI themes."
        ],
        backendSystems: [
          "Built REST APIs using Node.js, Express, and MongoDB for dynamic fragrance catalog CRUD operations.",
          "Implemented JWT session authentication and role-based admin inventory controls."
        ],
        collaboration: [
          "Integrated image upload and cloud media storage for product galleries."
        ]
      },
      keyFeatures: [
        "Fragrance inventory management with real-time stock level tracking.",
        "Interactive shopping cart and promo code application.",
        "Role-based admin management dashboard."
      ]
    }
  }
];

export const timeline = [
  {
    period: "2024 - Present",
    role: "Full-Stack Software Engineer & Game Systems Developer",
    company: "Freelance & Enterprise Projects",
    description: "Architecting full-stack web applications and Unity game systems. Implementing interactive physics mechanics, spatial audio deduction, persistent MongoDB save systems, and high-performance React/Spring Boot architectures."
  },
  {
    period: "2022 - 2024",
    role: "Software Engineering Student",
    company: "University",
    description: "Mastered core computer science fundamentals including Data Structures & Algorithms, Object-Oriented Design, Database Systems, Software Architecture, and Agile Methodologies."
  }
];
