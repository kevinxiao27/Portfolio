import djangoapi from "../assets/djangoblog.png";
import manga from "../assets/manga-scrapper-example.png";
import pynums from "../assets/finalproject.png";
import Happy2 from "../assets/Happy2.png";

export const projects = [
  {
    id: 1,
    name: "Cache You Later - nwHacks 2024",
    src: Happy2,
    desc: `nwHacks submission for community and connection based 
    on real life and virtual geocaching integration. Utilizing a noSQL database 
    through a RESTFUL API with user authentication and JWT Token, I seamlessly integrated the backend and 
    frontend using Next.js. Employing React props and hooks, I efficiently handled over 20 endpoints. Additionally, 
    I meticulously mapped and parsed data to fulfill the requirements of a web application, strategically leveraging Next.js for client/server side rendering.`,
    link: "https://github.com/kevinxiao27/movie-ticket-booking",
  },
  {
    id: 2,
    name: "Movie-Ticket Booking Backend",
    src: "",
    desc: `Defined a backend that serves, modifies and creates movies, users, and ticket-bookings.
    Created REST API to enable functionality designed using Model-View-Controller Architecture.
    Used MongoDB for model flexibility and asynchronous database calls.`,
    link: "https://github.com/kevinxiao27/movie-ticket-booking",
  },
  {
    id: 3,
    name: "Django Api",
    src: djangoapi,
    desc: `A personal website API featuring blog and article capabilities through a user interface provided in the form of an admin site. 
      Made using Django framework in Python 3, sites made with html and stylized using bootstrap. Initialization requires a virtual environment setup, installation of Django, and the creation of a superuser.`,
    link: "https://github.com/kevinxiao27/Django-Blog-API",
  },
  {
    id: 4,
    name: "Manga Update Checker",
    src: manga,
    desc: "Uses selenium and python to check for manga updates. Currently functions as a standalone python file. Future plans to create UI and desktop application to present chapters",
    link: "https://github.com/kevinxiao27/Manga-Update-Checker",
  },
  {
    id: 5,
    name: "Python Numbers",
    src: pynums,
    desc: `School final project made with python,
       describes various numbers in relation to each other: GCF, LCM. prime factorization etc. Uses sieve of erasthothenes to generate primes.`,
    link: "https://github.com/kevinxiao27/Python-Numbers",
  },
];
