import { Outlet, Route, Routes } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function Dashboard() {
  return (
    <>
      <Header />
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
