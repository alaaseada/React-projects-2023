import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from '../components';

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
