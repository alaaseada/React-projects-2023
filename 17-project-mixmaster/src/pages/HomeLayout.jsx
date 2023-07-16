import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const value = 'I am a value in outlet context';
  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading'></div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
      <Footer />
    </>
  );
};

export default HomeLayout;
