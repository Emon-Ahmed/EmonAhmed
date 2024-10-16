import { Icons } from "@/components/icons";
import { HomeIcon, CloudDownload } from "lucide-react";

export const DATA = {
  name: "Emon Ahmed",
  initials: "EA",
  url: "https://emon-ahmed.vercel.app/",
  location: "Dhaka, Bangladesh",
  locationLink: "https://maps.app.goo.gl/HbGYWKmvZHWApKZ96",
  description:
    "Frontend Software Engineer | Building Scalable, Responsive, User-Friendly Web Apps",
  summary:
    "Hello! I'm Emon, a **developer** specializing in the **MERN STACK** with a strong foundation in building scalable, responsive, and user-friendly web applications. I recently graduated with a **Computer Science & Engineering** degree from a private university. Passionate about adapting to new environments and technologies. With experience in both front-end and back-end development, I take a hands-on approach to **solving problems** and collaborating with others.",
  avatarUrl: "/Emon.jpg",
  skills: [
    "JavaScript", "Bootstrap", "TailwindCSS", "React.js", "Next.js", "Redux.js", "Redux-Toolkit", " RTK Query", "Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "React Native", "Expo", "NativeWind", "Git", "Github", "VS Code", "Figma", "JIRA", "Vercel", "Netlify"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "/Emon_Ahmed.pdf", icon: CloudDownload, label: "RESUME" },
  ],
  contact: {
    email: "emonahmed.cse@gmail.com",
    tel: "+8801921412932",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Emon-Ahmed/",
        icon: Icons.github,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1wMKnI6T_to4MXzbIkCHrjTFclh7K9rOv/view?usp=sharing",
        icon: CloudDownload,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/emon-dev",
        icon: Icons.linkedin,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,
      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "City University",
      href: "https://www.cityuniversity.edu.bd/",
      degree: "Bachelor of Science in Computer Science and Engineering",
      logoUrl: "/cse.png",
      start: "December 2019",
      end: "June 2024",
    },
    {
      school: "Dhamrai Hardinge Govt High School & College",
      href: "https://bn.wikipedia.org/wiki/%E0%A6%A7%E0%A6%BE%E0%A6%AE%E0%A6%B0%E0%A6%BE%E0%A6%87_%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A1%E0%A6%BF%E0%A6%9E%E0%A7%8D%E0%A6%9C_%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF_%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A_%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC_%E0%A6%93_%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C",
      degree: "Higher Secondary Certificate (HSC)",
      logoUrl: "/hsc.jpg",
      start: "July 2017",
      end: "July 2019",
    },
  ],
  certifications: [
    {
      school: "Learn with Sumit",
      href: "https://learnwithsumit.com/",
      degree: "Reactive Accelerator",
      logoUrl: "/sumit.png",
      start: "October 2024",
      end: "Present",
    },
    {
      school: "Programming Hero",
      href: "https://web.programming-hero.com/",
      degree: "Complete Web Development",
      logoUrl: "/phero.png",
      start: "June 2021",
      end: "March 2022",
    },
    {
      school: "Creative IT Institute",
      href: "https://www.creativeitinstitute.com/",
      degree: "Responsive Web Design",
      logoUrl: "/creative-it.png",
      start: "August 2019",
      end: "February 2019",
    },
  ],
  projects: [
    {
      title: "JobHunt Web Application",
      href: "https://jobhunt-bangladesh.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a full-stack job platform using the Mern stack and Next.js, with NextAuth for secure authentication, MongoDB for data management, and Vercel for deployment. Implemented user roles for applicants and recruiters, allowing job postings, company profiles, and profile management",
      technologies: [
        "Next.js",
        "Next-Auth",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://jobhunt-bangladesh.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Emon-Ahmed/JobHunt-Bangladesh",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/jobhunt.png",
      video: "#",
    },
    {
      title: "Talk Web Blog Website",
      href: "https://talk-web-blog-website.vercel.app/",
      dates: "June 2023 - July 2023",
      active: true,
      description:
        "Developed a Single Blog Application using the Mern stack with Firebase Authentication for user sign-in and sign-up functionality, ensuring seamless and secure user management. Implemented CRUD Operations allowing users to create, update, and delete blog posts, and a responsive design",
      technologies: [
        "React.js",
        "Firebase",
        "NodeJS",
        "ExpressJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://talk-web-blog-website.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Emon-Ahmed/TalkWeb-Blog-Website",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Server",
          href: "https://github.com/Emon-Ahmed/TalkWeb-Blog-Website-Server",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/talk.png",
      video: "#",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
