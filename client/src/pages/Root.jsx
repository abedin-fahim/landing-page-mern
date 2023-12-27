import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <nav>
        <h4>Navigation</h4>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
