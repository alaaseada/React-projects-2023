import React from 'react';

function SideMenu({ companies, changeSelection, activeId }) {
  return (
    <div className='btn-container'>
      {companies.map((company) => (
        <button
          key={`company-${company.id}`}
          className={`job-btn ${company.id === activeId ? 'active-btn' : ''} `}
          onClick={() => changeSelection(company.id)}
        >
          {company.name}
        </button>
      ))}
    </div>
  );
}

export default SideMenu;
