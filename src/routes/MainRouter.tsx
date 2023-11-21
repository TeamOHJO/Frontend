import { Outlet, Route, Routes } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <Outlet />
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
