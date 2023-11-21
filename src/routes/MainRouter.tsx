import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from '../components/Layout/Footer';

function Dashboard() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<></>} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
