import Duties from './Duties';

function Tab({ job: { id, title, dates, company, duties } }) {
  return (
    <div className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties} />
    </div>
  );
}

export default Tab;
