import { Icons } from "@/components/icons";
import { HomeIcon, CloudDownload } from "lucide-react";

export const DATA = {
  name: "Emon Ahmed",
  initials: "EA",
  url: "https://emon-ahmed.vercel.app/",
  location: "Dhaka, Bangladesh",
  locationLink: "https://maps.app.goo.gl/HbGYWKmvZHWApKZ96",
  description:
    "Software Engineer | JavaScript | React.js & Node.js Specialist",
  summary:
    "Software Developer proficient in **React.js**, **Node.js**, **Express.js**, and **MongoDB**, with experience building scalable applications and efficient **REST APIs**. Proficient in **React-Redux**, **Redux-Toolkit**, **RTK-Query**, and performance **Optimization**",
  avatarUrl: "/Emon.jpg",
  skills: [
    "JavaScript", "TypeScript", "Node.js", "Express.js", " REST APIs", "JWT Auth", "React.js", "Redux.js", "Redux-Toolkit", "Next.js", "TailwindCSS", "MongoDB", "Mongoose", "Mongoose", "Git", "Github", "Postman", "Zoho", "Trello", "Jira",
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
      company: "Salt Innovate ",
      href: "https://saltinnovate.com/",
      badges: ["Internship"],
      location: "Remote",
      title: "Trainee Software Engineer",
      logoUrl: "/salt-innovate.png",
      start: "December 2024",
      end: "March 2025",
      description:
        "Contributed to building scalable backend services using Node.js, Express, and Next.js. Designed and integrated RESTful APIs to enable seamless frontend-backend communication. Collaborated on real-world projects, including a Hiring Manager platform, a young school website, and an Islamic EdTech solution.",
    },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
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
    // {
    //   school: "Learn with Sumit",
    //   href: "https://learnwithsumit.com/",
    //   degree: "Reactive Accelerator",
    //   logoUrl: "/sumit.png",
    //   start: "October 2024",
    //   end: "Present",
    // },
    {
      school: "Programming Hero",
      href: "https://web.programming-hero.com/congrats/complete/61bdfafcf5118b71ade5a68a",
      degree: "Complete Web Development",
      logoUrl: "/phero.png",
      start: "June 2021",
      end: "March 2022",
    },
    {
      school: "Creative IT Institute",
      href: "https://www.youtube.com/watch?v=ukvkio3Km_E",
      degree: "Responsive Web Design",
      logoUrl: "/creative-it.png",
      start: "August 2019",
      end: "February 2019",
    },
  ],
  projects: [
    {
      title: "Earl Brown Education Consulting",
      href: "https://www.ebedc.com/",
      dates: "Official Work",
      active: true,
      description:
        "Optimized app structure and data flow with Next.js, ensuring seamless frontend-backend integration and maintainable, scalable architecture through component-driven development.",
      technologies: [
        "React.js",
        "Next.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.ebedc.com/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/Emon-Ahmed/",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/earl-brown-education-banner.png",
      video: "#",
    },

    {
      title: "AAL Young Kingz Website",
      href: "https://www.aalyoungkingz.org/",
      dates: "Official Work",
      active: true,
      description:
        " Contributed to a school website's foundation using Next.js, enabling future backend integration with a component-based, scalable structure and optimized for server-side data handling.",
      technologies: [
        "React.js",
        "Next.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.aalyoungkingz.org/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/Emon-Ahmed/",
        //   icon: <Icons.github className="size-3" />,
        // },
        // {
        //   type: "Server",
        //   href: "https://github.com/Emon-Ahmed/",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/aal-young-kingz-website-banner.png",
      video: "#",
    },
    {
      title: "Minimal Tech Blog Website",
      href: "https://minimal-tech-blog.vercel.app/",
      dates: "Personal Project",
      active: true,
      description:
        "Implemented scalable state and data fetching with Redux Toolkit and RTK Query, ensuring structured API flow and consistent blog rendering across components.",
      technologies: [
        "React.js",
        "Redux.js",
        "Redux Toolkit",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://minimal-tech-blog.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Emon-Ahmed/Minimal-Tech-Blog",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Server",
          href: "https://github.com/Emon-Ahmed/Minimal-Tech-Blog-Server",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/minimal-tech-blog-banner.png",
      video: "#",
    },
    {
      title: "On Time Hiring - Hiring Solution",
      href: "http://ontimehiring.com/",
      dates: "Official Work",
      active: true,
      description:
        "Built a backend system with Node.js, Express, and MongoDB using modular RESTful APIs, JWT auth, and MVC routing for user, job, and applicant management.",
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "http://ontimehiring.com/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/Emon-Ahmed/",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/ontimehiring-website-banner.png",
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
