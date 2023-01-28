const projects = [
    {
      name: 'Django Api',
      imageSrc: './images/djangoblog.png',
      desc: `A personal website API featuring blog and article capabilities through a user interface provided in the form of an admin site. 
      Made using Django framework in Python 3, sites made with html and stylized using bootstrap. Initialization requires a virtual environment setup, installation of Django, and creation of a superuser in the terminal`,
      link: 'https://github.com/kevinxiao27/Django-Blog-API',
    },
    {
      name: 'project2',
      imageSrc: './images/tree-frog.jpg',
      desc: 'project description',
      link: 'https://github.com/',
    },
    {
      name: 'project3',
      imageSrc: './images/tree-frog.jpg',
      desc: 'project description',
      link: 'https://github.com/',
    },
  ];
  
  const projectsHTML = projects
    .map((project, index) => {
      // Order content right when index is odd
      const contentOrderClassName = index % 2 === 1 ? 'order-last offset-md-5' : 'order-first';
      const imgOrderClassName = index % 2 === 0 ? 'order-last offset-md-6 text-end' : 'order-first';
      return `
      <div class="container">
        <div class="row position-relative">
          <div class="content-container col-12 col-md-7 ${contentOrderClassName}">
            <div class="project-content">
                <h3 class="project-title">
                ${project.name}
                </h3>
                <p class="project-body disabled">
                ${project.desc}
                </p>
                <div>
                <a href="${project.link}" class="btn btn-primary project-button-link" role="button" target="_blank">
                    Toggle link
                </a>
                </div>
            </div>
          </div>
          <div class="project-image col-12 col-md-6 position-md-absolute ${imgOrderClassName}">
            <img class="img-fluid image-height float-right" src="${project.imageSrc}" alt="${project.desc}">
          </div>
        </div>
      </div>
    `;
    })
    .join('');
  
  document.getElementById('projects').innerHTML = projectsHTML;