import { Outlet } from 'react-router';
import { Navbar } from '../../features/navbar/Navbar';
import { Footer } from '../../features/footer/Footer';

export const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
