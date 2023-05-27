import { useState, useEffect } from 'react';
import { shortList, longList, list } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { GrNext, GrPrevious } from 'react-icons/gr';

function Carousel() {
  const [peopleList, setPeopleList] = useState(list);
  const [currentItem, setCurrentItem] = useState(0);

  const goToPrev = () => {
    setCurrentItem((prev) => {
      let new_index = prev === 0 ? peopleList.length - 1 : prev - 1;
      return new_index;
    });
  };

  const goToNext = () => {
    setCurrentItem((prev) => {
      let new_index = prev === peopleList.length - 1 ? 0 : prev + 1;
      return new_index;
    });
  };

  useEffect(() => {
    const slider_interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => {
      clearInterval(slider_interval);
    };
  }, [currentItem]);
  const slider = (
    <>
      {peopleList.map((person, index) => {
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${(index - currentItem) * 100}%)`,
              opacity: currentItem === index ? 1 : 0,
              visibility: currentItem === index ? 'visible' : 'hidden',
            }}
            key={person.id}
          >
            <img src={person.image} alt={person.name} className='person-img' />
            <h5 className='name'>{person.name}</h5>
            <p className='title'>{person.title}</p>
            <p className='text'>{person.quote}</p>
            <div className='icon'>
              <FaQuoteRight />
            </div>
          </article>
        );
      })}
    </>
  );
  return (
    <section className='slider-container'>
      {slider}
      <button className='prev' onClick={goToPrev}>
        <GrPrevious />
      </button>
      <button className='next' onClick={goToNext}>
        <GrNext />
      </button>
    </section>
  );
}

export default Carousel;
