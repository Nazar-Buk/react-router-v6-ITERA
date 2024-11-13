import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1>Home page</h1>
      </div>
      {/* перенаправить на іншу сторінку */}
      <NavLink to="/movies">To Movies</NavLink>
      <main>
        <hr />
        Outlet
        {/*Outlet вказує де будуть розміщуватися наші children роути */}
        <Outlet></Outlet>
        <hr />
      </main>
      <footer>
        {" "}
        Footer <br />
        {/* цей  footer буде відображатися на всіх дочірніх сторінках Home  */}
        <NavLink to="/user">User</NavLink>
        <br />
        <NavLink to="/">Home</NavLink>
      </footer>
    </>
  );
};

export default Home;
