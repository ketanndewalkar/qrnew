import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero1 from "../pages/Hero1";
import Hero2 from "../pages/Hero2";
import Footer from "./Footer";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Outlet, useLocation } from "react-router-dom";
import Pop from "./Pop";
import { AuthContext, useAuth } from "../context/Context";

const AppLayout = () => {
  const { status, setpopshow ,popshow} = useAuth();
  console.log(status);
  return (
    <>
      <div className="w-dvw h-dvh">
        {popshow ? <><Pop status={status} handlepop={setpopshow}/></>:<></>}
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  );
};

export default AppLayout;
