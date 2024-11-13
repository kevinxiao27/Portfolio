import { Experience } from "@/components/types";
import BizTech from "@/assets/BizTech.png";
import NAOS from "@/assets/Naos.png";

export const experience: Experience[] = [
  {
    name: "Software Engineer",
    organization: "UBC BizTech",
    link: "https://www.ubcbiztech.com/",
    src: BizTech,
    date: "May 2024 \n- Present",
    description:
      "Spearheaded the development of a WebSocket microservice for a real-time voting platform, supporting over 200 concurrent users with minimal latency through robust stateful socket protocols and edge deployment. Reduced DynamoDB read costs by 40% by transitioning from relational scans to single-table queries and using Global-Secondary Indexes for faster reads and lower RCUs. Decreased socket service onboarding time by 60% by creating comprehensive technical documentation detailing database access patterns, socket protocols, and key architectural decisions."
  },
  {
    name: "Undergraduate Teaching Assistant - Software Construction | OOP",
    organization: "University of British Columbia",
    link: "https://www.cs.ubc.ca/course-section/cpsc-210-101-2023w",
    date: "Sept 2024 \n- Present",
    description:
      "Mentored over 50 students through personal office hours, guiding them through library documentation and providing design pattern advice for personal projects. Explained object-oriented programming and design concepts to over 500 students on the class discussion board, encouraging in-depth exploration of topics such as robustness and iterator implementation."
  },
  {
    name: "Frontend Development Intern",
    organization: "NAOS Blockchain Capital",
    link: "https://www.naos.xyz/",
    src: NAOS,
    date: "Jan 2024 - July 2024",
    description:
      "Increased social media impressions by 180% by integrating TikTok's oEmbed API into the company's static site, revamping the media carousel to include posts from multiple social platforms. Reduced manual customer information aggregation time by 90% by developing internal tools using Puppeteer to web scrape, parse, and export over 2 GB of data to Excel for cross-functional use."
  }
];
