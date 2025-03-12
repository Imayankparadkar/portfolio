import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Level Supermind Hackathon Finalist",
        company_name: "Level Supermind",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2025",
        points: [
            "Built an AI-driven platform to analyze and optimize social media engagement.",
            "Worked on automation and predictive analytics for content performance.",
            "Shortlisted among the best projects and presented in Mumbai.",
        ],
    },
    {
         title: "Flowathon Hackathon Winner",
        company_name: "Flowathon",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Feb 2025",
        points: [
            "Developed an AI-powered automation tool using LangFlow.",
            "Implemented real-time data analysis and automation strategies.",
            "Secured the top position in the competition.",
        ],
    },
    {
        title: "Pune Hackathon - AI Fraud Detection",
        company_name: "Pune Hackathon",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Feb 2025",
        points: [
            "Built a real-time AI-powered call scam detection system.",
            "Leveraged machine learning models to analyze call patterns and prevent fraud.",
            "Designed a scalable backend for secure and fast processing.",
        ],
    },
    {
        title: "UI/UX Intercollege Competition Winner",
        company_name: "Intercollege Competition",
        icon: tesla,
        iconBg: "#ffb3c1",
        date: "2025",
        points: [
            "Won first place in an intercollege UI/UX competition.",
            "Designed a user-centric interface with strong usability principles.",
            "Demonstrated innovative and effective UI/UX solutions.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Imayankparadkar',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mayankparadkar',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Social Media Performance Analyzer',
        description: 'Built a GPT-powered AI tool to analyze engagement metrics and suggest content optimization strategies.',
        link: 'https://social-acro.vercel.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'EV Charging Spot Finder',
        description: 'Developed a Flutter Flow-based mobile app to locate and navigate to the nearest EV charging stations in real-time.',
        link: 'https://app.flutterflow.io/preview/ev-project-mv5odi?page=Chatbot',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'One-to-One Mentorship Platform',
        description: 'Designed a mentorship platform where users can book sessions with mentors and pay per minute using Razorpay.',
        link: 'https://github.com/YourGitHubUsername/mentorship-platform',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'AI Air Quality Monitoring System',
        description: 'Developed an AI-powered system for real-time air quality monitoring and pollution analysis.',
        link: 'https://github.com/Imayankparadkar/Air_quality_website',
    }
];