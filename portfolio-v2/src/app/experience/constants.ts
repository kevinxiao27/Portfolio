import { Experience } from "@/components/types";
import BizTech from "@/assets/BizTech.png";
import NAOS from "@/assets/Naos.png";

export const experience: Experience[] = [
  {
    name: "Lead Software Engineer",
    organization: "UBC BizTech",
    link: "https://www.ubcbiztech.com/",
    src: BizTech,
    date: "May 2024 \n- Present",
    description:
      "Enabled 4,070+ connections for 270 attendees at flagship conference with NFC cards and an internal networking platform using serverless architecture and DynamoDB. Engaged 200+ concurrent audience and judges with real-time reactions and scoring (< 100 ms response time) using a WebSocket microservice and AWS API Gateway. Automated feedback distribution for 150+ hackathon attendees and judges using z-score normalization and a NFC workflow."
  },
  {
    name: "Software Engineer Intern -- Backend Decision Team",
    organization: "DataVisor",
    link: "https://www.datavisor.com/",
    date: "Jan 2025 - Apr 2025",
    description:
      "Led a business intelligence enhancement project used by 5+ clients with 1M+ users, securing dashboard embeddings by parsing tree-structured Metabase data and custom client configurations. Resolved recurring P1 issue requiring 100+ hours across 10+ infra team members by synchronizing ClickHouse table configs with post-deployment jobs across 12 environments. Eliminated 100% of manual time spent by 300+ fraud investigators templating fraud case notes by building a templating service with Liquibase-based rollback support."
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
