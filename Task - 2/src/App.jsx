import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
};

export default App;
