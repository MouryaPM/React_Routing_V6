import { Route, Routes, Link, Outlet } from "react-router-dom";
const Welcome = () => {
  return (
    <section>
      <h1>Welcome page</h1>
      <Link to="guest-user">Guest User</Link>
      <Outlet />
      {/* <Routes>
      </Routes> */}
    </section>
  );
};

export default Welcome;
