import djangoapi from "../assets/djangoblog.png";
import manga from "../assets/manga-scrapper-example.png";
import pynums from "../assets/finalproject.png";

export const projects = [
  {
    name: "Django Api",
    src: djangoapi,
    desc: `A personal website API featuring blog and article capabilities through a user interface provided in the form of an admin site. 
      Made using Django framework in Python 3, sites made with html and stylized using bootstrap. Initialization requires a virtual environment setup, installation of Django, and the creation of a superuser.`,
    link: "https://github.com/kevinxiao27/Django-Blog-API",
  },
  {
    name: "Manga Update Checker",
    src: manga,
    desc: "Uses selenium and python to check for manga updates. Currently functions as a standalone python file. Future plans to create UI and desktop application to present chapters",
    link: "https://github.com/kevinxiao27/Manga-Update-Checker",
  },
  {
    name: "Python Numbers",
    src: pynums,
    desc: `School final project made with python,
       describes various numbers in relation to each other: GCF, LCM. prime factorization etc. Uses sieve of erasthothenes to generate primes.`,
    link: "https://github.com/kevinxiao27/Python-Numbers",
  },
];
