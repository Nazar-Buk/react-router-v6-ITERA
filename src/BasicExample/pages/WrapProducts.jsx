import React from "react";
import { Outlet, NavLink, useNavigation } from "react-router-dom";

const WrapProducts = () => {
  const { state } = useNavigation();

  return (
    <>
      <div>
        <h1>Shop</h1>
        {state === "loading" ? "I am loading. Pls, wait" : null}
        <hr />
        Outlet
        <Outlet></Outlet>
      </div>
      <footer>
        <hr />
        Footer
        <NavLink to="/">Go Home</NavLink>
      </footer>
    </>
  );
};

export default WrapProducts;
