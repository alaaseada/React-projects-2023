import React, { useEffect } from 'react';
import { projects } from './data';
import { createClient } from 'contentful';

function Projects() {
  const client = createClient({
    environment: 'master',
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENT_DELIVERY_ACCESS_TOKEN,
  });

  const getData = async () => {
    const response = await client.getEntries({ contentType: 'Projects' });
    console.log(response.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          return (
            <a
              key={project.id}
              href={project.url}
              target='_blank'
              className='project'
              rel='noreferrer'
            >
              <img className='img' src={project.image} alt={project.title} />
              <h5>{project.title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
