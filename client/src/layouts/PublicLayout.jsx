// PublicLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
const PublicLayout = () => {
  return (
    <div>
      <Header/ >
      <Outlet />
    </div>
  );
};

export default PublicLayout;
