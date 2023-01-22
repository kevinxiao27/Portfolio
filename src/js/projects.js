const projects = [
    {
      name: 'project1',
      imageSrc: './images/tree-frog.jpg',
      desc: 'project description',
      link: 'https://github.com/',
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
                <div>
                ${project.name}
                </div>
                <div>
                ${project.desc}
                </div>
                <div>
                <a href="${project.link}" class="btn btn-primary" role="button" target="_blank">
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