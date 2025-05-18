import React from 'react'
import { Navigate, Outlet } from 'react-router';
import SideBar from "../partials/SideBar";
import NavBar from "../partials/NavBar";
import {useState } from 'react'


const DashboardLayout = () => {
  const token = localStorage.getItem("token");

  if(!token) return <Navigate to={"/login"} />;
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleNavopen = () =>{
    setIsNavOpen(currentState => !currentState);
  }
  return (
    <>
    <Navbar isNavOpen={isNavOpen} navOpenHandler ={handleNavopen}/>
    <div id="sideNavRef" className={isNavOpen ? "side-nav-oprn":"side-nav-close"}>
    <SideBar/>
    </div>
    <div id="contentRef" className={isNavOpen ? "content": "content-expand"}>
      <Outlet/>
    </div>
    </>
  )
}

export default DashboardLayout