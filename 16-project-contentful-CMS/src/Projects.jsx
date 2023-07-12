import React, { useEffect } from 'react';
import { useState } from 'react';
import { useFetchData } from './fetchData';

function Projects() {
  const { isLoading, projects } = useFetchData();

  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {isLoading ? (
          <h3>Loading.....</h3>
        ) : (
          projects.map((project) => {
            const { id, title, url, img } = project;
            return (
              <a
                key={id}
                href={url}
                target='_blank'
                className='project'
                rel='noreferrer'
              >
                <img className='img' src={img} alt={title} />
                <h5>{title}</h5>
              </a>
            );
          })
        )}
      </div>
    </section>
  );
}

export default Projects;
