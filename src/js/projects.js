const projects = [
    {
      name: 'Django Api',
      imageSrc: './images/djangoblog.png',
      desc: `A personal website API featuring blog and article capabilities through a user interface provided in the form of an admin site. 
      Made using Django framework in Python 3, sites made with html and stylized using bootstrap. Initialization requires a virtual environment setup, installation of Django, and the creation of a superuser.`,
      link: 'https://github.com/kevinxiao27/Django-Blog-API',
    },
    {
      name: 'Manga Update Checker',
      imageSrc: './images/manga-scrapper-example.png',
      desc: 'Uses selenium and python to check for manga updates. Currently functions as a standalone python file. Future plans to create UI and desktop application to present chapters',
      link: 'https://github.com/kevinxiao27/Manga-Update-Checker',
    },
    {
      name: 'Python Numbers',
      imageSrc: './images/finalproject.png',
      desc: `School final project made with python,
       describes various numbers in relation to each other: GCF, LCM. prime factorization etc. Uses sieve of erasthothenes to generate primes.`,
      link: 'https://github.com/kevinxiao27/Python-Numbers',
    },
  ];
  
  const projectsHTML = projects
    .map((project, index) => {
      // Order content right when index is odd
      const contentOrderClassName = index % 2 === 1 ? 'order-md-last offset-md-5' : 'order-md-first';
      const imgOrderClassName = index % 2 === 0 ? 'order-md-last offset-md-6 text-end' : 'order-md-first';
      const projectBorder = index % 2 == 0 ? 'project-border-right' : 'project-border-left';
      return `
      <div class="container">
        <div class="row position-relative">
          <div class="content-container col-12 col-md-7 ${contentOrderClassName}">
            <div class="project-content ${projectBorder}">
                <h3 class="project-title">
                ${project.name}
                </h3>
                <p class="project-body disabled">
                ${project.desc}
                </p>
                <div>
                <a href="${project.link}" class="btn btn-primary project-button-link" role="button" target="_blank">
                  <img class="img-fluid" src="./images/github-icon.svg"></img>
                </a>
                </div>
            </div>
          </div>
          <div class="col-12 col-md-6 position-md-absolute ${imgOrderClassName}">
            <img class="img-fluid image-height float-right" src="${project.imageSrc}" alt="${project.desc}">
          </div>
        </div>
      </div>
    `;
    })
    .join('');
  
  document.getElementById('projects').innerHTML = projectsHTML;