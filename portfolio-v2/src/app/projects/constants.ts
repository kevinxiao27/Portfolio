import SwiftGift from "@/assets/SwiftGift.jpg";
import UXLive from "@/assets/UX-Live.png";
import Happy2 from "@/assets/Happy2.png";
import GeoPlots from "@/assets/GeoPlots.png";
import { Project } from "@/components/types";

export const projects: Project[] = [
  {
    name: "UXOpen Live Voting Platform",
    date: "May 2024",
    src: UXLive,
    desc: `Architected and led development of core WebSocket microservice for an end-to-end live voting platform, 
    supporting 100+ concurrent users; documented system design and database schemas for seamless handoff. 
    Reduced DynamoDB read costs by 40% by transitioning from relational scans to a single-table query schema 
    with Global Secondary Indexes.`,
    link: "https://github.com/ubc-biztech/serverless-biztechapp"
  },
  {
    name: "GeoPlots",
    date: "July 2024",
    src: GeoPlots,
    desc: `Developed a geo-data focused journaling web app with rapid data visualization, utilizing Leaflet 
    and Next.js for optimized data fetching. Enhanced identity and authorization with Firebase SDK for 
    route-guarding and secured API calls. Decreased location input time by 70% using MapTiler’s reverse geocoding API, 
    mapping coordinates to addresses quickly.`,
    link: "https://github.com/kevinxiao27/geoplot",
    prod: "https://geoplot-journal.vercel.app/"
  },
  {
    name: "SwiftGift | ProduHacks",
    date: "March 2024",
    src: SwiftGift,
    desc: `Delivered personalized gift recommendations by structuring OpenAI’s GPT-3.5 output based on user preferences. 
    Refined code coupling by 40% through implementing a custom middleware to sanitize and validate user inputs. 
    Diminished database read and write times by 30% by integrating MongoDB indexing to avoid large table scans 
    and inefficient queries.`,
    link: "https://github.com/kevinxiao27/swiftgift"
  },
  {
    name: "CacheYouLater - nwHacks 2024",
    date: "January 2024",
    src: Happy2,
    desc: `nwHacks submission for community and connection based 
    on real life and virtual geocaching integration. Utilizing a noSQL database 
    through a RESTFUL API with user authentication and JWT Token, I seamlessly integrated the backend and 
    frontend using Next.js. Employing React props and hooks, I efficiently handled over 20 endpoints. Additionally, 
    I meticulously mapped and parsed data to fulfill the requirements of a web application, strategically leveraging Next.js for client/server side rendering.`,
    link: "https://github.com/kevinxiao27/movie-ticket-booking"
  }
];
