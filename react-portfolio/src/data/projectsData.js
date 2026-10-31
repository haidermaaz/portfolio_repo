import boshnaImg from '../assets/png/projects/boshna.png'
import salveowellImg from '../assets/png/projects/salveowell.png'
import sapImg from '../assets/png/projects/sap.png'
import bixosoftImg from '../assets/png/projects/bixosoft.png'
import imagetowordImg from '../assets/png/projects/imagetoword.png'
import mentorathandImg from '../assets/png/projects/mentorathand.png'
import poloImg from '../assets/png/projects/polo.png'
import plantsImg from '../assets/png/projects/plants.png'
import educationImg from '../assets/png/projects/education.png'
import teachersdashboardImg from '../assets/png/projects/teachersdashboard.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'Boshna — Livestock Marketplace & Escrow Platform',
        projectDesc: 'Contributed to the development of an Arabic-first livestock marketplace connecting buyers and sellers across Saudi Arabia. Worked on frontend and backend functionality supporting direct sales, live auctions, silent auctions, buyer requests, and butchering orders. Contributed to real-time auction workflows, wallet management, and escrow-based payment processes. Supported order management, split purchasing, and butchering and delivery workflows. Helped maintain secure, data-driven functionality and a responsive Arabic RTL interface with English language support.',
        tags: ['Laravel', 'PHP', 'MySQL', 'GraphQL', 'WebSockets', 'Redis', 'JavaScript', 'Bootstrap', 'Al Rajhi Payment Integration'],
        code: '',
        demo: 'https://boshna.sa/',
        image: boshnaImg
    },
    {
        id: 2,
        projectName: 'Salveowell — Multi-Region E-commerce & Membership Platform',
        projectDesc: 'Contributed to full-stack development of a multi-region e-commerce and membership platform serving four international markets. Developed responsive storefront interfaces, product catalogues, membership packages, and personalized member subdomain shops. Worked on Laravel backend functionality, integrating frontend components with dynamic data and business logic. Supported region-specific pricing, product visibility, membership workflows, and checkout experiences. Built and maintained reusable UI components to ensure consistency and responsiveness across the platform.',
        tags: ['PHP', 'Laravel', 'Blade', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3', 'Slick', 'Swiper', 'DataTables'],
        code: '',
        demo: 'https://salveowell.com/',
        image: salveowellImg
    },
    {
        id: 3,
        projectName: 'Salveowell Admin Panel (SAP) — Executive Analytics Platform',
        projectDesc: 'Contributed to the development of an executive reporting platform providing management with financial insights and business performance analytics. Worked on dashboards displaying profit and loss, revenue trends, APIs, network performance, and commission analytics. Contributed to frontend and backend functionality for data-driven reporting and role-based access control. Supported exportable financial reports and threshold-based alerts for critical business events. Collaborated with the team to deliver secure, reliable reporting aligned with the main Salveowell platform.',
        tags: ['Financial Dashboards', 'Laravel', 'Role-Based Access Control', 'Reporting', 'Data Analytics', 'API Integration'],
        code: '',
        demo: 'https://sap.salveowell.com/',
        image: sapImg
    },
    {
        id: 4,
        projectName: 'BixoSoft — Corporate Website & Admin Panel',
        projectDesc: 'Contributed to the development of BixoSoft’s corporate website, showcasing the company’s services, solutions, portfolio, and client success stories. Developed the admin panel to support website content and information management. Worked on frontend interfaces and Laravel backend functionality to deliver a responsive and maintainable web experience. Supported dynamic content management and seamless integration between the website and backend systems. Collaborated with the team to improve website functionality, usability, and maintainability.',
        tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
        code: '',
        demo: 'https://bixosoft.com/',
        image: bixosoftImg
    },
    {
        id: 5,
        projectName: 'ImageToWord — OCR & Document Conversion Platform',
        projectDesc: 'Developed a clone of ImageToText.info for our company, replicating its core interface and document conversion workflows using Python and FastAPI. Built frontend functionality for image-to-text extraction, file uploads, and document conversion to Word format. Developed the admin panel to manage platform operations and administrative functionality. Implemented backend functionality using FastAPI to handle data processing and document conversion workflows. Focused on responsive UI, usability, and a seamless experience for users converting images into editable Word documents.',
        tags: ['Python', 'FastAPI', 'JavaScript', 'HTML5', 'CSS3'],
        code: '',
        demo: 'https://www.imagetotext.info/',
        image: imagetowordImg
    },
    {
        id: 6,
        projectName: 'Mentor At Hand — Mentor-Mentee Marketplace',
        projectDesc: 'Developed Mentor At Hand as my Final Year Project (FYP), a web platform designed to connect mentors with individuals seeking professional guidance and mentorship. Built the frontend using React and developed backend functionality using Laravel. Implemented interactive user interfaces and integrated frontend components with backend APIs and database functionality. Focused on creating a user-friendly platform to facilitate mentor discovery and mentorship-related interactions. Applied full-stack development practices to deliver a responsive, maintainable, and functional web application.',
        tags: ['React.js', 'Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
        code: '',
        demo: 'https://mentor-at-handweb.netlify.app/',
        image: mentorathandImg
    },
    {
        id: 7,
        projectName: 'POLO — Modern Website UI',
        projectDesc: 'Developed a responsive website using React as one of my early frontend development projects. Built reusable UI components and interactive page elements to create a modern browsing experience. Focused on responsive layouts, clean design, and component-based development. Strengthened my understanding of React, JavaScript, and modern frontend development practices.',
        tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
        code: '',
        demo: 'https://polo-site.netlify.app/',
        image: poloImg
    },
    {
        id: 8,
        projectName: 'Plants — Plant Website UI',
        projectDesc: 'Developed a plant-themed website as an early frontend development project. Created structured web pages with visually appealing layouts and organized content. Implemented styling and responsive design to improve usability across different screen sizes. Built a foundation in webpage structure, styling, and frontend development.',
        tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
        code: 'https://github.com/haidermaaz/plants_repo',
        demo: 'https://haidermaaz.github.io/plants_repo/',
        image: plantsImg
    },
    {
        id: 9,
        projectName: 'Education — Educational Website UI',
        projectDesc: 'Built an educational website focused on presenting information through a clean and user-friendly interface. Developed page layouts and navigation elements to organize educational content effectively. Applied CSS styling and JavaScript to enhance the website\'s presentation and interactivity. Improved my frontend development skills through practical implementation and responsive design.',
        tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
        code: 'https://github.com/haidermaaz/education_repo',
        demo: 'https://haidermaaz.github.io/education_repo/',
        image: educationImg
    },
    {
        id: 10,
        projectName: 'Teacher\'s Dashboard — To-Do List Module',
        projectDesc: 'Developed a task management module as part of a teacher dashboard web application. Implemented functionality to add tasks, search existing tasks, and clear tasks through a simple, user-friendly interface. Designed an organized layout with navigation to related educational dashboard sections. Focused on usability, structured content, and interactive frontend functionality. This project helped strengthen my practical frontend development skills and understanding of task management interfaces.',
        tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
        code: 'https://github.com/haidermaaz/teachers-dashboard',
        demo: 'https://haidermaaz.github.io/teachers-dashboard/',
        image: teachersdashboardImg
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/