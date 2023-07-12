import React from 'react';
import hero from './assets/hero.svg';

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            reprehenderit mollitia error laborum ratione officia illo porro
            sequi, quo rerum molestias eum. Ipsa quos sunt eaque libero
            distinctio hic corporis?
          </p>
        </div>
        <div className='img-container'>
          <img src={hero} alt='Woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
