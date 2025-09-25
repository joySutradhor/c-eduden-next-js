import {
  FaApple,
  FaAws,
  FaBrain,
  FaBug,
  FaBullhorn,
  FaChartBar,
  FaChartLine,
  FaClipboardList,
  FaCloud,
  FaCode,
  FaCodeBranch,
  FaCogs,
  FaComments,
  FaCube,
  FaDatabase,
  FaDocker,
  FaEnvelope,
  FaEthereum,
  FaFacebook,
  FaFileAlt,
  FaFileSignature,
  FaFolderOpen,
  FaGit,
  FaGitAlt,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaJenkins,
  FaJsSquare,
  FaKey,
  FaLaptopCode,
  FaLayerGroup,
  FaLink,
  FaLinux,
  FaMailBulk,
  FaMicrochip,
  FaMicroscope,
  FaMicrosoft,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaNetworkWired,
  FaNodeJs,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaRedhat,
  FaRobot,
  FaSearch,
  FaServer,
  FaShieldAlt,
  FaSitemap,
  FaStream,
  FaTemperatureHigh,
  FaTerminal,
  FaTools,
  FaUserShield,
  FaUserTie,
  FaWallet,
  FaWifi
} from 'react-icons/fa'

import { VscVscode } from 'react-icons/vsc'
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiAnsible,
  SiCanva,
  SiCisco,
  SiClockify,
  SiCss3,
  SiDjango,
  SiElementor,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFiverr,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGoogle,
  SiGoogleanalytics,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiJupyter,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiNumpy,
  SiPandas,
  SiPexels,
  SiPhpmyadmin,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRailway,
  SiStripe,
  SiTailwindcss,
  SiUpwork,
  SiVercel,
  SiVim,
  SiWireshark,
  SiWoocommerce,
  SiWordpress
} from 'react-icons/si'
import { MdOutlineNetworkWifi1Bar } from 'react-icons/md'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { FiActivity } from 'react-icons/fi'

export const CourseData = [
  {
    id: 12,
    lecture: '32+',
    duration: '45 Days',
    projects: '5+',

    category: 'Cyber Security',
    off: '15%',
    title: 'Ethical Hacking for Beginners – 45 Days Hands-On Course',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/cybersecurity1.webp?updatedAt=1744658798433',

    crsDetails: `Think hacking is just for movie villains and hoodie-wearing geniuses? Think again. With Eduden’s beginner-friendly ethical hacking course in Kolkata, you’ll learn how to legally break into systems, find security flaws, and help companies fix them — all while building a career in cybersecurity.
This is not a theory-dump. This is a fully hands-on ethical hacking course in West Bengal that teaches you how to think like a hacker, use real-world tools, and apply those skills to bug bounty programs, cybersecurity internships, or job-ready IT roles.
If you’re searching for the best ethical hacking training in Kolkata, India — this is it. Practical. Powerful. And packed with projects.`,

    overView:
      'This 45-day ethical hacking course by Eduden is designed for total beginners who want to learn cybersecurity from scratch and enter one of the most in-demand industries in India. You’ll master the core hacking phases — from reconnaissance and vulnerability scanning to exploitation, report writing, and responsible disclosure.All training is based on real-world attack simulations and live lab environments using tools like Kali Linux, Burp Suite, Wireshark, Nmap, and Metasploit — making this one of the most practical cybersecurity courses for beginners in India.Whether your goal is to become a penetration tester, land your first cybersecurity job, or kick off your journey as a bug bounty hunter in India, this course will set you up with the exact skills needed.',

    features: [
      {
        title1: '10+ Assignments',
        description1:
          '10+ assignments that simulate real attack scenarios — perfect for building your portfolio and practicing concepts outside the classroom.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Knowledge-check quizzes after each tool/module — test your progress and reinforce everything you have learned.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Weekly live sessions with industry professionals covering ethical hacking labs, career guidance, and Q&A with certified penetration testers'
      },
      {
        title4: 'Projects',
        description4: 'You’ll build 4 hands-on database applications.'
      }
    ],

    tools: [
      { cid: 1, icon: FaLinux },
      { cid: 2, icon: FaSearch },
      { cid: 3, icon: FaNetworkWired },
      { cid: 4, icon: FaBug },
      { cid: 4, icon: FaShieldAlt },
      { cid: 4, icon: FaKey }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Ethical Hacking' },
      { cid: 2, c: ' Networking Basics for Hackers' },
      { cid: 3, c: 'Reconnaissance & Intelligence Gathering' },
      { cid: 4, c: 'Vulnerability Analysis' },
      { cid: 5, c: ' Exploitation & Gaining Access' },
      { cid: 6, c: ' Web Application Hacking' },
      { cid: 7, c: ' WiFi Hacking & Social Engineering' },
      { cid: 8, c: ' Reporting & Career Path' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/ethical%20hacking%202.webp?updatedAt=1744658805657',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in database management and engineering are in high demand. The confidence gained through mastering these concepts will help you navigate interviews with ease and secure roles in top tech companies.',
    hoverBgColor: 'bg-blue-500'
  },

  {
    id: 47,
    lecture: '50+',
    duration: '45 Days',
    projects: 6,
    category: 'Artificial Intelligence',
    off: '15%',
    title: 'Generative AI & Prompt Engineering – 45 Days Hands-On Course',
    rating: 4.8,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Generative-AI-&-Prompt-Engineering-1.webp?updatedAt=1744658807801',

    crsDetails: `Master the future of AI by learning how to talk to it. In just 45 days, you'll gain hands-on experience with GPT-4, Claude, Gemini, and other LLMs. Learn prompt engineering, build AI tools and chatbots, automate workflows, and design GenAI-powered content – no coding required.`,

    overView: `To help learners understand how to interact with, customize, and build tools using large language models (LLMs). The focus is on practical prompt design, chaining prompts, building chatbots, and using GenAI tools to create value — whether you're coding, designing, selling, or solving business problems.`,

    join: [
      {
        id: 1,
        title: 'Anyone curious about ChatGPT, AI tools, or building with LLMs'
      },
      {
        id: 2,
        title: 'Students and professionals (no coding experience required)'
      },
      { id: 3, title: 'Freelancers and content creators' },
      { id: 4, title: 'Developers, marketers, analysts, educators' }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Design prompts, build workflows, and explore AI-powered automation tasks.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Quick assessments on prompt design, LLM behavior, and GenAI concepts.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'AI tool walkthroughs, live builds, and hands-on GenAI integration workshops.'
      },
      {
        title4: 'Projects',
        description4:
          'Create prompt-based tools, chatbots, and automation workflows for real-world tasks.'
      }
    ],

    tools: [
      { cid: 1, icon: FaRobot },
      { cid: 2, icon: FaNetworkWired },
      { cid: 3, icon: FaCode },
      { cid: 4, icon: FaLayerGroup }
    ],

    curriculum: [
      { cid: 1, c: 'Foundations of Generative AI & LLMs' },
      { cid: 2, c: 'Prompt Engineering 101' },
      { cid: 3, c: 'Using LLMs for Productivity & Content' },
      { cid: 4, c: 'Building with OpenAI API & LangChain' },
      { cid: 5, c: 'Integrating GenAI into Real Workflows' },
      { cid: 6, c: 'Final Projects & Real-World Use Cases' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Generative-AI-&-Prompt-Engineering-2.webp?updatedAt=1744658808387',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 46,
    lecture: '75+',
    duration: '90 Days',
    projects: 8,
    category: 'Machine Learning',
    off: '10%',
    title: 'AI & Machine Learning with Python – 90 Days Job-Ready Career Track',
    rating: 4.9,
    image:
      'https://ik.imagekit.io/0lnr4mwox/AI-&-Machine-Learning-with-Python-2.webp?updatedAt=1744658786039',

    crsDetails: `Master AI and Machine Learning using Python over 90 days. Ideal for freshers, developers, or career switchers aiming to become AI Engineers or Data Scientists. Build ML models, visualize data, and deploy AI solutions — with a portfolio of real-world projects to back your skills.`,

    overView: `To help learners build a strong foundation in AI & ML using Python, understand how to apply machine learning to real problems, and gain practical experience with data preprocessing, model building, evaluation, and deployment. You'll build a job-ready portfolio while learning the tools and algorithms used by AI engineers worldwide.`,

    join: [
      { id: 1, title: 'Students and freshers with basic Python knowledge' },
      { id: 2, title: 'Working professionals switching to AI/ML' },
      { id: 3, title: 'Developers looking to enter AI product teams' },
      { id: 4, title: 'Entrepreneurs building data-driven products' }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Solve classification and regression problems, clean real datasets, and visualize insights.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Concept checks on ML theory, Python libraries, statistics, and neural networks.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Model walkthroughs, data science project reviews, and mentoring for job readiness.'
      },
      {
        title4: 'Projects',
        description4:
          'Build models like fraud detectors, recommendation systems, and image classifiers.'
      }
    ],

    tools: [
      { cid: 1, icon: FaPython },
      { cid: 2, icon: FaChartBar },
      { cid: 3, icon: FaBrain },
      { cid: 4, icon: FaCodeBranch }
    ],

    curriculum: [
      { cid: 1, c: 'Python for AI & Data Science' },
      { cid: 2, c: 'Statistics & Math for Machine Learning' },
      { cid: 3, c: 'Data Preprocessing & Feature Engineering' },
      { cid: 4, c: 'Supervised Machine Learning' },
      { cid: 5, c: 'Unsupervised Learning & Clustering' },
      { cid: 6, c: 'Model Optimization & Evaluation' },
      { cid: 7, c: 'Intro to Deep Learning & Neural Networks' },
      { cid: 8, c: 'ML Model Deployment (Optional Add-On)' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/AI-&-Machine-Learning-with-Python1.webp?updatedAt=1744658785726',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 51,
    lecture: '60+',
    duration: '60 Days',
    projects: 6,
    category: 'Data Science',
    off: '10%',
    title:
      'Data Science & Analytics with Python + Power BI – 60 Days Career Track',
    rating: 4.8,
    image:
      'https://ik.imagekit.io/0lnr4mwox/DATA%20SCIENCE%20(2).webp?updatedAt=1744658798729',

    crsDetails: `This course is built for beginners, analysts, business students, and working professionals who want to enter the world of data-driven decision making. You'll learn how to collect, clean, analyze, and visualize data using Python and Power BI, and translate your insights into powerful business actions.
No prior coding or analytics background? No problem. This course is beginner-friendly and focused on practical applications — not just theory.`,

    overView: `To help learners build confidence and capability in working with structured and unstructured data, performing exploratory data analysis (EDA), creating dashboards, and extracting insights that drive business decisions.`,

    join: [
      { id: 1, title: 'Students, business grads, and freshers' },
      {
        id: 2,
        title: 'Aspiring data analysts or business intelligence professionals'
      },
      {
        id: 3,
        title: 'Non-tech working professionals transitioning into data roles'
      },
      {
        id: 4,
        title: 'Freelancers, marketers, and managers seeking data literacy'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1: 'Practical hands-on exercises using Python and Power BI.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Assessments to reinforce data analysis and visualization concepts.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Interactive discussions on key concepts and real-life business cases.'
      },
      {
        title4: 'Projects',
        description4:
          'Build real business dashboards and data analysis projects.'
      }
    ],

    tools: [
      { cid: 1, icon: FaChartBar },
      { cid: 2, icon: FaPython },
      { cid: 3, icon: FaDatabase },
      { cid: 4, icon: FaLaptopCode }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Data Science & Analytics' },
      { cid: 2, c: 'Python for Data Analytics' },
      { cid: 3, c: 'Data Visualization with Python' },
      { cid: 4, c: 'SQL for Analysts (Structured Query Language)' },
      { cid: 5, c: 'Power BI Dashboards & DAX' },
      { cid: 6, c: 'Final Project + Reporting' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/DATA%20SCIENCE%20(1).webp?updatedAt=1744658798175',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 3,
    lecture: '24',
    duration: '30 Days',
    projects: '4',

    category: 'Programming',
    off: '10%',
    title: 'Python Programming – Gateway to AI & Machine Learning',
    rating: 4,
    image:
      'https://ik.imagekit.io/0lnr4mwox/python%20for%20AI.webp?updatedAt=1744796636740',

    crsDetails: `Think coding is scary? Not here. This course is built for the curious — the ones who want to automate tasks, play with data, or just finally understand what Python is all about. Whether you're a complete beginner or someone who's tried YouTube tutorials that made no sense — this is your clean, structured start into the world of code.We’ll teach you the real Python skills you need to build things — from calculators and automation scripts to your first AI-powered app. No fluff, just 30 days of practical learning that sets you up for freelancing, internships, or advanced tech courses in ML and Data Science.`,

    curriculum: [
      { cid: 1, c: 'Getting Started with Python' },
      { cid: 2, c: 'Variables, Data Types & Operators' },
      { cid: 3, c: 'Conditions & Loops' },
      { cid: 4, c: 'Functions & Code Structuring' },
      { cid: 5, c: ' Data Structures in Python' },
      { cid: 6, c: ' File Handling & Python Automation' },
      { cid: 7, c: 'Your First Steps Toward ML' },
      { cid: 8, c: 'Final Project & GitHub Portfolio' }
    ],

    tools: [
      { cid: 1, icon: SiPython },
      { cid: 2, icon: VscVscode },
      { cid: 3, icon: SiJupyter },
      { cid: 4, icon: SiGithub }
    ],

    features: [
      {
        title1: '10+ Assignments',
        description1:
          '10+ coding assignments uploaded to GitHub or shared in Slack. Designed for logic building and skill development.'
      },
      {
        title2: '15+ Quizzes',
        description2:
          'Each module comes with short quizzes and brain teasers to lock in your learning and keep it fun'
      },
      {
        title3: 'Live sessions',
        description3:
          'Live weekly coding reviews + real-time debugging with mentors. You’ll never feel stuck or alone.'
      },
      {
        title4: ' 4+ Projects',
        description4: `You’ll work on 4 practical projects`
      }
    ],

    overView:
      'This hands-on Python course is designed to teach you the fundamentals of programming and help you transition into more advanced fields like AI, machine learning, or data analysis.We start from zero — no prior coding knowledge required — and walk you through the basics of variables, loops, functions, and file handling. You will write code daily, complete logic challenges, build working mini projects, and understand how Python is used to automate tasks and power real-world applications.By the end, you’ll be able to read and write clean Python code, solve beginner problems, and build projects that you can show off on GitHub or in interviews.',

    img: 'https://ik.imagekit.io/0lnr4mwox/python1.webp?updatedAt=1744658816330',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease!',
    hoverBgColor: 'bg-green-500'
  },

  {
    id: 44,
    lecture: '50+',
    duration: '45 Days',
    projects: 6,
    category: 'Blockchain',
    off: '10%',
    title: 'Blockchain Essentials – Learn & Build Decentralized Systems',
    rating: 4.7,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Blockchain-Essentials-2.webp?updatedAt=1744658790657',

    crsDetails: `This beginner-to-intermediate blockchain course provides a solid foundation in decentralized systems and Ethereum smart contracts. Dive into cryptographic fundamentals, explore the EVM, and build dApps using Solidity and web3.js. Perfect for developers, tech enthusiasts, and aspiring Web3 entrepreneurs looking to break into the blockchain space.`,

    overView: `To help learners understand the core concepts of blockchain technology, the Ethereum ecosystem, and how to build decentralized applications (dApps) using Solidity and smart contracts. By the end of this course, you’ll build and deploy your own smart contract, interact with the blockchain using web3.js or ethers.js, and have a solid foundation in the decentralized future.`,

    join: [
      {
        id: 1,
        title: 'Developers, computer science students, or tech enthusiasts'
      },
      {
        id: 2,
        title: 'Beginners with interest in crypto, NFTs, Web3, or DeFi'
      },
      { id: 3, title: 'Entrepreneurs looking to build Web3 startups' },
      {
        id: 4,
        title: 'Freelancers and engineers entering the blockchain space'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Code smart contracts, simulate transactions, and integrate dApps with a frontend.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Test understanding of cryptographic principles, Solidity syntax, and Web3 logic.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Mentorship on Solidity, smart contract security, and dApp walkthroughs.'
      },
      {
        title4: 'Projects',
        description4:
          'Deploy smart contracts, integrate MetaMask, and build real Web3 applications.'
      }
    ],

    tools: [
      { cid: 1, icon: FaCode },
      { cid: 2, icon: FaCube },
      { cid: 3, icon: FaWallet },
      { cid: 4, icon: FaProjectDiagram }
    ],

    curriculum: [
      { cid: 1, c: 'Blockchain Fundamentals & Cryptography Basics' },
      { cid: 2, c: 'Ethereum & Smart Contract Basics' },
      { cid: 3, c: 'Solidity Programming & dApp Development' },
      { cid: 4, c: 'Web3 Integration & Blockchain Frontend' },
      { cid: 5, c: 'Real-World Blockchain Use Cases & Projects' },
      { cid: 6, c: 'Final Project + Certification Prep' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Blockchain-Essentials-1.webp?updatedAt=1744658790310',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 38,
    lecture: '40',
    duration: '30 Days',
    projects: 5,
    category: 'IOT',
    off: '10%',
    title: 'IoT Foundations – 30 Days Hands-On Learning Program',
    rating: 4.7,
    image:
      'https://ik.imagekit.io/0lnr4mwox/IoT-Foundations-1.webp?updatedAt=1744658808761',

    crsDetails: `Get started with the Internet of Things by exploring smart device communication, microcontrollers, sensors, and cloud connectivity. This beginner-friendly course walks you through hands-on projects with Arduino and ESP boards, preparing you for real-world IoT solutions.`,

    overView: `Whether you're a student, maker, or aspiring robotics engineer, this course gives you the foundational skills to build smart systems using microcontrollers, sensors, and cloud-based tools. Ideal for breaking into IoT, automation, or embedded systems.`,

    join: [
      {
        id: 1,
        title: 'Students (no coding/electronics background needed)'
      },
      {
        id: 2,
        title: 'Makers, inventors, and tech hobbyists'
      },
      {
        id: 3,
        title: 'Future robotics, electronics, or embedded engineers'
      },
      {
        id: 4,
        title: 'Professionals switching to IoT or automation domains'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Complete hands-on tasks like connecting sensors, setting up microcontrollers, and configuring networks for IoT solutions.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Test your understanding of IoT concepts such as cloud communication, networking protocols, and sensor integration after each module.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Engage in live, interactive sessions with experts to discuss IoT concepts, troubleshoot hardware issues, and enhance your projects.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on real-world IoT projects, building a complete system that connects sensors to the cloud and visualizes data on mobile dashboards.'
      }
    ],

    tools: [
      { cid: 1, icon: FaMicrochip },
      { cid: 2, icon: FaWifi },
      { cid: 3, icon: FaCloud },
      { cid: 4, icon: FaNetworkWired },
      { cid: 5, icon: FaTemperatureHigh }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to IoT & Ecosystem Overview' },
      { cid: 2, c: 'Microcontrollers & Programming (Arduino/ESP)' },
      { cid: 3, c: 'Sensors & Actuators in IoT' },
      { cid: 4, c: 'Connectivity & Networking' },
      { cid: 5, c: 'IoT & the Cloud' },
      { cid: 6, c: 'Final Project + Real-World Applications' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/iot%201.webp?updatedAt=1744658808823',
    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 45,
    lecture: '80+',
    duration: '90 Days',
    projects: 9,
    category: 'Big Data',
    off: '10%',
    title: 'Big Data Engineering – Hadoop, Spark, Kafka Career Track',
    rating: 4.8,
    image:
      'https://ik.imagekit.io/0lnr4mwox/big-data-1.webp?updatedAt=1744658789924',

    crsDetails: `A comprehensive 90-day program covering the full Big Data Engineering stack. Learn to manage massive datasets using Hadoop, Spark, Kafka, Airflow, and more. Build batch and real-time data pipelines, orchestrate workflows, and deploy cloud-based solutions. Ideal for aspiring Data Engineers and DataOps professionals.`,

    overView: `To give learners the knowledge, tools, and real-world experience to work with large-scale datasets, build ETL pipelines, process real-time data streams, and prepare for roles like Big Data Engineer, Data Pipeline Developer, or DataOps Specialist. You'll go from foundational data concepts to building real pipelines with Hadoop, Spark, Kafka, and Airflow — all with hands-on projects, cloud integration, and GitHub-ready portfolio building.`,

    join: [
      { id: 1, title: 'Beginners with basic Python or SQL knowledge' },
      { id: 2, title: 'Computer science students or recent graduates' },
      { id: 3, title: 'Developers and system engineers transitioning to data' },
      {
        id: 4,
        title:
          'Professionals aiming for roles in data engineering, analytics, or ML ops'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Build ETL workflows, stream data from Kafka, and manage tasks with Airflow.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Concept checks on Hadoop, Spark internals, real-time streaming, and orchestration.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Walkthroughs of distributed processing, cluster management, and real-world pipeline building.'
      },
      {
        title4: 'Projects',
        description4:
          'Deploy end-to-end data pipelines from ingestion to transformation and cloud deployment.'
      }
    ],

    tools: [
      { cid: 1, icon: FaServer },
      { cid: 2, icon: FaCloud },
      { cid: 3, icon: FaDatabase },
      { cid: 4, icon: FaStream }
    ],

    curriculum: [
      { cid: 1, c: 'Big Data Foundations & Ecosystem Overview' },
      { cid: 2, c: 'Hadoop & HDFS' },
      { cid: 3, c: 'Apache Hive, Pig & MapReduce' },
      { cid: 4, c: 'Apache Spark – Batch & Real-Time Processing' },
      { cid: 5, c: 'Apache Kafka – Real-Time Data Streaming' },
      { cid: 6, c: 'Orchestration with Apache Airflow' },
      { cid: 7, c: 'NoSQL & File Formats for Big Data' },
      { cid: 8, c: 'Cloud-Based Big Data Tools (AWS Focus)' },
      { cid: 9, c: 'Final Capstone Project' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/big-data-2.webp?updatedAt=1744658789912',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 30,
    lecture: '60',
    duration: '30 Days',
    projects: 5,
    category: 'Cloud Computing',
    off: '10%',
    title: 'Cloud Computing with AWS – Fundamentals (30 Days Hands-On)',
    rating: 4.7,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Cloud-Computing-with-AWS-1.webp?updatedAt=1744658795334',

    crsDetails: `This course is designed for beginners who want to understand the fundamentals of cloud computing and how AWS delivers its cloud services. Through hands-on practice and guided instruction, you will learn how to create and manage cloud infrastructure using services like EC2, S3, IAM, and more.`,

    overView: `To help learners understand what cloud computing is, how AWS delivers cloud services, and how to create and manage real cloud infrastructure — all from scratch. You’ll learn everything from theory to hands-on practice: launching servers, configuring storage, working with AWS services like EC2, S3, IAM, and more — all in a guided, no-fluff format.`,

    join: [
      {
        id: 1,
        title: 'Beginners with no prior cloud experience'
      },
      {
        id: 2,
        title: 'Students & freshers preparing for cloud-based careers'
      },
      {
        id: 3,
        title: 'IT support, system admins, or developers exploring cloud roles'
      },
      {
        id: 4,
        title:
          'Freelancers & tech entrepreneurs wanting to deploy cloud projects'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on labs to deploy real cloud infrastructure using AWS services like EC2, S3, and RDS.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Test your knowledge on cloud computing concepts, AWS services, and best practices.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Interactive sessions with AWS professionals to guide you through the setup and configuration of AWS services.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on deploying cloud projects such as websites and databases on AWS.'
      }
    ],

    tools: [
      { cid: 1, icon: FaCloud },
      { cid: 2, icon: FaAws },
      { cid: 3, icon: FaTools },
      { cid: 4, icon: FaServer },
      { cid: 5, icon: FaDatabase }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Cloud Computing & AWS' },
      { cid: 2, c: 'Getting Started with AWS' },
      { cid: 3, c: 'AWS Core Services – Compute, Storage, Networking' },
      { cid: 4, c: 'Databases, Monitoring & Security' },
      { cid: 5, c: 'High Availability & Serverless Concepts (Intro)' },
      { cid: 6, c: 'Final Project + Interview Prep' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Cloud-Computing-with-AWS-2.webp?updatedAt=1744658795503',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 36,
    lecture: '40',
    duration: '30 Days',
    projects: 4,
    category: 'Linux',
    off: '10%',
    title: 'Linux Essentials – RHCE-Based Fundamentals',
    rating: 4.7,
    image:
      'https://ik.imagekit.io/0lnr4mwox/RHCE-1.webp?updatedAt=1744658817346',

    crsDetails: `A foundational course aligned with RHCSA (EX200) and RHCE (EX294), designed to equip learners with essential Linux skills for system administration, DevOps, and cloud roles. From terminal navigation to user management and networking, you’ll gain hands-on experience in real-world Linux environments.`,

    overView: `Perfect for beginners, this course provides a comprehensive dive into Linux essentials. Learn terminal commands, manage users and services, configure basic networking, and get introduced to shell scripting—all through hands-on labs that prepare you for Red Hat certification and a Linux-based career path.`,

    join: [
      {
        id: 1,
        title: 'Students and freshers with no prior Linux experience'
      },
      {
        id: 2,
        title: 'DevOps, cloud, and cybersecurity aspirants'
      },
      {
        id: 3,
        title: 'Junior system administrators & support engineers'
      },
      {
        id: 4,
        title: 'Professionals preparing for RHCSA or RHCE'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Practice essential Linux commands and system tasks through guided assignments tailored to RHCE fundamentals.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Reinforce your understanding of Linux concepts and system operations with end-of-module quizzes.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Join interactive mentorship sessions to discuss RHCE topics, troubleshoot issues, and clarify technical concepts.'
      },
      {
        title4: 'Projects',
        description4:
          'Build and configure real-world Linux environments through practical capstone projects aligned with RHCE standards.'
      }
    ],

    tools: [
      { cid: 1, icon: FaLinux },
      { cid: 2, icon: FaTerminal },
      { cid: 3, icon: FaRedhat },
      { cid: 4, icon: FaNetworkWired },
      { cid: 5, icon: FaUserShield }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Linux' },
      { cid: 2, c: 'Command Line Mastery' },
      { cid: 3, c: 'User & Group Management' },
      { cid: 4, c: 'Package Management & System Services' },
      { cid: 5, c: 'Networking & Firewalls (RHCSA Scope)' },
      { cid: 6, c: 'Shell Scripting Basics + Final Project' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/RHCE-2.webp?updatedAt=1744658817953',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 34,
    lecture: '30',
    duration: '30 Days',
    projects: 5,
    category: 'DevOps',
    off: '10%',
    title: 'DevOps for Beginners – Foundation Track',
    rating: 4.7,
    image:
      'https://ik.imagekit.io/0lnr4mwox/devops-2.webp?updatedAt=1744658801353',

    crsDetails: `This course is designed to introduce you to the world of DevOps, providing you with the foundational tools and understanding to move into core DevOps roles. You'll learn essential tools like Linux, Git, GitHub, and Bash scripting, and grasp the DevOps mindset and workflows. The course prepares you for real-world DevOps tasks, with hands-on projects and practical skills.`,

    overView: `In this foundational DevOps course, you'll learn the core concepts, tools, and methodologies that form the backbone of the DevOps ecosystem. From understanding the DevOps lifecycle to mastering essential tools like Linux, Git, and Bash scripting, you'll gain the confidence and skills to move forward into more advanced tools like Docker, Jenkins, AWS, and Kubernetes.`,

    join: [
      {
        id: 1,
        title: 'Freshers and students (no tech background needed)'
      },
      {
        id: 2,
        title: 'System Admins, Developers, or Testers upskilling for DevOps'
      },
      {
        id: 3,
        title: 'Tech enthusiasts, freelancers, or job-switchers'
      },
      {
        id: 4,
        title:
          'Anyone curious about automation, pipelines, and modern IT workflows'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on labs and exercises to practice DevOps essentials.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Test your understanding of core DevOps concepts after each module.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Interactive sessions with instructors to clarify concepts and address questions.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on practical projects that demonstrate your newly acquired skills.'
      }
    ],

    tools: [
      { cid: 1, icon: FaLinux },
      { cid: 2, icon: FaGit },
      { cid: 3, icon: FaGithub },
      { cid: 4, icon: SiGnubash },
      { cid: 5, icon: FaJenkins }
    ],

    curriculum: [
      { cid: 1, c: 'What is DevOps?' },
      { cid: 2, c: 'Linux Essentials for DevOps' },
      { cid: 3, c: 'Git & GitHub Version Control' },
      { cid: 4, c: 'Shell Scripting for Automation' },
      { cid: 5, c: 'DevOps Toolchain Overview' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/devops-1.webp?updatedAt=1744658800107',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 20,
    lecture: '30',
    duration: '60 Days',
    projects: 5, // Number of projects
    category: 'Application Development',
    off: '15%', // Random discount between 5% and 20%
    title: 'Flutter App Development – 60 Days Hands-On Training',
    rating: 4.7, // Random rating between 4 and 5
    image:
      'https://ik.imagekit.io/0lnr4mwox/flutter%20developer.webp?updatedAt=1744658805499',

    crsDetails: `This 60-day hybrid course (Online or Offline at Eduden, Kolkata) is perfect for beginners to intermediate learners. You will be trained to develop cross-platform mobile applications using Flutter, covering everything from UI design and state management to working with APIs and Firebase. By the end of the course, you'll be equipped with the skills to build, deploy, and publish your own mobile apps on Android, iOS, and Web platforms.`,

    overView: `To teach you how to build modern, responsive, real-world mobile applications using Flutter & Dart, and deploy them on Android, iOS, and Web — all with a single codebase. This is the perfect course for students, freelancers, and developers who want to enter the cross-platform mobile app market, without learning separate native languages for each OS.`,

    join: [
      { id: 1, title: 'Beginners with no prior app development experience' },
      { id: 2, title: 'Web developers switching to mobile' },
      { id: 3, title: 'Tech enthusiasts or freelancers' },
      { id: 4, title: 'Anyone looking to build & publish their own apps' }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on projects building real-world apps using Flutter.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Short quizzes to test your understanding of concepts like Flutter widgets, APIs, Firebase, and state management.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Interactive live coding sessions with experts and Q&A to resolve your queries.'
      },
      {
        title4: 'Projects',
        description4:
          'Multiple practical projects including weather apps, blog readers, and a final capstone project.'
      }
    ],

    tools: [
      { cid: 1, icon: FaFolderOpen },
      { cid: 2, icon: FaMobileAlt },
      { cid: 3, icon: FaCloud },
      { cid: 4, icon: FaDatabase },
      { cid: 5, icon: FaCode },
      { cid: 6, icon: FaUserTie }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Flutter & Dart' },
      { cid: 2, c: 'UI Design & Layouts' },
      { cid: 3, c: 'State Management & Forms' },
      { cid: 4, c: 'Working with APIs & Firebase' },
      { cid: 5, c: 'App Deployment & Final Project' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Flutter%20App%20Development.webp?updatedAt=1744796640862',

    Certificate:
      'Students who complete all assignments, projects, and pass the final exam with a minimum 80% will receive a certification of completion.',

    Access:
      'With the purchase of the course, you gain lifetime access to all the course material and can review it whenever you need to refresh your knowledge.',
    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 27,
    lecture: '50',
    duration: '90 Days',
    projects: 10,
    category: 'Networking',
    off: '10%',
    title: 'Networking Zero – Foundation Course (Based on CCNA Syllabus)',
    rating: 4.8,
    image:
      'https://ik.imagekit.io/0lnr4mwox/ccna1.webp?updatedAt=1744658790171',

    crsDetails: `A comprehensive 90-day hybrid course (Online & Offline at Eduden, Kolkata) designed to provide a strong foundation in computer networking. Aligned with the CCNA syllabus, this course will teach students to configure, troubleshoot, and design networks, covering everything from routers and IP addresses to VLANs and network security.`,

    overView: `To give students a strong foundation in computer networking, aligned with the CCNA syllabus, while focusing on hands-on configuration, troubleshooting, and network design. From routers and IP addresses to VLANs and security — this course turns complete beginners into confident network technicians or support engineers.`,

    join: [
      {
        id: 1,
        title: 'Beginners with no prior networking experience'
      },
      {
        id: 2,
        title: 'Students in tech, computer science, or BCA/MCA programs'
      },
      {
        id: 3,
        title: 'Professionals looking to get into IT infrastructure roles'
      },
      {
        id: 4,
        title: 'Anyone preparing for Cisco certifications (CCNA 200-301)'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on labs and practical tasks on network configuration and troubleshooting.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Test your networking knowledge with periodic assessments.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Interactive sessions with instructors to clarify concepts and practice real-world scenarios.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on a full network setup, including IP addressing, routing, and security configurations.'
      }
    ],

    tools: [
      { cid: 1, icon: FaNetworkWired },
      { cid: 2, icon: FaTools },
      { cid: 3, icon: FaLaptopCode },
      { cid: 4, icon: FaShieldAlt },
      { cid: 5, icon: FaTerminal }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Networking & Network Devices' },
      { cid: 2, c: 'IP Addressing & Subnetting' },
      { cid: 3, c: 'Routing & Switching Basics' },
      { cid: 4, c: 'Network Configuration & CLI Skills' },
      { cid: 5, c: 'Network Security & Troubleshooting' },
      { cid: 6, c: 'Real-World Scenarios & Final Simulation' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Networking%20Zero%20_%20Foundation%20Course.webp?updatedAt=1744796636852',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 1,
    lecture: '30',
    duration: '45 Days',
    projects: '5',

    curriculum: [
      { cid: 1, c: 'Introduction to Graphic Design' },
      { cid: 2, c: 'Color Psychology & Typography' },
      { cid: 3, c: 'Adobe Illustrator Mastery' },
      { cid: 4, c: 'Logo Design & Branding' },
      { cid: 5, c: ' Social Media & Poster Design' },
      { cid: 6, c: ' Photoshop Basics for Designers' },
      { cid: 7, c: 'Final Project & Portfolio' }
    ],

    tools: [
      { cid: 1, icon: SiFigma },
      { cid: 2, icon: SiCanva },
      { cid: 3, icon: SiAdobephotoshop },
      { cid: 3, icon: SiAdobeillustrator }
    ],

    features: [
      {
        title1: '12 Assignments',
        description1:
          'Assignment solutions will be posted on GitHub or Slack after the course for self-practice.'
      },
      {
        title2: '30+ Quizzes',
        description2:
          'Quick quizzes after each topic to test your understanding (and give you bragging rights).'
      },
      {
        title3: 'Live sessions',
        description3:
          'Weekly live classes with interactive project reviews, tool deep-dives, and 1:1 mentor time'
      },
      {
        title4: '9 Projects',
        description4: `You’ll work on 5 core projects that build your portfolio and prove your skills.`
      }
    ],
    title: 'UI/UX Design – Industry-Ready in 45 Days',
    overView:
      ' This is a fully practical, tool-driven course designed to take beginners into the world of graphic design and digital branding. Participants will learn how to use Adobe Illustrator like a pro, with a solid understanding of design principles, typography, composition, and color theory. Basic image editing with Photoshop is also covered to help students clean up, enhance, and prepare visual assets for real-world projects. From creating logos and social media posts to working with clients and understanding design briefs, every lesson is hands-on. You won’t just learn how to design — you’ll learn why good design works and how to use it to tell compelling visual stories.',

    category: 'Graphics Design',
    off: '5%',
    metaDescription:
      'Join Edu Den’s Graphic Design & UI/UX Course. Learn Photoshop, Illustrator, Figma & more. Hands-on projects, expert mentors, certification & job assistance',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Graphic%20Design2.webp?updatedAt=1744658807772',
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `Ever looked at a cool poster, a slick logo, or an Instagram ad and thought, “I wish I could make that”? Well, now you can — and you’ll get paid for it too. This course is your launchpad into the design world, where we’ll teach you how to create scroll-stopping visuals, smart brand identities, and designs that speak louder than words.
  From the basics of color psychology to mastering Adobe Illustrator and diving into Photoshop essentials, we’ve packed this course with everything you need to become a designer people want to hire. Whether you want to freelance, build your own brand, or get into creative roles — we’ll show you how to design with purpose and confidence.`,
    img: 'https://ik.imagekit.io/0lnr4mwox/Graphic%20Desgin.webp?updatedAt=1744658807870',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease!',
    hoverBgColor: 'bg-green-500'
  },

  {
    id: 24,
    lecture: '30',
    duration: '30 Days',
    projects: 5,
    category: 'Digital Marketing',
    off: '10%',
    title: 'Digital Marketing Basics – 30 Days Hands-On Training',
    rating: 4.6,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Digital%20Marketing%202.webp?updatedAt=1744658803876',

    crsDetails: `This 30-day hybrid course (Online & Offline at Eduden, Kolkata) introduces you to the core of digital marketing. Learn how to rank websites, grow social media, run ads, and send campaigns. Ideal for students, freelancers, creators, or startup founders ready to market any product, brand, or idea in the digital world.`,

    overView: `Fast, practical, and beginner-friendly — this course will give you a complete understanding of digital marketing platforms, strategies, and tools. You’ll practice SEO, SMM, Email Marketing, and Ads setup through real-life use cases. Perfect for learners aiming to freelance, grow their personal brand, or land marketing roles.`,

    join: [
      {
        id: 1,
        title: 'No experience required'
      },
      {
        id: 2,
        title: 'Ideal for students, creators, freelancers, or entrepreneurs'
      },
      {
        id: 3,
        title: 'Great for people launching their first business or brand'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Practice campaigns, blog optimization, email drafts, and more.'
      },
      {
        title2: 'Quizzes',
        description2: 'Topic-wise quizzes to reinforce marketing concepts.'
      },
      {
        title3: 'Live Sessions',
        description3: 'Interactive sessions with digital marketing experts.'
      },
      {
        title4: 'Projects',
        description4:
          'Hands-on ad campaign creation, post scheduling, and analytics.'
      }
    ],

    tools: [
      { cid: 1, icon: FaGoogle },
      { cid: 2, icon: FaFacebook },
      { cid: 3, icon: FaInstagram },
      { cid: 4, icon: FaMailBulk },
      { cid: 5, icon: FaSearch },
      { cid: 6, icon: FaChartLine }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Digital Marketing' },
      { cid: 2, c: 'Search Engine Optimization (SEO)' },
      { cid: 3, c: 'Social Media Marketing (SMM)' },
      { cid: 4, c: 'Google Ads & Facebook Ads (Intro)' },
      { cid: 5, c: 'Email Marketing & Automation' },
      { cid: 6, c: 'Analytics, Reporting & Strategy' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Digital%20Marketing%201.webp?updatedAt=1744658803059',

    Certificate:
      'Students who complete all training modules, hands-on assignments, and mock campaigns will receive a digital certificate of completion from Eduden.',

    Access:
      'You’ll have full access to session recordings, templates, resources, and assignments for lifetime through our learning dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 2,
    lecture: '48',
    duration: '90 Days',
    projects: '6',

    category: 'Graphics Design',
    off: '10%',
    title: 'UI/UX Design – Industry-Ready Hands-On Course',
    rating: 4,
    image:
      'https://ik.imagekit.io/0lnr4mwox/UI%20UX.webp?updatedAt=1744658821854',

    crsDetails: `Ever used an app and thought, “Why is this so confusing?” — or even better, “I can design this better”? That’s exactly where this course comes in. UI/UX isn’t just about making things look pretty — it’s about solving problems, designing smart user journeys, and building interfaces that feel like second nature.
In 90 days, you’ll go from having no design experience to creating real-world projects, building case studies, and presenting your work like a pro. Whether you're aiming for a design job, planning to freelance, or want to design your own app someday — this course is built to make you industry ready.`,

    curriculum: [
      { cid: 1, c: 'UI vs UX – The Big Picture' },
      { cid: 2, c: 'Research & User Personas' },
      { cid: 3, c: 'Wireframing & Structure' },
      { cid: 4, c: 'UI Design in Figma' },
      { cid: 5, c: ' Design Systems & Prototyping' },
      { cid: 6, c: ' Usability Testing & Iteration' },
      { cid: 7, c: 'Case Study & Portfolio Building' }
    ],

    tools: [
      { cid: 1, icon: SiFigma },
      { cid: 2, icon: SiAdobexd },
      { cid: 3, icon: SiNotion }
    ],

    features: [
      {
        title1: '15+ Assignments',
        description1:
          '15+ exercises ranging from wireframes to hi-fi UI designs and feedback iterations.'
      },
      {
        title2: '20+ Quizzes',
        description2:
          'Topic-based mini challenges to reinforce concepts (no boring theory exams here).'
      },
      {
        title3: 'Live sessions',
        description3:
          'Weekly mentor-led design critiques, portfolio reviews, and tool walkthroughs.'
      },
      {
        title4: ' Projects',
        description4: `You’ll work on 6 portfolio-worthy projects`
      }
    ],

    overView:
      'This course is a complete journey into user interface and user experience design made practical, hands-on, and beginner-friendly. You will learn how to research, wireframe, design, prototype, and test interfaces across mobile apps and websites.  We’ll train you on tools like Figma, Adobe XD, Whimsical, and Notion, and guide you through real-life design challenges that simulate startup or freelance projects. Each module is project-driven, focused on design thinking, usability, aesthetics, and interaction. By the end, you will have a portfolio that screams “hire me”, and the confidence to walk into interviews or pitch to freelance clients like a pro.',

    img: 'https://ik.imagekit.io/0lnr4mwox/UIUX2.webp?updatedAt=1744658821933',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease!',
    hoverBgColor: 'bg-green-500'
  },

  {
    id: 4,
    lecture: '24',
    duration: '30 Days',
    projects: '3',

    category: 'Programming',
    off: '15%',
    title: 'Shell Scripting – 30 Days Hands-On Training',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Shell%20Scripting.webp?updatedAt=1744658820281',

    crsDetails: `Welcome to Eduden’s Shell Scripting course — a 30-day hands-on training program built for anyone who wants to master the Linux terminal, write powerful Bash scripts, and automate real tasks like a pro.
Whether you're in cybersecurity, DevOps, IT support, or just tired of typing the same commands every day, this course teaches you how to write clean, reusable, and efficient scripts that actually get things done.
Looking for the best shell scripting course in Kolkata, India or online across West Bengal? This is where automation begins.`,

    eligibility: [
      {
        id: 1,
        title: 'Basic Linux/terminal knowledge'
      },
      {
        id: 2,
        title:
          'Any cybersecurity, DevOps, or system admin background (optional, but helpful)'
      },
      {
        id: 1,
        title: 'No prior coding experience required — we teach from scratch'
      }
    ],

    curriculum: [
      { cid: 1, c: 'Shell Scripting Basics' },
      { cid: 2, c: ' Logic & Conditionals' },
      { cid: 3, c: 'Loops & Input' },
      { cid: 4, c: 'Functions & Reusability' },
      { cid: 5, c: ' File Operations & String Handling' },
      { cid: 6, c: ' Scheduling & Task Automation' },
      { cid: 7, c: 'Debugging & Best Practices' }
    ],

    tools: [
      { cid: 1, icon: SiGnubash },
      { cid: 2, icon: SiVim },
      { cid: 3, icon: SiClockify },
      { cid: 4, icon: SiGnubash },
      { cid: 5, icon: SiGit }
    ],

    features: [
      {
        title1: '10+ Assignments',
        description1:
          'Daily script challenges covering logic building, conditional workflows, and real use cases'
      },
      {
        title2: '10+ Quizzes',
        description2:
          'Syntax checks, script flow puzzles, and debugging logic tests after each module.'
      },
      {
        title3: 'Live sessions',
        description3:
          'Weekly coding walkthroughs, script reviews, automation demos, and live error solving with mentors.'
      },
      {
        title4: ' 3+ Projects',
        description4: `You’ll build 3+ practical tools using Shell Scripting`
      }
    ],

    overView:
      'This course is your fast-track to writing Bash shell scripts on Linux. You’ll learn the fundamentals of scripting — variables, loops, conditionals, functions — and quickly move into real-world applications like file manipulation, automation, cron jobs, and system monitoring.We won’t just teach syntax. We’ll teach how to think in Bash, debug scripts, and turn logic into actual, useful tools — whether you’re working with Kali Linux, Ubuntu, Red Hat, or any other flavor of Linux.By the end, you’ll be automating repetitive tasks, creating custom command-line tools, and feeling right at home inside the terminal.',

    img: 'https://ik.imagekit.io/0lnr4mwox/Shell%20Scripting.webp?updatedAt=1744797529592',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease!',
    hoverBgColor: 'bg-green-500'
  },
  {
    id: 5,
    lecture: '30',
    duration: '45 Days',
    projects: '4',

    category: 'Programming',
    off: '15%',
    title: 'Python for Offensive PenTest – 45 Days Hands-On Training',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/pythonforoffensive.webp?updatedAt=1744658816133',

    crsDetails: `Welcome to Eduden’s Python for Offensive PenTest course — a hands-on training experience where you’ll use Python not just to automate tasks, but to build your own pentesting tools, write exploits, craft payloads, and even simulate red team actions.
This is not your average Python course. This is where you turn scripts into real power — designed specifically for ethical hackers, bug bounty hunters, red teamers, and cybersecurity students looking to level up.
If you're searching for the best Python hacking course in India to learn how to code like an attacker, you've landed in the right terminal.`,

    overView:
      'This 45-day course teaches you how to leverage Python for real-world offensive security work — from automating recon to building port scanners, brute forcers, keyloggers, backdoors, and reporting bots.You’ll use popular libraries like socket, scapy, requests, paramiko, and nmap to code your own attack tools. Each lesson is practical, each project solves a real security problem, and by the end, you will be able to confidently say ,I built this exploit from scratch.Whether you are preparing for OSCP, PNPT, or bug bounty programs, this course is your hacker toolkit — coded in Python.',

    eligibility: [
      {
        id: 1,
        title: 'Basic Python knowledge (variables, loops, functions, imports)'
      },
      {
        id: 2,
        title: 'Prior exposure to cybersecurity, Linux, or ethical hacking'
      },
      {
        id: 1,
        title:
          'Completion of Eduden’s Python Basics or Ethical Hacking course is highly recommended'
      }
    ],

    features: [
      {
        title1: '10+ Assignments',
        description1:
          'Custom scripting tasks covering network mapping, payload crafting, packet sniffing, file exfiltration, and bypass automation'
      },
      {
        title2: '15+ Quizzes',
        description2:
          'Knowledge checks after each concept, focusing on code logic, vulnerability use-cases, and script performance.'
      },
      {
        title3: 'Live sessions',
        description3:
          'Weekly coding breakdowns, malware analysis labs, and exploit build challenges with real red teamers.'
      },
      {
        title4: ' 4+ Projects',
        description4: `You’ll build 4 key offensive tools, plus a final all-in-one framework`
      }
    ],

    tools: [
      { cid: 1, icon: FaMicrosoft },
      { cid: 2, icon: BsFillShieldLockFill },
      { cid: 3, icon: FaNetworkWired }
    ],

    curriculum: [
      { cid: 1, c: 'Offensive Python 101' },
      { cid: 2, c: ' Recon & Enumeration Scripts' },
      { cid: 3, c: 'Brute Force & Credential Harvesting' },
      { cid: 4, c: 'Packet Sniffing & Traffic Analysis' },
      { cid: 5, c: ' Exploits & Payloads' },
      { cid: 6, c: ' Automation & Post Exploitation' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/python%20for%20Offensive%20.webp?updatedAt=1744658815457',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease!',
    hoverBgColor: 'bg-green-500'
  },
  {
    id: 6,
    lecture: '30',
    duration: '45 Days',
    projects: '3',

    category: 'Programming',
    off: '15%',
    title: 'Web Development Basics – 45 Days Hands-On Course',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Web%20Development%20Basics.webp?updatedAt=1744658822410',

    crsDetails: `Welcome to Eduden’s Web Development Basics course — a fully hands-on, zero-to-hero style program that teaches you how to build modern, responsive websites using HTML, CSS, and JavaScript.
Whether you’re planning to start freelancing, launch your own project, or take your first step toward becoming a full-stack developer, this course gives you the skills, tools, and confidence to bring your ideas to life on the web.
If you’re looking for the best beginner web development course in Kolkata, West Bengal, or anywhere in India, this is it. No coding background needed. Just your curiosity and 45 days of creative energy`,

    eligibility: [
      {
        id: 1,
        title: 'No prior coding experience required'
      },
      {
        id: 2,
        title:
          'Ideal for students, designers, or aspiring developers who want to start from scratch'
      },
      {
        id: 1,
        title:
          'Anyone interested in freelancing, tech jobs, or building personal websites'
      }
    ],

    overView:
      'This 45-day course takes you through the core concepts of frontend development, teaching you to build, style, and make websites interactive using HTML, CSS, and JavaScript. You’ll also learn how to structure pages, work with layout systems like Flexbox and Grid, add animations, and even make your site mobile-responsive.',

    features: [
      {
        title1: '10+ Assignments',
        description1:
          '10+ practical tasks including form design, responsive layout building, navbar creation, and image sliders.'
      },
      {
        title2: '25+ Quizzes',
        description2:
          'Quick quizzes after each module to strengthen syntax, logic, and web architecture understanding.'
      },
      {
        title3: 'Live sessions',
        description3:
          'Weekly live code-alongs, troubleshooting sessions, and project reviews with mentors.'
      },
      {
        title4: ' 3+ Projects',
        description4: `You’ll build 3+ fully functional websites`
      }
    ],

    tools: [
      { cid: 1, icon: SiHtml5 },
      { cid: 2, icon: SiCss3 },
      { cid: 3, icon: SiJavascript },
      { cid: 4, icon: SiGithub },
      { cid: 5, icon: VscVscode }
    ],

    curriculum: [
      { cid: 1, c: ' HTML Fundamentals' },
      { cid: 2, c: ' CSS Styling' },
      { cid: 3, c: 'JavaScript Basics' },
      { cid: 4, c: 'Real Project Work' },
      { cid: 5, c: ' Final Project & Portfolio' },
      { cid: 6, c: ' Automation & Post Exploitation' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Web%20Development%20Basics2.webp?updatedAt=1744658823581',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease!',
    hoverBgColor: 'bg-green-500'
  },
  {
    id: 7,
    lecture: '50',
    duration: '90 Days',
    projects: '5',

    category: 'Programming',
    off: '5%',
    title: 'WordPress Mastery: Build, Design & Sell',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/WordPress_Mastery-Build_Design__Sell1_50.webp?updatedAt=1744803010119',

    crsDetails: `Welcome to Eduden’s WordPress Mastery course — a 90-day practical training where you’ll learn how to build stunning websites, design like a pro with Elementor, and launch your own eCommerce store with WooCommerce.
This is the perfect course for freelancers, digital marketers, small business owners, or students who want to enter the booming web design and eCommerce world — fast.No coding? No problem. We’ll walk you through everything from domain setup to launching your first product — all using WordPress, Elementor, and WooCommerce.
If you're looking for the best WordPress and WooCommerce training in Kolkata, West Bengal, or across India — this is your all-in-one launchpad.`,

    eligibility: [
      {
        id: 1,
        title: 'No prior coding or design experience required'
      },
      {
        id: 2,
        title:
          'Suitable for students, freelancers, business owners, bloggers, or marketers'
      },
      {
        id: 1,
        title:
          'Weekly code-free design reviews, speed optimization workshops, and portfolio walkthroughs with mentors.'
      }
    ],

    overView:
      'Over 90 days, you’ll master the complete WordPress ecosystem — from installing and customizing themes to designing full websites with Elementor and setting up secure online stores with WooCommerce.We’ll also cover SEO, plugins, blogging, security, speed optimization, payments, and automation — all hands-on, all beginner-friendly.By the end, you’ll walk away with real client-ready websites, a personal portfolio, and the skills to freelance or build your own online business.',

    features: [
      {
        title1: '10+ Assignments',
        description1:
          'Website tasks, plugin experiments, page design drills, and real-world eCommerce simulations — all with instructor feedback.'
      },
      {
        title2: '15+ Quizzes',
        description2:
          'Quick-check quizzes on WordPress structure, plugin use, theme customization, and page-building logic.'
      },
      {
        title3: 'Live sessions',
        description3:
          'Weekly live code-alongs, troubleshooting sessions, and project reviews with mentors.'
      },
      {
        title4: ' 5+ Projects',
        description4: `You’ll build at least 5 real websites`
      }
    ],

    tools: [
      { cid: 1, icon: SiElementor },
      { cid: 2, icon: SiWoocommerce },
      { cid: 3, icon: FiActivity },
      { cid: 4, icon: SiGoogleanalytics },
      { cid: 5, icon: SiGoogle },
      { cid: 6, icon: SiWordpress }
    ],

    curriculum: [
      { cid: 1, c: '  Getting Started with WordPress' },
      { cid: 2, c: ' Designing with Elementor' },
      { cid: 3, c: 'Full Website Customization' },
      { cid: 4, c: 'WooCommerce & eCommerce Setup' },
      { cid: 5, c: ' SEO, Speed & Security' },
      { cid: 6, c: ' Blogging, Email, & Automation' },
      { cid: 7, c: 'Portfolio, Freelance & Monetization' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/WordPress%20Mastery-Build,%20Design%20&%20Sell.webp?updatedAt=1744796637329',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease!',
    hoverBgColor: 'bg-green-500'
  },
  {
    id: 8,
    lecture: '55',
    duration: '90 Days',
    projects: '6',

    category: 'Programming',
    off: '15%',
    title: 'JavaScript, React & Next.js Mastery – 90 Days Hands-On Training',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/JavaScript,%20React%20&%20Next.js%20Mastery.webp?updatedAt=1744658809181',

    crsDetails: `Welcome to Eduden’s JavaScript, React & Next.js Mastery, a 90-day immersive hands-on program built for aspiring web developers, tech entrepreneurs, and designers who want to bring ideas to life with real code.
Start by mastering modern JavaScript, then dive into React (the world’s most popular frontend library), and finally build production-ready, SEO-optimized apps with Next.js — used by companies like Netflix, Twitch, and TikTok.`,

    eligibility: [
      {
        id: 1,
        title: 'Basic understanding of HTML & CSS'
      },
      {
        id: 2,
        title:
          'No prior JavaScript or React experience needed — we teach it all'
      },
      {
        id: 3,
        title:
          'Ideal for students, freelancers, aspiring devs, and career switchers'
      }
    ],

    overView:
      'This course is your complete roadmap to becoming a modern frontend developer using JavaScript, React & Next.js. You’ll learn core logic, UI frameworks, state management, APIs, routing, authentication, deployment, and more — all by building real apps.',

    features: [
      {
        title1: '10+ Assignments',
        description1:
          'Component challenges, logic puzzles, form validation tasks, routing logic, and state exercises.'
      },
      {
        title2: '15+ Quizzes',
        description2:
          'Module quizzes for JavaScript concepts, React component hierarchy, state management, and Next.js routing.'
      },
      {
        title3: 'Live sessions',
        description3:
          'Weekly live coding sessions, project deep-dives, and performance optimization tips from working developers.'
      },
      {
        title4: ' 6+ Projects',
        description4: `You’ll build 6 real apps`
      }
    ],

    tools: [
      { cid: 1, icon: SiJavascript },
      { cid: 2, icon: SiNextdotjs },
      { cid: 3, icon: SiTailwindcss },
      { cid: 4, icon: SiGit },
      { cid: 5, icon: SiFirebase },
      { cid: 6, icon: SiVercel },
      { cid: 7, icon: SiNetlify }
    ],

    curriculum: [
      { cid: 1, c: ' Modern JavaScript' },
      { cid: 2, c: 'React Fundamentals' },
      { cid: 3, c: ' React Advanced' },
      { cid: 4, c: 'Next.js Foundations' },
      { cid: 5, c: ' State Management & Auth' },
      { cid: 6, c: ' Styling, Deployment & Portfolio' },
      { cid: 7, c: 'Portfolio, Freelance & Monetization' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/JavaScript,%20React%20&%20Next.js%20Mastery1.webp?updatedAt=1744658811220',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease!',
    hoverBgColor: 'bg-green-500'
  },
  {
    id: 9,
    lecture: '45',
    duration: '60 Days',
    projects: '4',

    category: 'Programming',
    off: '15%',
    title: ' Backend Development with Django – 60 Days Hands-On Training',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Backend%20Development%20with%20Django2%20_%2060%20Days%20Hands-On%20Training.webp?updatedAt=1744658790375',

    crsDetails: `Frontend is fun — but backend is where the magic happens.
In this 60-day backend development course with Django by Eduden, you'll learn how to build dynamic web apps, create APIs, manage databases, handle user authentication, and launch secure backends — all with the power of Python and Django.
Whether you're aiming to become a full-stack developer, build your own SaaS product, or land a backend development role, this course will make you job-ready, project-ready, and API-smart.
Looking for the best Django backend training in Kolkata, West Bengal, or anywhere in India? This is where real backend devs are built.`,

    eligibility: [
      {
        id: 1,
        title:
          'Basic Python knowledge required (functions, loops, conditionals)'
      },
      {
        id: 2,
        title: 'Familiarity with HTML/CSS helpful, but not mandatory'
      },
      {
        id: 3,
        title:
          'Perfect for students, developers, and career switchers who want to go full-stack'
      }
    ],

    overView:
      'This course teaches you everything you need to know to build robust, scalable backends using Django — one of the most powerful and popular web frameworks in the world.You’ll go from setting up your first project to building real-world APIs, working with relational databases, handling user auth, and deploying to the cloud. You’ll even explore Django Rest Framework (DRF) to make your apps mobile and frontend-ready By the end of the course, you’ll have 4 portfolio-ready apps, a fully functioning API, and the skills to work as a Django backend developer or build your own product.',

    features: [
      {
        title1: '10+ Assignments',
        description1:
          'Query building, model relationships, user auth flows, API creation, deployment walkthroughs — all hands-on and guided.'
      },
      {
        title2: '15+ Quizzes',
        description2:
          'Mini assessments after each module to test your grasp on views, models, routes, auth logic, and database queries.'
      },
      {
        title3: 'Live sessions',
        description3:
          'Weekly backend architecture walkthroughs, model design planning, DRF lab sessions, and code optimization support.'
      },
      {
        title4: ' 4+ Projects',
        description4: `You’ll build 4 full backend applications`
      }
    ],

    tools: [
      { cid: 1, icon: SiPython },
      { cid: 2, icon: SiDjango },
      { cid: 3, icon: SiPostgresql },
      { cid: 4, icon: SiGit },
      { cid: 5, icon: SiHeroku },
      { cid: 6, icon: SiPostman }
    ],

    curriculum: [
      { cid: 1, c: '  Django Basics' },
      { cid: 2, c: ' Models & Databases' },
      { cid: 3, c: ' Views, Forms & Templates' },
      { cid: 4, c: 'Authentication & Permissions' },
      { cid: 5, c: ' Django REST Framework' },
      { cid: 6, c: 'Deployment & Project Launch' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Backend%20Development%20with%20Django%20_%2060%20Days%20Hands-On%20Training.webp?updatedAt=1744658789649',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease!',
    hoverBgColor: 'bg-green-500'
  },
  {
    id: 10,
    lecture: '40+',
    duration: '60 Days',
    projects: '4',

    category: 'Programming',
    off: '15%',
    title: 'Backend Development with Node.js – 60 Days Hands-On Training',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/nodejs.webp?updatedAt=1744658814047',

    crsDetails: `Think JavaScript is just for the browser?
  Think again. It runs the backend too.
  This Node.js course by Eduden is a 60-day practical ride into the world of backend development — where you’ll learn to build fast, scalable RESTful APIs, handle user authentication, work with MongoDB, and deploy full backend systems for real-world applications.
  Whether you’re coming from frontend or just getting started with JavaScript, this course gives you the tools, mindset, and portfolio to break into the world of backend engineering.
  Looking for the best Node.js backend course in Kolkata, West Bengal, or online across India? This one is built for you.`,

    eligibility: [
      {
        id: 1,
        title: 'Basic JavaScript knowledge (variables, functions, arrays)'
      },
      {
        id: 2,
        title:
          'Familiarity with any frontend tech (React, HTML, CSS) is helpful but not required'
      },
      {
        id: 3,
        title:
          'Perfect for aspiring full-stack devs, freelancers, or backend beginners'
      }
    ],

    overView:
      'In 60 days, you’ll learn to build powerful backend applications using Node.js, Express.js, and MongoDB. You’ll start with creating basic server logic, then advance into building full authentication systems, CRUD APIs, middleware logic, and real-world API endpoints used in modern web and mobile apps. We’ll even show you how to secure, document, and deploy your apps to production. By the end of this course, you’ll have multiple backend projects, a resume-worthy REST API, and the confidence to call yourself a JavaScript backend developer.',

    features: [
      {
        title1: 'Assignments',
        description1:
          'Request/response cycle practice, database modeling, API routing, token-based auth flows, and deployment tasks.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Assess your skills on topics like Node.js core modules, Express routing, MongoDB schemas, and REST standards.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Weekly live coding walkthroughs, debugging sessions, API design reviews, and architectural breakdowns.'
      },
      {
        title4: 'Projects',
        description4: 'You’ll build 4 backend projects using Node.js'
      }
    ],

    tools: [
      { cid: 1, icon: SiNodedotjs },
      { cid: 2, icon: SiExpress },
      { cid: 3, icon: SiMongodb },
      { cid: 4, icon: SiJsonwebtokens },
      { cid: 5, icon: SiPostman },
      { cid: 6, icon: SiGit },
      { cid: 7, icon: SiGithub },
      { cid: 8, icon: SiVercel },
      { cid: 9, icon: SiRailway }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Node.js' },
      { cid: 2, c: 'Express.js for Routing & Middleware' },
      { cid: 3, c: 'MongoDB & Mongoose' },
      { cid: 4, c: 'Authentication & Security' },
      { cid: 5, c: 'API Standards & Testing' },
      { cid: 6, c: 'Deployment & Final Project' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/nodejs1.webp?updatedAt=1744658813603',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer etc. The increased confidence gained through mastering these concepts will help you navigate interviews with ease!',
    hoverBgColor: 'bg-yellow-500'
  },
  {
    id: 11,
    lecture: '30+',
    duration: '45 Days',
    projects: '4+',

    category: 'Programming',
    off: '10%',
    title:
      'Database Mastery: SQL + NoSQL (MongoDB & MariaDB) – 45 Days Hands-On Training',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/dbms1.webp?updatedAt=1744658800320',

    crsDetails: `From relational databases to NoSQL document stores — this is the only database course you need.
  In Eduden’s Database Mastery program, you’ll go deep into SQL fundamentals, relational design, ER modeling, and advanced queries — while also getting hands-on with MongoDB and MariaDB, two of the most widely-used real-world database systems today.
  You’ll learn when to use what, how to structure data for scalability, and how to integrate databases into actual applications. Whether you're a backend developer, full-stack learner, data analyst, or system designer — this course gives you all the tools to handle modern data challenges.
  Looking for the best SQL + MongoDB training in Kolkata, West Bengal, or anywhere in India? Welcome to your database command center.`,

    eligibility: [
      {
        id: 1,
        title: 'No prior DB experience required'
      },
      {
        id: 2,
        title:
          'Ideal for students, backend/full-stack learners, aspiring data analysts, or anyone prepping for tech interviews'
      },
      {
        id: 3,
        title:
          'Basic programming logic (Python/JavaScript helpful, not required)'
      }
    ],

    overView:
      'Over 45 days, you’ll go from designing normalized databases with ER diagrams and writing SQL queries to building and querying document-based data with MongoDB, and working with MariaDB — a drop-in replacement for MySQL used globally by large-scale applications. This course blends classic RDBMS training (theory + MySQL/MariaDB) with modern NoSQL practice (MongoDB), preparing you for any project stack — backend APIs, real-time dashboards, or eCommerce systems.',

    features: [
      {
        title1: 'Assignments',
        description1:
          'ER diagrams, relational schemas, query tasks in SQL and Mongo shell, NoSQL document structuring, data migration challenges.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Topic-wise assessments on DBMS theory, SQL logic, Mongo syntax, indexing, and schema best practices.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Schema reviews, query live coding, data modeling walkthroughs, and system design challenges weekly with mentors.'
      },
      {
        title4: 'Projects',
        description4: 'You’ll build 4 hands-on database applications.'
      }
    ],

    tools: [
      { cid: 1, icon: SiMysql },
      { cid: 2, icon: SiMariadb },
      { cid: 3, icon: SiMongodb },
      { cid: 4, icon: SiPhpmyadmin }
    ],

    curriculum: [
      { cid: 1, c: 'DBMS & Relational Thinking' },
      { cid: 2, c: 'SQL with MySQL & MariaDB' },
      { cid: 3, c: 'MongoDB & NoSQL Basics' },
      { cid: 4, c: 'Advanced MongoDB' },
      { cid: 5, c: 'Cross-DB Integration & Use-Cases' },
      { cid: 6, c: 'Final Project & Interview Prep' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Database%20Mastery.webp?updatedAt=1744796640402',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in database management and engineering are in high demand. The confidence gained through mastering these concepts will help you navigate interviews with ease and secure roles in top tech companies.',
    hoverBgColor: 'bg-blue-500'
  },

  {
    id: 42,
    lecture: '80+',
    duration: '90 Days',
    projects: 8,
    category: 'Cyber Security',
    off: '15%',
    title: 'Cybersecurity Advanced – Red Team/Blue Team Career Track',
    rating: 4.9,
    image:
      'https://ik.imagekit.io/0lnr4mwox/redteamblueteam.webp?updatedAt=1744658817569',

    crsDetails: `This intensive 90-day hybrid cybersecurity program equips learners with both offensive (Red Team) and defensive (Blue Team) skills. Explore advanced hacking techniques, real-world network/web app exploits, threat detection with SIEMs, and complete SOC simulations. Ideal for learners targeting high-demand roles in ethical hacking, penetration testing, and cyber defense.`,

    overView: `To provide learners with a deep, hands-on understanding of offensive and defensive security — including network penetration testing, web app exploits, SIEM-based defense, and incident response. You'll be able to simulate attacks, build defense mechanisms, and respond like a pro in real-world scenarios.`,

    join: [
      { id: 1, title: 'Ethical hacking/basic cybersecurity course graduates' },
      { id: 2, title: 'IT professionals (Linux/Networking/Security roles)' },
      {
        id: 3,
        title: 'Cybersecurity students preparing for advanced certifications'
      },
      { id: 4, title: 'Individuals aiming for Red Team / Blue Team job roles' }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on attack and defense scenarios using virtual labs, tools, and real-world attack chains.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Assess knowledge on CVEs, MITRE ATT&CK framework, log analysis, and incident workflows.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Engage in Red vs Blue drills, threat hunting walkthroughs, and adversary emulation sessions.'
      },
      {
        title4: 'Projects',
        description4:
          'Simulate domain takeovers, SOC monitoring, malware response, and end-to-end kill chain exercises.'
      }
    ],

    tools: [
      { cid: 1, icon: FaLinux },
      { cid: 2, icon: FaSearch },
      { cid: 3, icon: FaNetworkWired },
      { cid: 4, icon: FaShieldAlt }
    ],

    curriculum: [
      { cid: 1, c: 'Red Team – Advanced Reconnaissance & OSINT' },
      { cid: 2, c: 'Red Team – Vulnerability Analysis & Exploitation' },
      { cid: 3, c: 'Red Team – Web Application Hacking' },
      { cid: 4, c: 'Red Team – Active Directory & Post-Exploitation' },
      { cid: 5, c: 'Blue Team – Log Analysis & Threat Detection' },
      { cid: 6, c: 'Blue Team – Incident Response & Threat Hunting' },
      { cid: 7, c: 'Blue Team – Network Security Monitoring' },
      { cid: 8, c: 'Blue Team Labs & SOC Simulation' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/red%20teaming%20blue%20teaming%201.webp?updatedAt=1744658816455',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 13,
    lecture: '48',
    duration: '90 Days',
    projects: '6',

    category: 'Cyber Security',
    off: '15%',
    title: 'Digital Forensics – 90 Days Hands-On Training',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/digital%20Forensics.webp?updatedAt=1744658803008',

    crsDetails: `In today’s world, every click leaves a trace — and someone needs to know how to find it.
  Welcome to Eduden’s Digital Forensics course, where you’ll learn how to uncover hidden data, trace cybercrimes, and recover digital evidence — all using industry-standard tools and real-world lab simulations.
  If you're looking for the best digital forensics course in Kolkata, West Bengal or anywhere in India, this program gives you 90 days of in-depth, hands-on investigation training, built for students and professionals who want to enter the high-demand world of cyber forensics and incident response.`,

    overView: `This course covers everything from disk forensics and deleted file recovery to network log analysis and mobile forensics. You’ll learn how to use real forensic tools like Autopsy, FTK Imager, Volatility, Wireshark, and Sleuth Kit — and apply them to realistic scenarios involving malware, insider threats, phishing, and digital fraud.
  You’ll also learn the legal and reporting side of digital forensics, ensuring you can conduct investigations that hold up in a real-world environment — whether it's for a private company, law enforcement, or cyber response team.
  If you're planning to become a forensics analyst, incident responder, or even step into cybercrime law, this is the most practical digital forensics training in India to get started.`,

    eligibility: [
      {
        id: 1,
        title:
          'Any basic cybersecurity certification (e.g., CEH, Security+, eJPT) OR'
      },
      {
        id: 2,
        title:
          'Relevant work experience in system administration, IT support, cybersecurity, or incident response'
      }
    ],

    features: [
      {
        title1: '15+ Assignments',
        description1:
          '15+ case-based forensic challenges covering memory dumps, disk images, log files, and malware behavior.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Scenario-based tests after each module, focused on forensic tools, evidence chain-of-custody, and investigative procedures.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Weekly walkthroughs of digital crime cases, malware investigations, and open Q&A sessions with industry experts.'
      },
      {
        title4: 'Projects',
        description4: 'You’ll complete 6 hands-on forensics projects'
      }
    ],

    tools: [
      { cid: 1, icon: FaFolderOpen },
      { cid: 2, icon: FaFileAlt },
      { cid: 3, icon: FaMicrochip },
      { cid: 4, icon: FaNetworkWired },
      { cid: 5, icon: FaMobileAlt },
      { cid: 6, icon: FaClipboardList },
      { cid: 7, icon: FaFileSignature }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Digital Forensics' },
      { cid: 2, c: 'Disk & File System Forensics' },
      { cid: 3, c: 'Memory Forensics' },
      { cid: 4, c: 'Network & Log Analysis' },
      { cid: 5, c: 'Mobile & Cloud Forensics (Intro)' },
      { cid: 6, c: 'Reporting & Chain of Custody' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/digital%20forensics1.webp?updatedAt=1744658802751',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.',
    Access:
      "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in digital forensics and incident response are in high demand.',
    hoverBgColor: 'bg-purple-500'
  },
  {
    id: 14,
    lecture: '35',
    duration: '50 Days',
    projects: '6',

    category: 'Cyber Security',
    off: '15%',
    title: 'Start Bug Bounty Hunting – 50 Days Hands-On Training',
    rating: 5,
    image:
      'https://ik.imagekit.io/0lnr4mwox/bug%20bounty%202.webp?updatedAt=1744658790037',

    crsDetails: `Tired of watching others post screenshots of their HackerOne payouts? Ready to stop lurking and start earning? This course is your no-nonsense gateway into the world of bug bounty hunting — built for beginners, packed with tools, and taught by real bug hunters.
  At Eduden, we don’t believe in textbook security. We believe in breaking things (legally), finding vulnerabilities, and helping companies fix them — while building your skills and your wallet. If you’re looking for the best bug bounty course in India with 100% hands-on training, your search ends here.`,

    overView: `This 50-day hands-on program is the ultimate beginner's course to start your bug bounty journey in India. Whether you want to hunt on HackerOne, Bugcrowd, or Synack, this course will give you a complete roadmap — from recon to reporting — using the same tools used by top hunters worldwide.
  You’ll learn how to discover and exploit vulnerabilities in web applications, perform recon using automated and manual techniques, write professional reports that get accepted, and set up your own ethical hacking workflow.
  If you’re serious about earning money through cybersecurity, or landing internships and jobs in penetration testing, this is the best bug bounty training in Kolkata, West Bengal that actually prepares you for real-world targets — not just labs.`,

    features: [
      {
        title1: '15+ Assignments',
        description1:
          '15+ recon, exploitation, and reporting assignments with feedback through Slack/GitHub.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Quick challenges, protocol knowledge tests, and recon logic rounds to sharpen your bug-hunting brain.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Live labs, tool walkthroughs, bounty report breakdowns, and Q&A with real bug bounty hunters.'
      },
      {
        title4: 'Projects',
        description4: 'You’ll complete 6 real-world styled bug bounty projects'
      }
    ],

    tools: [
      { cid: 1, icon: FaFolderOpen },
      { cid: 2, icon: FaFileAlt },
      { cid: 3, icon: FaMicrochip },
      { cid: 4, icon: FaNetworkWired },
      { cid: 5, icon: FaMobileAlt },
      { cid: 6, icon: FaClipboardList },
      { cid: 7, icon: FaFileSignature }
    ],

    curriculum: [
      { cid: 1, c: 'Bug Bounty Basics & Platforms' },
      { cid: 2, c: 'Web & HTTP Fundamentals' },
      { cid: 3, c: 'Recon & Asset Discovery' },
      { cid: 4, c: 'OWASP Top 10 for Bug Bounty Hunters' },
      { cid: 5, c: 'Burp Suite Mastery' },
      { cid: 6, c: 'Reporting, PoCs & Career Building' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/bug%20bounty%20hunting.webp?updatedAt=1744658790233',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.',
    Access:
      "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in bug bounty hunting are highly sought after. This course prepares you to land your first gig.',
    hoverBgColor: 'bg-green-500'
  },
  {
    id: 15,
    lecture: '36',
    duration: '45 Days',
    projects: '5',

    category: 'Cyber Security',
    off: 'N/A',
    title: 'Network Penetration Testing – 45 Days Hands-On Course',
    rating: 5,
    image: 'https://ik.imagekit.io/0lnr4mwox/npt2.webp?updatedAt=1744658813702',

    crsDetails: `This is not for the faint of firewalls. Welcome to Eduden’s most advanced cybersecurity course yet — built for ethical hackers, security professionals, and penetration testers who are ready to move beyond tools and into custom scripting, real-world exploitation, and network-level post-exploitation. Inspired by OSCE-style training, this program focuses on network pentesting with Python and Bash, and digs deep into exploit development, evasion, lateral movement, and report writing — all within real-world simulated environments. If you're looking for the best advanced penetration testing course in Kolkata, and you’ve already done your CEH, eJPT, or have real-world hacking experience — this course was made for you.`,

    overView: `This 45-day hands-on offensive security course is designed for professionals who want to master the real-world tactics used in red team assessments, vulnerability research, and internal/external network exploitation. You’ll learn how to go from initial access to full network control, bypassing modern security controls like firewalls, antivirus, IDS/IPS, and EDR. Through live labs and realistic attack chains, students will execute custom payloads, write Python/Bash scripts for automation, simulate pivoting across subnets, and craft detailed post-exploitation reports that demonstrate professional-grade assessments. If you're serious about getting into advanced ethical hacking, red teaming, or want to level up after CEH/OSCP prep — this is one of the top offensive security training programs in India right now.`,

    features: [
      {
        title1: 'Assignments',
        description1:
          '12+ technical write-ups and scripting challenges including payload crafting, custom scanners, lateral movement automation, and log evasion.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Built-in assessment checkpoints after major labs — designed to mimic real pentest decision-making.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Live weekly exploit walkthroughs, post-exploitation simulations, scripting reviews, and case study discussions.'
      },
      {
        title4: 'Projects',
        description4:
          'Complete 5 advanced projects built on enterprise-like infrastructures.'
      }
    ],

    tools: [
      { cid: 1, icon: FaFolderOpen },
      { cid: 2, icon: FaFileAlt },
      { cid: 3, icon: FaMicrochip },
      { cid: 4, icon: FaNetworkWired },
      { cid: 5, icon: FaMobileAlt },
      { cid: 6, icon: FaClipboardList },
      { cid: 7, icon: FaFileSignature }
    ],

    curriculum: [
      { cid: 1, c: 'Advanced Reconnaissance & Target Enumeration' },
      { cid: 2, c: 'Exploitation & Gaining Access' },
      { cid: 3, c: 'Post-Exploitation & Lateral Movement' },
      { cid: 4, c: 'Active Directory Enumeration & Attacks (Intro)' },
      { cid: 5, c: 'Custom Exploit Development (Basic Level)' },
      { cid: 6, c: 'Reporting & Documentation' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/npt.webp?updatedAt=1744658813946',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.',

    Access:
      "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",

    interview:
      'Positions in penetration testing are highly sought after. This course prepares you to land your first gig.',

    hoverBgColor: 'bg-blue-500',

    eligibility: [
      {
        id: 1,
        title:
          'At least 1 cybersecurity certification (e.g., CEH, eJPT, PNPT, or equivalent) OR'
      },
      {
        id: 2,
        title:
          '1 year of proven industry experience in ethical hacking, system administration, or network security'
      },
      {
        id: 3,
        title: 'Working knowledge of Python and Bash scripting'
      }
    ]
  },
  {
    id: 16,
    lecture: '40',
    duration: '60 Days',
    projects: '6',

    category: 'Cyber Security',
    off: '18%', // Random discount between 5% and 20%
    title: 'SOC Analyst – 60 Days Hands-On Training',
    rating: 4.3, // Random rating between 4 and 5
    image:
      'https://ik.imagekit.io/0lnr4mwox/SOC%20analyst.webp?updatedAt=1744658819727',

    crsDetails: `Welcome to the frontline of cyber defense. Eduden’s SOC Analyst course is your fast-track entry into the world of real-time cyber threat monitoring, alert analysis, and incident response. Built for those who want to land their first cybersecurity job or pivot into the booming Security Operations Center (SOC) industry, this course teaches you how to detect, analyze, and respond to live cyber threats. From SIEM tools like Splunk and ELK Stack to log correlation, threat hunting, and alert triage — this is a job-ready SOC analyst certification course in India that goes beyond theory. You’ll monitor real logs, investigate real attacks, and simulate daily SOC activities with professional tools and blue team workflows. If you're looking for the best SOC analyst training in Kolkata or anywhere in India, you're right where you need to be.`,

    overView: `This course is designed to make you SOC floor-ready — teaching you everything from the basics of threat intelligence to advanced SIEM queries, log correlation, and real-time alert handling. You’ll use tools like Splunk, Wazuh, Kibana, and Wireshark to simulate real-world attacks and defense strategies. Every module includes lab-based scenarios, helping you understand how threats behave, how alerts are triggered, and how incidents are managed in live SOC environments. If you're serious about getting your first job in cybersecurity as a SOC Analyst in India, this course is your best launchpad.`,

    features: [
      {
        title1: 'Assignments',
        description1:
          'Log analysis, alert triage, and correlation assignments reviewed via GitHub or LMS portal.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Threat detection, IOC recognition, and investigation scenario-based quizzes after each module.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Weekly interactive labs, case study breakdowns, threat analysis Q&As, and SIEM query deep-dives.'
      },
      {
        title4: 'Projects',
        description4: 'You’ll complete 6 key SOC analyst projects.'
      }
    ],

    tools: [
      { cid: 1, icon: FaFolderOpen },
      { cid: 2, icon: FaFileAlt },
      { cid: 3, icon: FaMicrochip },
      { cid: 4, icon: FaNetworkWired },
      { cid: 5, icon: FaMobileAlt },
      { cid: 6, icon: FaClipboardList },
      { cid: 7, icon: FaFileSignature }
    ],

    curriculum: [
      { cid: 1, c: 'SOC Basics & Cyber Defense Essentials' },
      { cid: 2, c: 'Networking for SOC Analysts' },
      { cid: 3, c: 'SIEM Tools & Log Management' },
      { cid: 4, c: 'Alert Triage & Incident Analysis' },
      { cid: 5, c: 'Threat Hunting & Use Case Development' },
      { cid: 6, c: 'Reporting, Documentation & Career Prep' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/soc3.webp?updatedAt=1744658820220',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.',

    Access:
      "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",

    interview:
      'Positions in cybersecurity and SOC analysis are in demand. This course prepares you for your first SOC analyst role.',

    hoverBgColor: 'bg-green-500',

    eligibility: [
      {
        id: 1,
        title: 'Any Networking Certification (like CCNA, CompTIA Network+)'
      },
      {
        id: 2,
        title:
          'Basic Cybersecurity Certification (like CEH, Security+) or relevant field experience'
      },
      {
        id: 3,
        title:
          'Familiarity with TCP/IP, common ports, and basic security principles'
      }
    ]
  },
  {
    id: 17,
    lecture: '38',
    duration: '60 Days',
    projects: '5',

    category: 'Cyber Security',
    off: '12%', // Random discount between 5% and 20%
    title: 'Cloud Security – 60 Days Hands-On Training',
    rating: 4.5, // Random rating between 4 and 5
    image:
      'https://ik.imagekit.io/0lnr4mwox/cloud%20secutiy.webp?updatedAt=1744658794164',

    crsDetails: `Clouds aren’t just in the sky — they’re running the world. From startups to banks, every modern company is on the cloud — and someone has to secure it. That’s where you come in. This Cloud Security course by Eduden is your hands-on entry into the fast-growing field of cloud infrastructure protection. Whether you're aiming to work with AWS, Microsoft Azure, or Google Cloud, this course covers the core security services, common misconfigurations, compliance standards, and attack-defense techniques used in modern cloud environments. If you're searching for the best cloud security course in India, especially in Kolkata or West Bengal, you’re in the right place.`,

    overView: `This 60-day hands-on course takes you through the entire lifecycle of securing cloud infrastructure — from IAM policies and network security groups to real-world vulnerabilities, threat detection, DevSecOps, and compliance. You’ll work inside actual AWS, Azure, and GCP environments, simulating attacks, writing policies, implementing security controls, and using tools like CloudTrail, GuardDuty, Azure Defender, and GCP Security Command Center. It’s one of the most comprehensive cloud security certification courses in India — designed to make you job-ready for roles like Cloud Security Engineer, DevSecOps Analyst, or SOC+Cloud Hybrid roles.`,

    features: [
      {
        title1: 'Assignments',
        description1:
          '15+ tasks including IAM configuration, bucket hardening, serverless protection, and log monitoring.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Security scenarios, misconfig hunting, and compliance challenges after every section.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Weekly labs with cloud trainers + walkthroughs of real CVEs & security breaches from the cloud world.'
      },
      {
        title4: 'Projects',
        description4: 'You’ll complete 5 hands-on projects.'
      }
    ],

    tools: [
      { cid: 1, icon: FaFolderOpen },
      { cid: 2, icon: FaFileAlt },
      { cid: 3, icon: FaMicrochip },
      { cid: 4, icon: FaNetworkWired },
      { cid: 5, icon: FaMobileAlt },
      { cid: 6, icon: FaClipboardList },
      { cid: 7, icon: FaFileSignature }
    ],

    curriculum: [
      { cid: 1, c: 'Cloud Fundamentals & Shared Responsibility' },
      { cid: 2, c: 'Identity & Access Management in the Cloud' },
      { cid: 3, c: 'Network Security & Firewall Rules' },
      { cid: 4, c: 'Data Protection & Storage Security' },
      { cid: 5, c: 'Threat Detection & Monitoring' },
      { cid: 6, c: 'DevSecOps & Automation (Intro)' },
      { cid: 7, c: 'Compliance & Reporting' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/cloud%20security%202.webp?updatedAt=1744658793898',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.',

    Access:
      "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",

    interview:
      'Positions in cloud security, DevSecOps, and related fields are highly sought after. This course prepares you for roles like Cloud Security Engineer, DevSecOps Analyst, and more.',

    hoverBgColor: 'bg-blue-500',

    eligibility: [
      {
        id: 1,
        title: 'Basic knowledge of Networking & Linux'
      },
      {
        id: 2,
        title: 'Familiarity with any one cloud platform (AWS, Azure, or GCP)'
      },
      {
        id: 3,
        title:
          'Prior knowledge of cybersecurity fundamentals (preferred but not mandatory)'
      }
    ]
  },
  {
    id: 18,
    lecture: '24',
    duration: '30 Days',
    projects: '3',

    category: 'Cyber Security',
    off: '15%', // Random discount between 5% and 20%
    title:
      'Android Application Penetration Testing – Basics (30 Days Hands-On Course)',
    rating: 4.6, // Random rating between 4 and 5
    image:
      'https://ik.imagekit.io/0lnr4mwox/android%20application%20penetration%20testing%201.webp?updatedAt=1744658785732',

    crsDetails: `Ever wondered how hackers break into mobile apps — and how to stop them? This 30-day beginner-friendly Android Application Penetration Testing course by Eduden is your entry into the world of mobile app security and ethical hacking. You’ll learn how Android apps can be reverse-engineered, how data leaks happen, and how insecure coding practices can open the door to attacks. If you're looking for the best beginner Android hacking course in India, especially in Kolkata or West Bengal, this course is made for you. No advanced coding or reverse engineering required — we start simple, and keep it hands-on from day one.`,

    overView: `This 30-day program is designed to introduce students to the foundations of Android mobile app penetration testing, using simple tools and real-world apps. You’ll learn how to analyze APK files, inspect insecure coding practices, capture data in transit, and test Android apps for OWASP Mobile Top 10 vulnerabilities. You’ll also learn how to use tools like MobSF, jadx, Burp Suite, and Android emulators — all inside a safe, fully guided lab environment. Whether you're a student, entry-level analyst, or a developer curious about mobile security, this is one of the most practical Android security courses in India right now.`,

    features: [
      {
        title1: 'Assignments',
        description1:
          'APK decompilation tasks, mobile traffic interception, and insecure storage analysis — all with walkthroughs and mentorship.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Quick checkpoints at the end of every module to reinforce learning, focused on OWASP Mobile concepts and tool usage.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Weekly lab demos, tool walkthroughs, and Q&A sessions with mobile security practitioners.'
      },
      {
        title4: 'Projects',
        description4: 'You’ll complete 3 key hands-on mobile app assessments.'
      }
    ],

    tools: [
      { cid: 1, icon: FaFolderOpen },
      { cid: 2, icon: FaFileAlt },
      { cid: 3, icon: FaMobileAlt },
      { cid: 4, icon: FaNetworkWired },
      { cid: 5, icon: FaMicroscope },
      { cid: 6, icon: FaClipboardList },
      { cid: 7, icon: FaFileSignature }
    ],

    curriculum: [
      { cid: 1, c: 'Android Architecture & Lab Setup' },
      { cid: 2, c: 'Static Analysis of APKs' },
      { cid: 3, c: 'Dynamic Analysis & Network Traffic Inspection' },
      {
        cid: 4,
        c: 'Common Mobile Vulnerabilities (OWASP Mobile Top 10 - Lite)'
      },
      { cid: 5, c: 'Final Assessment & Reporting Basics' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/android%20application%20penetration%20testing.webp?updatedAt=1744658786077',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.',

    Access:
      "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",

    interview:
      'Positions in mobile security, ethical hacking, and app penetration testing are in high demand. This course prepares you for roles such as Mobile Security Analyst, Penetration Tester, and Ethical Hacker.',

    hoverBgColor: 'bg-blue-500',

    eligibility: [
      {
        id: 1,
        title:
          'Any basic cybersecurity certification (e.g. CEH, Security+, eJPT) OR'
      },
      {
        id: 2,
        title:
          'Relevant experience in cybersecurity, IT support, or app development'
      }
    ]
  },
  {
    id: 19,
    lecture: '30',
    duration: '45 Days',
    projects: '5',

    category: 'Cyber Security',
    off: '20%', // Random discount between 5% and 20%
    title:
      'Android Application Penetration Testing – Advanced (45 Days Hands-On Course)',
    rating: 4.8, // Random rating between 4 and 5
    image:
      'https://ik.imagekit.io/0lnr4mwox/android%20application%20security.webp?updatedAt=1744658785739',

    crsDetails: `Ready to go deeper? This is where it gets real. If you’ve already completed our Android Pentesting Basics course, this Advanced Android Application Penetration Testing program is your next leap into mobile hacking mastery. You’ll learn how to bypass security mechanisms, manipulate apps at runtime, and build custom mobile exploits using powerful tools like Frida, Objection, Xposed, and more. This course is designed to push your skills beyond APK analysis — into the world of dynamic analysis, code injection, and real-time runtime attacks. If you’re serious about becoming a professional mobile app pentester, or want to enter Android bug bounty programs, this is the best advanced Android hacking course in India to get you there.`,

    overView: `In this course, you’ll dive into advanced mobile app exploitation techniques. You’ll learn how to reverse-engineer real-world applications, hook into functions during runtime, exploit insecure IPC mechanisms, bypass client-side logic and SSL pinning, and tamper with app logic on the fly. We’ll walk you through real-world CVEs, appstore vulnerabilities, and CTF-style labs, designed to challenge your skills and deepen your understanding of secure mobile architecture. This is one of the most practical Android penetration testing courses in Kolkata and India, trusted by both red teamers and aspiring bug bounty hunters.`,

    features: [
      {
        title1: 'Assignments',
        description1:
          'Frida scripting challenges, runtime hook simulations, bypass tasks, and post-exploit analysis — guided with trainer support.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Advanced scenario-based quizzes with disassembly, patching logic, Frida hooks, and mobile security workflows.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Weekly reverse engineering labs, deep dives into custom CVEs, and real-world vulnerability discussions with experts.'
      },
      {
        title4: 'Projects',
        description4: 'You’ll complete 5 intense mobile hacking challenges.'
      }
    ],

    tools: [
      { cid: 1, icon: FaFolderOpen },
      { cid: 2, icon: FaFileAlt },
      { cid: 3, icon: FaMobileAlt },
      { cid: 4, icon: FaNetworkWired },
      { cid: 5, icon: FaMicroscope },
      { cid: 6, icon: FaClipboardList },
      { cid: 7, icon: FaFileSignature }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Dynamic Analysis' },
      { cid: 2, c: 'Runtime Hooking & Logic Manipulation' },
      { cid: 3, c: 'SSL Pinning & Root Detection Bypass' },
      { cid: 4, c: 'Insecure IPC, Broadcast Receivers & Activities' },
      { cid: 5, c: 'Reverse Engineering & Patch Testing' },
      { cid: 6, c: 'Final Project & Career Prep' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/android%20security%202.webp?updatedAt=1744658785797',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 90% mark will earn a course certificate.',

    Access:
      "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",

    interview:
      'Positions in mobile security, ethical hacking, and app penetration testing are in high demand. This course prepares you for roles such as Mobile Security Analyst, Penetration Tester, and Ethical Hacker.',

    hoverBgColor: 'bg-blue-500',

    eligibility: [
      {
        id: 1,
        title:
          'Completed Android Application Penetration Testing – Basics course and scored at least 90%.'
      },
      {
        id: 2,
        title:
          'Knowledge of APK structure, static analysis, Burp Suite, MobSF, and OWASP Mobile Top 10 concepts.'
      },
      {
        id: 3,
        title:
          'Familiarity with Android emulator setup and traffic interception.'
      }
    ]
  },

  {
    id: 21,
    lecture: '30',
    duration: '60 Days',
    projects: 5, // Number of projects
    category: 'Application Development',
    off: '20%', // Random discount between 5% and 20%
    title:
      'Mobile App Development with React Native – 60 Days Hands-On Training',
    rating: 4.8, // Random rating between 4 and 5
    image:
      'https://ik.imagekit.io/0lnr4mwox/react%20native.webp?updatedAt=1744796637131',

    crsDetails: `This 60-day hybrid course (Online & Offline at Eduden, Kolkata) is designed to help you master cross-platform mobile app development using React Native. You’ll build smooth, beautiful, and real-world apps using JavaScript + React, and deploy them on Android and iOS with a single codebase. By the end of the course, you’ll be ready to enter the job market or freelance as a mobile app developer.`,

    overView: `To help you master cross-platform mobile app development using React Native — one of the most in-demand frameworks globally. You’ll learn to build smooth, beautiful, and real-world apps using JavaScript + React, and deploy them on Android and iOS devices — all with one codebase. This is a practical, portfolio-ready program that prepares you for real jobs, freelance gigs, or launching your own mobile app.`,

    join: [
      { id: 1, title: 'Anyone with basic knowledge of JavaScript or React' },
      { id: 2, title: 'Frontend developers transitioning to mobile' },
      { id: 3, title: 'Freelancers, students, or job-seekers' },
      { id: 4, title: 'Tech entrepreneurs or startup enthusiasts' }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Real-world app development challenges with hands-on exercises.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Short quizzes after each module to test your understanding.'
      },
      {
        title3: 'Live Sessions',
        description3: 'Interactive live coding sessions and Q&A with experts.'
      },
      {
        title4: 'Projects',
        description4:
          '5 hands-on projects that will form the foundation of your portfolio.'
      }
    ],

    tools: [
      { cid: 1, icon: FaFolderOpen },
      { cid: 2, icon: FaMobileAlt },
      { cid: 3, icon: FaCloud },
      { cid: 4, icon: FaDatabase },
      { cid: 5, icon: FaCode },
      { cid: 6, icon: FaUserTie }
    ],

    curriculum: [
      { cid: 1, c: 'Getting Started with React Native & Expo' },
      { cid: 2, c: 'Core Components & Navigation' },
      { cid: 3, c: 'State Management & Forms' },
      { cid: 4, c: 'APIs & Async Data' },
      { cid: 5, c: 'Advanced Features + Final Project' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Mobile-App-Development-with-React-NativePotrait.webp?updatedAt=1744796637118',

    Certificate:
      'Students who complete all assignments, projects, and pass the final exam with a minimum of 80% will receive a certification of completion.',

    Access:
      'Upon enrollment, you will have lifetime access to all the course material and can revisit it at any time to refresh your knowledge.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 22,
    lecture: '30',
    duration: '60 Days',
    projects: 4, // 4 projects mentioned in modules
    category: 'Application Development',
    off: '15%', // you can randomize this later if needed
    title: 'iOS App Development with Swift – 60 Days Hands-On Training',
    rating: 4.9, // high rating for premium iOS course
    image:
      'https://ik.imagekit.io/0lnr4mwox/swift1.webp?updatedAt=1744658820529',

    crsDetails: `This 60-day hybrid training (Online & Offline at Eduden, Kolkata) equips you with hands-on experience in building beautiful, responsive, and fully functional iOS apps using Swift and Xcode. You'll go from writing your first line of Swift code to publishing an app on the App Store. Ideal for beginners or developers exploring Apple’s ecosystem.`,

    overView: `To equip you with the skills and tools to design, develop, and publish beautiful, responsive, and functional iOS applications using Swift and Xcode. From writing your first line of Swift code to submitting your app on the App Store, we cover everything hands-on. This is perfect for students, developers, or entrepreneurs who want to tap into Apple’s growing mobile market with confidence.`,

    eligibility: [
      {
        id: 1,
        title: 'Beginners with no prior app development experience'
      },
      {
        id: 2,
        title:
          'Students, freelancers, or anyone interested in the Apple ecosystem'
      },
      {
        id: 3,
        title:
          'Android developers or frontend devs looking to go cross-platform'
      },
      {
        id: 4,
        title: 'Tech enthusiasts ready to explore Swift & iOS'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Code-focused assignments after each module to sharpen your skills.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Quick quizzes to help you retain key Swift and iOS concepts.'
      },
      {
        title3: 'Live Sessions',
        description3: 'Instructor-led live coding and walkthrough sessions.'
      },
      {
        title4: 'Projects',
        description4:
          '4 guided projects that showcase your real-world iOS development skills.'
      }
    ],

    tools: [
      { cid: 1, icon: FaApple },
      { cid: 2, icon: FaLaptopCode },
      { cid: 3, icon: FaTools },
      { cid: 4, icon: FaCode },
      { cid: 5, icon: FaCloud },
      { cid: 6, icon: FaMobileAlt }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to iOS & Swift' },
      { cid: 2, c: 'iOS App Structure & UI Design (UIKit)' },
      { cid: 3, c: 'Working with Data & APIs' },
      { cid: 4, c: 'Advanced Features + Final Project' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/swift%20developer.webp?updatedAt=1744658820469',

    Certificate:
      'Students who complete all modules, assignments, and projects with a passing score of 80% or above will receive a Certification of Completion.',

    Access:
      'Upon enrolling, you’ll get lifetime access to all course materials and projects, allowing you to revisit and upskill anytime you need.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 23,
    lecture: '45',
    duration: '90 Days',
    projects: 6,
    category: 'Application Development',
    off: '15%',
    title:
      'Full Stack Mobile App Development – Flutter + Django (90 Days Hands-On)',
    rating: 4.7,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Full%20Stack%20Mobile%20App%20Development.webp?updatedAt=1744796636391',

    crsDetails: `This 90-day hybrid course (Online + Offline at Eduden, Kolkata) will help you become a complete mobile app developer. You'll learn Flutter for frontend development and Django for building REST APIs. By the end of this course, you'll be ready to launch your own apps, freelance, or pursue full stack developer roles.`,

    overView: `This hands-on course is aimed at helping you master full stack mobile app development using Flutter and Django. You’ll create dynamic cross-platform mobile apps and connect them with robust backend services. From UI building to securing APIs, this training gives you everything to become a job-ready full stack mobile app developer.`,

    eligibility: [
      {
        id: 1,
        title: 'Beginners with basic programming knowledge'
      },
      {
        id: 2,
        title: 'Python or Flutter learners who want to go full stack'
      },
      {
        id: 3,
        title: 'Freelancers or entrepreneurs building cross-platform apps'
      },
      {
        id: 4,
        title: 'Students and job seekers in mobile or backend development'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Weekly real-world challenges across frontend and backend.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Assessments after each module to test both Flutter and Django knowledge.'
      },
      {
        title3: 'Live Sessions',
        description3: 'Instructor-led coding, debugging, and project support.'
      },
      {
        title4: 'Projects',
        description4:
          '6 hands-on projects including a final full stack app deployment.'
      }
    ],

    tools: [
      { cid: 1, icon: FaMobileAlt },
      { cid: 2, icon: FaCode },
      { cid: 3, icon: FaDatabase },
      { cid: 4, icon: FaCloud },
      { cid: 5, icon: FaLaptopCode },
      { cid: 6, icon: FaCogs }
    ],

    curriculum: [
      { cid: 1, c: 'Dart & Flutter Fundamentals' },
      { cid: 2, c: 'Flutter UI & State Management' },
      { cid: 3, c: 'Django Backend & API Development' },
      { cid: 4, c: 'Connecting Flutter to Django REST API' },
      { cid: 5, c: 'Final Capstone & Deployment' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Full%20Stack%20Mobile%20App.webp?updatedAt=1744796637163',

    Certificate:
      'Students who complete all modules, hands-on projects, and the final capstone project will receive an industry-recognized certification of completion.',

    Access:
      'Once enrolled, you’ll get lifetime access to all training resources, recordings, and course materials through our learning platform.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 25,
    lecture: '30',
    duration: '30 Days',
    projects: 6,
    category: 'Digital Marketing',
    off: '10%',
    title: 'SEO Mastery – 30 Days Hands-On Training',
    rating: 4.7,
    image: 'https://ik.imagekit.io/0lnr4mwox/SEO1.webp?updatedAt=1744658818092',

    crsDetails: `A hybrid 30-day course (Online & Offline at Eduden, Kolkata) focused on ethical, high-impact SEO strategies. Learn how Google ranks content, and how to optimize websites for visibility, traffic, and conversions. Ideal for aspiring SEO experts, marketers, bloggers, and small business owners.`,

    overView: `To give you a complete, practical understanding of how SEO works, how Google ranks content, and how to optimize websites for visibility, traffic, and conversions — using ethical, long-term strategies that actually work. This course is ideal for anyone who wants to grow organically — whether you’re working for clients, managing your own site, or looking to build a career in digital marketing.`,

    join: [
      {
        id: 1,
        title: 'No prior experience required'
      },
      {
        id: 2,
        title: 'Perfect for bloggers, business owners, students, or freelancers'
      },
      {
        id: 3,
        title: 'Web developers who want to add SEO to their skillset'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1: 'Work on keyword mapping, on-page SEO, and audits.'
      },
      {
        title2: 'Quizzes',
        description2: 'Validate your SEO knowledge after each module.'
      },
      {
        title3: 'Live Sessions',
        description3: 'Weekly live classes with SEO professionals.'
      },
      {
        title4: 'Projects',
        description4:
          'Hands-on backlink strategy, website audits, and optimization tasks.'
      }
    ],

    tools: [
      { cid: 1, icon: FaSearch },
      { cid: 2, icon: FaGoogle },
      { cid: 3, icon: FaChartLine },
      { cid: 4, icon: FaLink },
      { cid: 5, icon: FaSitemap },
      { cid: 6, icon: FaTools }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to SEO & Google’s Algorithm' },
      { cid: 2, c: 'Keyword Research & Strategy' },
      { cid: 3, c: 'On-Page SEO' },
      { cid: 4, c: 'Off-Page SEO & Link Building' },
      { cid: 5, c: 'Technical SEO & Site Audits' },
      { cid: 6, c: 'Reporting, Trends & Strategy' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/SEO3.webp?updatedAt=1744658818408',

    Certificate:
      'You’ll receive a digital certificate of completion from Eduden after completing all modules and submitting the final SEO site audit project.',

    Access:
      'Lifetime access to class recordings, downloadable SEO templates, audit sheets, and tool tutorials via our Eduden learning dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 26,
    lecture: '50',
    duration: '90 Days',
    projects: 10,
    category: 'Digital Marketing',
    off: '15%',
    title: 'Advanced Digital Marketing + SEO – 90 Days Hands-On Training',
    rating: 4.9,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Digital%20Marketing%20Advanced1.webp?updatedAt=1744658804330',

    crsDetails: `A comprehensive 90-day hybrid course (Online & Offline at Eduden, Kolkata) designed to transform you into a digital marketing strategist. Learn advanced techniques to rank, scale, convert, and track ROI across multiple channels, preparing you for real-world campaigns, freelance work, and job opportunities in SEO or digital marketing.`,

    overView: `To transform you into a digital marketing strategist — someone who not only understands how to post content or run ads, but knows how to rank, scale, convert, and track ROI across multiple channels. By the end of this course, you’ll be ready to handle real-world campaigns, freelance confidently, apply for job roles like Digital Marketing Executive, SEO Analyst, Performance Marketer, or even start your own agency.`,

    join: [
      {
        id: 1,
        title: 'Marketing students or freelancers looking to go pro'
      },
      {
        id: 2,
        title: 'Small business owners building in-house marketing skills'
      },
      {
        id: 3,
        title: 'Job seekers targeting SEO or PPC roles'
      },
      {
        id: 4,
        title:
          'Basic digital marketing or SEO knowledge is helpful (but not mandatory)'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Work on comprehensive digital marketing strategies, SEO audits, and ad campaigns.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Test your knowledge on advanced SEO and performance marketing concepts.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Interactive classes with real-world insights and strategies from professionals.'
      },
      {
        title4: 'Projects',
        description4:
          'Hands-on experience with campaigns, performance tracking, and marketing tools.'
      }
    ],

    tools: [
      { cid: 1, icon: FaGoogle },
      { cid: 2, icon: FaChartLine },
      { cid: 3, icon: FaSearch },
      { cid: 4, icon: FaLink },
      { cid: 5, icon: FaSitemap },
      { cid: 6, icon: FaMailBulk }
    ],

    curriculum: [
      { cid: 1, c: 'Core Marketing & Strategy Foundations' },
      { cid: 2, c: 'Advanced SEO (On-Page, Off-Page, Technical)' },
      { cid: 3, c: 'Content Strategy + Blogging for SEO' },
      { cid: 4, c: 'Google Ads + Performance Marketing' },
      { cid: 5, c: 'Social Media Marketing (Organic + Paid)' },
      { cid: 6, c: 'Email Marketing + Funnels' },
      { cid: 7, c: 'Analytics, Reporting & Real-World Campaigns' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Digital%20Marketing%20Advanced.webp?updatedAt=1744658803844',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, templates, marketing tools, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 28,
    lecture: '70',
    duration: '90 Days',
    projects: 12,
    category: 'Networking',
    off: '15%',
    title: 'Networking Advanced – Routing Mastery (CCNP + CCIE Syllabus Based)',
    rating: 4.9,
    image:
      'https://ik.imagekit.io/0lnr4mwox/ccnp-routing11.webp?updatedAt=1744658793897',

    crsDetails: `A hybrid course designed for intermediate to advanced professionals, this program dives into advanced routing concepts, preparing you for the CCNP ENCOR and CCIE Routing & Services certifications. Learn enterprise-level routing protocols such as EIGRP, OSPF, BGP, and more through practical, real-world configurations.`,

    overView: `To equip you with the skills, configs, and real-world logic to master advanced routing concepts used in large-scale enterprise and service provider environments — following the official CCNP ENCOR + CCIE Routing & Services syllabus. This course is practical, exam-relevant, and field-proven.`,

    join: [
      {
        id: 1,
        title: 'CCNA-certified professionals or those with equivalent knowledge'
      },
      {
        id: 2,
        title: 'Network support engineers ready to level up'
      },
      {
        id: 3,
        title: 'IT professionals targeting CCNP / CCIE R&S certification'
      },
      {
        id: 4,
        title: 'Freelancers or consultants managing large networks'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on labs and practical tasks focusing on advanced routing configurations.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Assess your knowledge and understanding of advanced routing concepts.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Interactive sessions with instructors for real-world network scenarios.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on large-scale network configurations, including advanced routing protocols.'
      }
    ],

    tools: [
      { cid: 1, icon: FaNetworkWired },
      { cid: 2, icon: FaTools },
      { cid: 3, icon: FaLaptopCode },
      { cid: 4, icon: FaShieldAlt },
      { cid: 5, icon: FaTerminal }
    ],

    curriculum: [
      { cid: 1, c: 'Advanced IP Routing Concepts' },
      { cid: 2, c: 'EIGRP – Enhanced Interior Gateway Routing Protocol' },
      { cid: 3, c: 'OSPFv2 & OSPFv3 (Single & Multi Area)' },
      { cid: 4, c: 'BGP – Border Gateway Protocol (Intro to Advanced)' },
      { cid: 5, c: 'Route Redistribution & Policy Control' },
      { cid: 6, c: 'High Availability & Enterprise Design' },
      { cid: 7, c: 'Bonus Module: Exam & Interview Prep (Optional Add-On)' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/CCNP%20Routing.webp?updatedAt=1744658791174',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 29,
    lecture: '80',
    duration: '90 Days',
    projects: 12,
    category: 'Networking',
    off: '15%',
    title: 'Networking Advanced – Switching Mastery (CCNP/CCIE Based)',
    rating: 4.8,
    image:
      'https://ik.imagekit.io/0lnr4mwox/ccnp-switching.webp?updatedAt=1744658793667',

    crsDetails: `Designed for intermediate to advanced professionals, this course provides the knowledge and practical skills needed to configure, troubleshoot, and optimize enterprise switching infrastructure. Covering Layer 2 and Layer 3 topics aligned with Cisco's CCNP and CCIE certifications, you will master the critical aspects of switching in real-world networks.`,

    overView: `To give learners the practical and theoretical knowledge required to configure, troubleshoot, and optimize enterprise switching infrastructure — from access to distribution layers, covering all critical Layer 2 and Layer 3 switching topics aligned with Cisco CCNP & CCIE EI certifications. You’ll build skills that directly map to real-world job roles and Cisco’s most elite certifications.`,

    join: [
      {
        id: 1,
        title:
          'CCNA-certified professionals or those with solid networking fundamentals'
      },
      {
        id: 2,
        title: 'Network engineers or IT infrastructure pros looking to level up'
      },
      {
        id: 3,
        title:
          'Candidates preparing for CCNP ENCOR or CCIE Enterprise Infrastructure'
      },
      {
        id: 4,
        title: 'Professionals managing corporate or campus networks'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on labs and practical tasks focusing on Layer 2 and Layer 3 switching configurations.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Assess your knowledge on advanced switching topics, VLANs, and network security.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Interactive sessions with instructors covering complex switching scenarios and troubleshooting techniques.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on real-world network switching configurations, including VLANs, EtherChannel, and advanced security.'
      }
    ],

    tools: [
      { cid: 1, icon: FaNetworkWired },
      { cid: 2, icon: FaTools },
      { cid: 3, icon: FaLaptopCode },
      { cid: 4, icon: FaShieldAlt },
      { cid: 5, icon: FaTerminal }
    ],

    curriculum: [
      { cid: 1, c: 'Switching Fundamentals Review' },
      { cid: 2, c: 'VLANs & Trunking' },
      { cid: 3, c: 'Inter-VLAN Routing & SVIs' },
      { cid: 4, c: 'Spanning Tree Protocol (STP)' },
      { cid: 5, c: 'EtherChannel (L2 & L3)' },
      { cid: 6, c: 'Advanced Switching Security' },
      { cid: 7, c: 'High Availability & Campus Design' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/CCNP%20switching.webp?updatedAt=1744658792913',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 31,
    lecture: '90',
    duration: '90 Days',
    projects: 6,
    category: 'Cloud Computing',
    off: '10%',
    title: 'Cloud Computing Architect with AWS – 90 Days Career Track',
    rating: 4.8,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Cloud-Computing-Architect-with-AWS-2.webp?updatedAt=1744658795559',

    crsDetails: `This comprehensive course is designed to help you become an AWS Cloud Architect. You will learn how to design, deploy, and manage scalable, secure, and cost-efficient cloud architectures using AWS services. The course aligns with AWS Solutions Architect Associate & Professional certifications.`,

    overView: `To train students, professionals, and tech entrepreneurs to design enterprise-grade cloud architectures using Amazon Web Services, covering compute, storage, databases, networking, high availability, fault tolerance, DevOps integration, and cost optimization. By the end of this course, you will be able to design and document full-scale AWS solutions, prepare for top AWS certifications, and apply for cloud architect, DevOps engineer, or infrastructure lead roles.`,

    join: [
      {
        id: 1,
        title:
          'IT professionals with 1+ year of experience in tech, DevOps, or cloud'
      },
      {
        id: 2,
        title: 'Developers/System Admins upgrading to architect roles'
      },
      {
        id: 3,
        title: 'Learners who have completed AWS Fundamentals or similar basics'
      },
      {
        id: 4,
        title: 'Startups/founders building scalable cloud-native products'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on labs and projects that simulate real-world AWS architecture and cloud infrastructure.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Test your knowledge with quizzes covering each module’s key concepts.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Live training sessions with experienced AWS professionals to clarify concepts and troubleshoot.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on end-to-end AWS architecture projects, including cost-optimized, highly available, and secure solutions.'
      }
    ],

    tools: [
      { cid: 1, icon: FaCloud },
      { cid: 2, icon: FaAws },
      { cid: 3, icon: FaTools },
      { cid: 4, icon: FaServer },
      { cid: 5, icon: FaDatabase }
    ],

    curriculum: [
      { cid: 1, c: 'AWS Architecture Foundations' },
      { cid: 2, c: 'Compute, Load Balancing & Auto Scaling' },
      { cid: 3, c: 'Networking & Security Architecture' },
      { cid: 4, c: 'Storage, Databases & Content Delivery' },
      { cid: 5, c: 'Monitoring, Cost Optimization & Automation' },
      { cid: 6, c: 'Final Project + Certification/Interview Prep' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Cloud-Computing-Architect-with-AWS-1.webp?updatedAt=1744658793599',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 32,
    lecture: '45',
    duration: '45 Days',
    projects: 6,
    category: 'Cloud Computing',
    off: '10%',
    title: 'Cloud Computing with Azure – 45 Days Fundamentals + Projects',
    rating: 4.7,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Cloud-Computing-with-Azure-2.webp?updatedAt=1744658796609',

    crsDetails: `This course provides a thorough introduction to Microsoft Azure, covering fundamental cloud concepts and services. You will gain hands-on experience in deploying, managing, and securing cloud applications and services, preparing you for the Microsoft Azure Fundamentals (AZ-900) certification.`,

    overView: `To equip learners with the knowledge and hands-on skills to confidently use Azure cloud services, including VMs, storage, networking, databases, and identity management — following Microsoft's cloud computing best practices. Whether you're planning to build your own cloud project, pursue certification, or land a cloud support/admin/dev job, this course sets you up right.`,

    join: [
      {
        id: 1,
        title: 'Beginners with basic computer or IT knowledge'
      },
      {
        id: 2,
        title: 'Students, developers, or system admins exploring cloud'
      },
      {
        id: 3,
        title: 'Professionals preparing for AZ-900 certification'
      },
      {
        id: 4,
        title: 'Anyone switching from on-prem IT to cloud-based roles'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on labs and projects to get familiar with Azure services.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Quiz after each module to test your understanding of cloud concepts.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Interactive sessions with Azure experts to help you master the platform.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on real-world cloud projects such as deploying applications, configuring networks, and more.'
      }
    ],

    tools: [
      { cid: 1, icon: FaCloud },
      { cid: 2, icon: FaMicrosoft },
      { cid: 3, icon: FaServer },
      { cid: 4, icon: FaDatabase },
      { cid: 5, icon: FaNetworkWired }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Cloud & Azure Architecture' },
      { cid: 2, c: 'Compute Services – Virtual Machines & Containers' },
      { cid: 3, c: 'Azure Storage & Databases' },
      { cid: 4, c: 'Networking in Azure' },
      { cid: 5, c: 'Identity, Access & Monitoring' },
      { cid: 6, c: 'Final Project + AZ-900 Prep' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Cloud-Computing-with-Azure-1.webp?updatedAt=1744658796211',
    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 33,
    lecture: '60',
    duration: '90 Days',
    projects: 7,
    category: 'Cloud Computing',
    off: '15%',
    title: 'CloudOps Pro – DevOps + Cloud Engineering Training (AWS + Azure)',
    rating: 4.8,
    image:
      'https://ik.imagekit.io/0lnr4mwox/CloudOps-Pro-_-DevOps-+-Cloud-Engineering-Training-(AWS-+-Azure)-2.webp?updatedAt=1744658798238',

    crsDetails: `This program provides learners with comprehensive DevOps and cloud engineering skills, covering the essentials of infrastructure provisioning, containerization, automation, and deploying production-ready systems on AWS and Azure. With hands-on projects and practical experience, you'll be ready for DevOps, SRE, Cloud Engineer, and Platform Engineer roles.`,

    overView: `This course is designed to equip you with end-to-end DevOps and cloud engineering skills. You'll learn how to provision cloud infrastructure, containerize applications, automate CI/CD pipelines, and deploy systems on both AWS and Azure. Whether you're transitioning into a DevOps role or upgrading your cloud skills, this course prepares you for high-demand positions in the industry.`,

    join: [
      {
        id: 1,
        title: 'IT professionals with basic Linux or scripting experience'
      },
      {
        id: 2,
        title: 'Developers transitioning into DevOps/cloud roles'
      },
      {
        id: 3,
        title: 'Cloud beginners looking to upskill in automation'
      },
      {
        id: 4,
        title: 'Tech graduates preparing for high-demand DevOps jobs'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on labs and projects to practice DevOps automation and cloud provisioning.'
      },
      {
        title2: 'Quizzes',
        description2: 'Test your knowledge with quizzes after each module.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Live training sessions with instructors to address doubts and clarify concepts.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on real-world DevOps and cloud engineering projects to demonstrate your skills.'
      }
    ],

    tools: [
      { cid: 1, icon: FaAws },
      { cid: 2, icon: FaDocker },
      { cid: 3, icon: FaGit },
      { cid: 4, icon: FaMicrosoft }
    ],

    curriculum: [
      { cid: 1, c: 'DevOps Fundamentals + Linux Mastery' },
      { cid: 2, c: 'AWS Cloud Services for DevOps' },
      { cid: 3, c: 'CI/CD with Jenkins & GitHub Actions' },
      { cid: 4, c: 'Docker & Kubernetes (AWS + Local)' },
      { cid: 5, c: 'Infrastructure as Code (Terraform + CloudFormation)' },
      { cid: 6, c: 'DevOps on Azure (Pipelines, Boards, Repos)' },
      { cid: 7, c: 'Monitoring, Logging, & Security' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/CloudOps-Pro-_-DevOps-+-Cloud-Engineering-Training-(AWS-+-Azure)-1.webp?updatedAt=1744658798008',
    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 35,
    lecture: '60',
    duration: '90 Days',
    projects: 7,
    category: 'DevOps',
    off: '15%',
    title: 'DevOps Mastery – 90 Days Advanced Career Track',
    rating: 4.8,
    image:
      'https://ik.imagekit.io/0lnr4mwox/DEVOPS-ADVANCE-2.webp?updatedAt=1744658802267',

    crsDetails: `This advanced DevOps course takes learners deep into industry-standard practices, including CI/CD, containerization, Kubernetes, Jenkins, Terraform, and more. You'll gain hands-on experience automating pipelines, managing infrastructure, and deploying applications in cloud environments like AWS, Azure, and GCP. This course prepares you for roles such as DevOps Engineer, Cloud DevOps Specialist, or Site Reliability Engineer (SRE).`,

    overView: `Designed for learners with foundational DevOps knowledge, this course covers advanced concepts like infrastructure automation, container orchestration with Kubernetes, cloud deployment, and monitoring. The practical approach ensures you're not just learning tools, but becoming a production-ready DevOps pro capable of managing real-world DevOps workflows and cloud environments.`,

    join: [
      {
        id: 1,
        title: 'Graduates of Eduden’s “DevOps for Beginners” or equivalent'
      },
      {
        id: 2,
        title: 'IT professionals, developers, sysadmins looking to upskill'
      },
      {
        id: 3,
        title: 'Cloud practitioners moving into automation roles'
      },
      {
        id: 4,
        title:
          'Anyone preparing for DevOps job roles, interviews or certifications'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on labs to practice automation, deployment, and cloud-based infrastructure management.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Test your knowledge and skills with quizzes after each module.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Interactive instructor-led sessions for problem-solving and in-depth understanding.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on real-world projects that demonstrate your advanced DevOps skills.'
      }
    ],

    tools: [
      { cid: 1, icon: FaDocker },
      { cid: 2, icon: FaGithub },
      { cid: 3, icon: FaAws }
    ],

    curriculum: [
      { cid: 1, c: 'DevOps Pipeline Architecture Deep Dive' },
      { cid: 2, c: 'Docker & Containers – Pro Level' },
      { cid: 3, c: 'Kubernetes (K8s) for Production' },
      { cid: 4, c: 'Jenkins + GitHub Actions CI/CD Automation' },
      { cid: 5, c: 'Infrastructure as Code with Terraform' },
      { cid: 6, c: 'Configuration Management with Ansible' },
      { cid: 7, c: 'Cloud Platforms (AWS Focus + Azure Intro)' },
      { cid: 8, c: 'Monitoring, Logging & Security' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/DEVOPS-ADVANCE-1.webp?updatedAt=1744658801375',
    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 37,
    lecture: '50',
    duration: '60 Days',
    projects: 6,
    category: 'Linux',
    off: '15%',
    title: 'Linux Pro – Advanced Server Admin & Automation (RHCE Focused)',
    rating: 4.8,
    image:
      'https://ik.imagekit.io/0lnr4mwox/adv%202.webp?updatedAt=1744658785688',

    crsDetails: `A comprehensive RHCE-focused course tailored for advanced Linux users and professionals. Learn to configure, secure, automate, and manage Linux servers in production environments. Includes deep dives into process management, LVM, services, and automation with Bash and Ansible.`,

    overView: `This hands-on course is for those ready to move beyond the basics. You’ll simulate real infrastructure, automate system tasks, secure networks, and prepare for RHCE certification. Ideal for system admins and DevOps engineers seeking mastery in Linux-based server environments.`,

    join: [
      {
        id: 1,
        title: 'RHCSA certified learners or equivalent experience'
      },
      {
        id: 2,
        title: 'Linux users looking to level up into sysadmin roles'
      },
      {
        id: 3,
        title: 'DevOps/cloud engineers seeking stronger server knowledge'
      },
      {
        id: 4,
        title:
          'Professionals aiming for RHCE, Ansible, or hybrid automation jobs'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Complete deep-dive tasks focused on system management, user permissions, service configurations, and networking.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Test your grasp of RHCE-level topics like systemd, SELinux, and firewalld with challenging module-end quizzes.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Attend expert-led mentorship sessions to review advanced Linux concepts, troubleshoot labs, and discuss real-world use cases.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on real-time automation and server administration projects using bash scripting and Ansible to solidify your skills.'
      }
    ],

    tools: [
      { cid: 1, icon: FaLinux },
      { cid: 2, icon: FaServer },
      { cid: 3, icon: FaShieldAlt },
      { cid: 4, icon: FaTools },
      { cid: 5, icon: SiAnsible }
    ],

    curriculum: [
      { cid: 1, c: 'System Management & Process Control' },
      { cid: 2, c: 'Advanced Users, Groups & Permissions' },
      { cid: 3, c: 'Storage & LVM Management' },
      { cid: 4, c: 'Networking & Firewalls (Advanced)' },
      { cid: 5, c: 'Shell Scripting & Automation' },
      { cid: 6, c: 'System Services & Server Configuration' },
      { cid: 7, c: 'Introduction to Ansible for RHCE' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/adv%201.webp?updatedAt=1744658786078',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 39,
    lecture: '120+',
    duration: '9 Months',
    projects: 12,
    category: 'Programming',
    off: '15%',
    title: 'Diploma in Full Stack Programming – 9 Months Career Track',
    rating: 4.9,
    image:
      'https://ik.imagekit.io/0lnr4mwox/fullstack1.webp?updatedAt=1744658807249',

    crsDetails: `A complete job-ready full stack web development program for absolute beginners to become industry-ready. Learn to build, deploy, and maintain modern web apps using React, Next.js, Django, and real-world databases.`,

    overView: `Designed for students, working professionals, and entrepreneurs, this 9-month hybrid diploma covers everything from web basics to advanced deployment. You’ll graduate with a solid portfolio, job prep, and the confidence to take on real tech roles.`,

    join: [
      { id: 1, title: 'Students (12th pass or graduates from any stream)' },
      { id: 2, title: 'Working professionals looking to switch careers' },
      {
        id: 3,
        title:
          'Freelancers and entrepreneurs wanting to build real tech products'
      },
      {
        id: 4,
        title:
          'Anyone passionate about building web apps, even without coding background'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Learn full stack programming with hands-on assignments that cover React, Next.js, Django, PostgreSQL, and MongoDB.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Reinforce your understanding of full stack concepts with quizzes after each module to test your knowledge.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Participate in live coding sessions where you can ask questions, discuss concepts, and get real-time feedback.'
      },
      {
        title4: 'Projects',
        description4:
          'Work on 10+ real-world projects, including building blogs, APIs, ecommerce platforms, and more, to demonstrate your skills.'
      }
    ],
    tools: [
      { cid: 1, icon: FaReact },
      { cid: 2, icon: FaPython },
      { cid: 3, icon: FaDatabase },
      { cid: 4, icon: FaNodeJs },
      { cid: 5, icon: FaGitAlt }
    ],

    curriculum: [
      { cid: 1, c: 'Programming & Web Fundamentals (1 Month)' },
      { cid: 2, c: 'React.js – Frontend Development (2 Months)' },
      { cid: 3, c: 'Next.js – Server-Side Frontend (1.5 Months)' },
      { cid: 4, c: 'Django – Backend API Development (2 Months)' },
      { cid: 5, c: 'PostgreSQL + MongoDB – Database Design (1 Month)' },
      {
        cid: 6,
        c: 'Full Stack Integration, DevOps & Final Capstone (1.5 Months)'
      }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Diploma%20in%20Full%20Stack%20Programming.webp?updatedAt=1744796640792',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 40,
    lecture: '90+',
    duration: '6 Months',
    projects: 8,
    category: 'Programming',
    off: '10%',
    title: 'MERN Stack Developer – 6 Months Hands-On Training',
    rating: 4.8,
    image: 'https://ik.imagekit.io/0lnr4mwox/mern.webp?updatedAt=1744658812080',

    crsDetails: `Master full stack web development with JavaScript from scratch. Build dynamic apps using React, Node, Express, and MongoDB, and learn how to integrate, secure, and deploy your own full-stack projects.`,

    overView: `This hands-on 6-month program is ideal for beginners and those with basic frontend experience who want to transition into full stack MERN development. Learn by building projects from day one and become job-ready with real deployment skills.`,

    join: [
      { id: 1, title: 'Students (12th pass or graduates)' },
      { id: 2, title: 'Working professionals looking to switch to tech' },
      { id: 3, title: 'Frontend developers looking to go full stack' },
      {
        id: 4,
        title: 'Entrepreneurs & freelancers wanting to build & launch real apps'
      }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Complete hands-on assignments to master the MERN stack, including MongoDB, Express, React, and Node.js.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Test your knowledge of MERN stack concepts after each module to ensure strong understanding of key technologies.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Engage in live, interactive coding sessions where you can ask questions, collaborate with peers, and get expert feedback.'
      },
      {
        title4: 'Projects',
        description4:
          'Build 8 practical projects, such as product catalogs, APIs, dashboards, and booking systems, to apply your skills in real-world scenarios.'
      }
    ],
    tools: [
      { cid: 1, icon: FaReact },
      { cid: 2, icon: FaNodeJs },
      { cid: 3, icon: FaDatabase },
      { cid: 4, icon: FaJsSquare },
      { cid: 5, icon: FaGithub }
    ],

    curriculum: [
      { cid: 1, c: 'JavaScript & Web Fundamentals (3 Weeks)' },
      { cid: 2, c: 'React – Frontend Development (6 Weeks)' },
      { cid: 3, c: 'Node.js & Express – Backend API Development (6 Weeks)' },
      { cid: 4, c: 'MongoDB – Database Design (3 Weeks)' },
      { cid: 5, c: 'MERN Stack Integration (5 Weeks)' },
      { cid: 6, c: 'Deployment, Hosting & DevOps Basics (2 Weeks)' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/mern1.webp?updatedAt=1744658812054',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 41,
    lecture: '65+',
    duration: '60 Days',
    projects: 6,
    category: 'Programming',
    off: '12%',
    title: 'Web3 & dApp Development – Full Stack Blockchain in 60 Days',
    rating: 3.7,
    image: 'https://ik.imagekit.io/0lnr4mwox/web3.webp?updatedAt=1744658823795',

    crsDetails: `Master the essentials of decentralized application development with this hands-on 60-day Web3 program. From Ethereum fundamentals and Solidity smart contracts to frontend dApp integration and NFT marketplaces, this course will make you proficient in building, deploying, and securing blockchain applications.`,

    overView: `To equip learners with the skills and tools to build decentralized applications using Ethereum smart contracts and connect them to web interfaces with modern Web3 libraries. Students will also explore NFT creation, smart contract deployment, and dApp monetization.`,

    join: [
      {
        id: 1,
        title: 'Frontend or backend developers (React/JS/Python preferred)'
      },
      { id: 2, title: 'Blockchain & crypto-curious learners' },
      { id: 3, title: 'Startup founders building Web3 MVPs' },
      { id: 4, title: 'Freelancers aiming to enter the NFT and DeFi world' }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Practice writing smart contracts, integrating wallets, and interacting with the Ethereum blockchain.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Test your understanding of Web3 concepts, Solidity, dApp architecture, and blockchain workflows.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Join expert-led sessions to discuss smart contract design, frontend integration, and real-world Web3 challenges.'
      },
      {
        title4: 'Projects',
        description4:
          'Build and deploy complete dApps including NFT minting platforms, custom tokens, and DeFi features.'
      }
    ],

    tools: [
      { cid: 1, icon: FaEthereum },
      { cid: 2, icon: FaJsSquare },
      { cid: 3, icon: FaGithub },
      { cid: 4, icon: FaDatabase }
    ],

    curriculum: [
      { cid: 1, c: 'Web3 Fundamentals & Blockchain Basics' },
      { cid: 2, c: 'Smart Contracts & Solidity Programming' },
      { cid: 3, c: 'Smart Contract Deployment with Hardhat' },
      { cid: 4, c: 'Frontend Integration with web3.js & ethers.js' },
      { cid: 5, c: 'NFTs, Tokens & DeFi Basics' },
      { cid: 6, c: 'IPFS, Gas Optimization & Security' },
      { cid: 7, c: 'Final Project + dApp Deployment' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/web31.webp?updatedAt=1744658823697',
    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 43,
    lecture: '60+',
    duration: '60 Days',
    projects: 7,
    category: 'Digital Marketing',
    off: '10%',
    title: 'AI-Powered Digital Marketing – Hands-On in 60 Days',
    rating: 4.8,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Digital%20Marketing%20with%20AI.webp?updatedAt=1744658804205',

    crsDetails: `This beginner-to-intermediate digital marketing course blends the latest in performance marketing with the power of AI. Learn to launch high-performing campaigns, create AI-generated content, optimize ads and SEO, automate workflows, and build a job-ready portfolio. Perfect for freelancers, content creators, startup marketers, and students aiming to fast-track their digital journey.`,

    overView: `To equip learners with the latest skills in performance marketing and automation, using AI-powered tools to create content, optimize ads, plan campaigns, analyze performance, and scale results faster than traditional methods. You’ll walk away with live campaign experience, a real marketing portfolio, and the confidence to run campaigns that convert — whether for your clients, startup, or side hustle.`,

    join: [
      {
        id: 1,
        title: 'Students, freelancers & job seekers exploring digital marketing'
      },
      { id: 2, title: 'Small business owners & content creators' },
      { id: 3, title: 'Traditional marketers upgrading to automation' },
      { id: 4, title: 'Influencers and startup founders scaling their brand' }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Create ad copy, email funnels, landing pages, and full campaigns using AI tools.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Assess understanding of SEO, ad strategy, email workflows, and AI integrations.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Weekly strategy workshops, ad campaign walkthroughs, and tool mastery sprints.'
      },
      {
        title4: 'Projects',
        description4:
          'Launch real ads, build automation, generate SEO content, and complete a capstone campaign.'
      }
    ],

    tools: [
      { cid: 1, icon: FaRobot },
      { cid: 2, icon: FaBullhorn },
      { cid: 3, icon: FaEnvelope },
      { cid: 4, icon: FaChartBar }
    ],

    curriculum: [
      { cid: 1, c: 'Digital Marketing Fundamentals + AI Integration' },
      { cid: 2, c: 'AI Content Creation & SEO' },
      { cid: 3, c: 'Meta & Google Ads with AI-Powered Copywriting' },
      { cid: 4, c: 'AI Design & Video Tools' },
      { cid: 5, c: 'Email Marketing & Automation Workflows' },
      { cid: 6, c: 'Analytics, Reporting & Automation' },
      { cid: 7, c: 'Capstone Project & Portfolio Building' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Digital%20Marketing%20with%20AI2.webp?updatedAt=1744658805347',
    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },

  {
    id: 48,
    lecture: '70+',
    duration: '60 Days',
    projects: 8,
    category: 'Artificial Intelligence',
    off: '20%',
    title:
      'Deep Learning & Neural Networks with TensorFlow & Keras – 60 Days Hands-On Training',
    rating: 4.9,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Deep-Learning-&-Neural-Networks-1.webp?updatedAt=1744658799487',

    crsDetails: `Learn how to build powerful AI models that think like a human brain. In 60 days, master neural networks, TensorFlow, and Keras to solve real-world problems in image processing, NLP, and time series forecasting — all through hands-on learning.`,

    overView: `To provide a solid foundation in neural network architectures, deep learning workflows, and real-world AI applications using TensorFlow and Keras — all taught with hands-on projects, not just theory.`,

    join: [
      { id: 1, title: 'Learners with basic ML or Python experience' },
      { id: 2, title: 'Data science and ML graduates ready for next level' },
      { id: 3, title: 'Developers exploring computer vision or NLP' },
      { id: 4, title: 'Professionals aiming for AI Engineer roles or research' }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Train neural networks, tweak hyperparameters, and visualize layers using TensorFlow/Keras.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Concept checks on backpropagation, optimizers, and CNN/RNN mechanisms.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Deep learning builds, architecture walkthroughs, and real-time model debugging.'
      },
      {
        title4: 'Projects',
        description4:
          'Image classification, sentiment analysis, sequence forecasting, and final capstone builds.'
      }
    ],

    tools: [
      { cid: 1, icon: FaBrain },
      { cid: 2, icon: FaPython },
      { cid: 3, icon: FaChartLine },
      { cid: 4, icon: FaProjectDiagram }
    ],

    curriculum: [
      { cid: 1, c: 'Introduction to Deep Learning' },
      { cid: 2, c: 'Feedforward Neural Networks (FNNs)' },
      { cid: 3, c: 'TensorFlow & Keras Fundamentals' },
      { cid: 4, c: 'Convolutional Neural Networks (CNNs)' },
      { cid: 5, c: 'Recurrent Neural Networks (RNNs) + LSTM/GRU' },
      { cid: 6, c: 'Transfer Learning + Fine-Tuning' },
      { cid: 7, c: 'Final Capstone Project' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Deep-Learning-&-Neural-Networks-2.webp?updatedAt=1744658800166',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 49,
    lecture: '55+',
    duration: '45 Days',
    projects: 6,
    category: 'Artificial Intelligence',
    off: '15%',
    title:
      'Applied AI in Healthcare, Finance & Marketing – 45 Days Industry-Focused Course',
    rating: 4.8,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Applied-AI-1.webp?updatedAt=1744658785989',

    crsDetails: `Master the practical side of Artificial Intelligence by solving real-world problems in healthcare diagnostics, financial fraud detection, and AI-powered marketing. This course focuses on industry-specific use cases and hands-on projects that demonstrate how AI is transforming key sectors.`,

    overView: `To help learners understand how AI is transforming the world’s biggest industries and give them the tools to build intelligent solutions across domains like healthcare, fintech, and digital marketing.`,

    join: [
      { id: 1, title: 'Professionals in healthcare, marketing, finance' },
      { id: 2, title: 'ML/DS students who want domain-specific expertise' },
      { id: 3, title: 'Business owners & consultants exploring AI automation' },
      { id: 4, title: 'Entrepreneurs building AI-based SaaS products' }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Domain-based problem-solving using industry datasets and real KPIs.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Assessments to reinforce AI concepts in healthcare, finance, and marketing.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Industry case studies, project walkthroughs, and tool usage demos.'
      },
      {
        title4: 'Projects',
        description4:
          'Predictive healthcare models, fintech fraud detectors, AI-powered marketing tools.'
      }
    ],

    tools: [
      { cid: 1, icon: FaRobot },
      { cid: 2, icon: FaMoneyCheckAlt },
      { cid: 3, icon: FaChartBar },
      { cid: 4, icon: FaTools }
    ],

    curriculum: [
      { cid: 1, c: 'AI in Healthcare' },
      { cid: 2, c: 'AI in Finance (FinTech)' },
      { cid: 3, c: 'AI in Digital Marketing' },
      { cid: 4, c: 'Building & Presenting Business Projects' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Applied-AI-2.webp?updatedAt=1744658785757',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  },
  {
    id: 50,
    lecture: '60+',
    duration: '60 Days',
    projects: 6,
    category: 'Artificial Intelligence',
    off: '10%',
    title:
      'Natural Language Processing (NLP) & LLMs with Hugging Face – 60 Days Hands-On Course',
    rating: 4.9,
    image:
      'https://ik.imagekit.io/0lnr4mwox/Natural-Language-Processing-(NLP)-&-LLMs-with-Hugging-Face.webp?updatedAt=1744658812657',

    crsDetails: `Learn how to teach AI to read, write, and understand human language by mastering NLP models, transformers, and building intelligent AI assistants using Hugging Face, OpenAI, and other advanced NLP tools.`,

    overView: `This course will equip learners with practical experience in processing and generating human language using traditional NLP techniques and modern LLMs like BERT, GPT, and T5 to create chatbots, text summarizers, and classifiers.`,

    join: [
      { id: 1, title: 'AI/ML students or professionals' },
      { id: 2, title: 'Python developers exploring text/AI' },
      { id: 3, title: 'Data scientists breaking into NLP' },
      { id: 4, title: 'Tech entrepreneurs building smart tools' }
    ],

    features: [
      {
        title1: 'Assignments',
        description1:
          'Hands-on projects focused on real-world NLP applications.'
      },
      {
        title2: 'Quizzes',
        description2:
          'Tests to reinforce NLP concepts and transformer model understanding.'
      },
      {
        title3: 'Live Sessions',
        description3:
          'Detailed discussions on state-of-the-art techniques and industry trends.'
      },
      {
        title4: 'Projects',
        description4:
          'Build advanced models like chatbots, classifiers, and sentiment analyzers.'
      }
    ],

    tools: [
      { cid: 1, icon: FaRobot },
      { cid: 2, icon: FaComments },
      { cid: 3, icon: FaBrain },
      { cid: 4, icon: FaTools }
    ],

    curriculum: [
      { cid: 1, c: 'Fundamentals of NLP' },
      { cid: 2, c: 'NLP with spaCy & NLTK' },
      { cid: 3, c: 'Deep Learning for NLP' },
      { cid: 4, c: 'Transformers & Hugging Face' },
      { cid: 5, c: 'Working with LLMs & ChatGPT APIs' },
      { cid: 6, c: 'Final Capstone Project' }
    ],

    img: 'https://ik.imagekit.io/0lnr4mwox/Natural-Language-Processing-(NLP)-&-LLMs-with-Hugging-Face-2.webp?updatedAt=1744658811761',

    Certificate:
      'A digital certificate of completion from Eduden after completing all modules and submitting your final project.',

    Access:
      'Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.',

    interview:
      'Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.'
  }
]
