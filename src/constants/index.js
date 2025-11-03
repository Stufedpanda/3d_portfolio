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
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
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
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
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
        title: "Research Engineer",
        company_name: "RNALab, University of Toronto",
        icon: starbucks,
        iconBg: "#accbe1",
        date: " Sept 2024 – May 2025",
        points: [
            "Led the design and implementation of OpenVirome, a knowledge-graph platform integrating viral SRA/NCBI bioproject data for search, analysis, and visualization.",
            "Built GraphRAG pipelines (local & global search) over Neo4j, with AI summarization and MWAS hypothesis-generation modules; exposed results via a React/Three.js web UI.",
            "Engineered data ingestion for SRA runs, biosamples, tissues, and hosts; enforced schema/ETL checks and added caching to reduce query latency.",
            "Collaborated with lab researchers to translate findings into actionable analyses; documented APIs, data contracts, and deployment procedures.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'OpenVirome',
        description: 'Developed a web application involving AI-assisted retrieval and summarization system built on a Neo4j knowledge graph of viral metagenomic data.',
        link: 'https://openvirome.com',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Clock²',
        description: 'A digital clock composed of multiple grids of smaller analog clocks.',
        link: 'https://stufedpanda.github.io/ClockSquared/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'MuJuCo RL Comparisons',
        description: 'Independant implementation and verification of reinforcement learning methods showcased in: https://arxiv.org/pdf/2005.04269',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'OsuLLMs automapper',
        description: 'A generative AI model that takes in audio files and maps them to levels in the popular rhythm game Osu!',
        link: 'https://github.com/OsuLLMs',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Desktop Friend',
        description: 'A custom, responsive and fully interactive AI model that reacts to real time input through audio and visual cues.',
        link: 'https://github.com/Stufedpanda/Desktop-Buddy',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Google Page Rank Clone',
        description: 'An imitation of the previous google page ranking algorithm using linear algebra, built in MATLAB',
        link: 'https://github.com/Stufedpanda/Google-Page-Rank',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'K-Means',
        description: 'A simple implementation of the K-means algorithm',
        link: 'https://github.com/Stufedpanda/K-Means',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Artical Similarity',
        description: 'MATLAB program that calculates the similarities of articles using word vectors',
        link: 'https://github.com/Stufedpanda/Article-Similarity',
    },
];