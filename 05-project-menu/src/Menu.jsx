import { useState } from 'react';
import data from './data';
import Nav from './Nav';
import MenuItem from './MenuItem';

function Menu() {
  const [menu, setMenu] = useState(data);
  const menu_categories = [
    'All',
    ...new Set(data.map((item) => item.category)),
  ];

  const filterMenu = (category) => {
    const filtered_menu =
      category === 'All'
        ? data
        : data.filter((item) => item.category === category);
    setMenu(filtered_menu);
  };

  return (
    <section className='menu'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='title-underline'></div>
      </div>
      <Nav categories={menu_categories} onButtonClick={filterMenu} />
      <div className='section-center'>
        {menu.map((item) => {
          return <MenuItem key={item.id} menuItem={item} />;
        })}
      </div>
    </section>
  );
}

export default Menu;
