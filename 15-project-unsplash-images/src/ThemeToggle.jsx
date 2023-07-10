import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useGlobalContext } from './Context';

function ThemeToggle() {
  const { isDarkTheme, toggleTheme } = useGlobalContext();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className='toggle-icon' />
        ) : (
          <BsFillMoonFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
}

export default ThemeToggle;
