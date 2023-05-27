import { useEffect, useState } from 'react';
import SideMenu from './SideMenu';
import Tab from './Tab';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  const getJobs = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        return;
      }
      const data = await response.json();
      data.sort((a, b) => a.order - b.order);
      setJobs(data);
      setCurrentId(data[0]['id']);
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getJobs();
  }, []);

  const changeCurrentID = (id) => {
    setCurrentId(id);
  };

  const companies = jobs.map((job) => {
    return { id: job.id, name: job.company };
  });

  const currentJob = jobs.find((job) => job.id === currentId);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }
  if (isError) {
    return <div className='alert alert-danger'>Something wrong happened.</div>;
  }
  return (
    <section className='jobs-center'>
      <SideMenu
        companies={companies}
        activeId={currentId}
        changeSelection={changeCurrentID}
      />
      {jobs.length && <Tab job={currentJob} />}
    </section>
  );
}

export default App;
