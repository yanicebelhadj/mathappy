import React, {useContext} from 'react'
import {Outlet, Navigate} from "react-router-dom"
// import { Outlet } from "react-router-dom";

import {UserContext} from "../../context/userContext"

import Header from "../header/header.component";
import LateralNavbar from "../lateral-navbar/lateral-navbar.component";

import "./navigation.styles.css";

function Navigation() {
  const {currentUser} = useContext(UserContext)
  console.log("PRIVATE", currentUser);

  if(!currentUser) {
    return <Navigate to="/math" />
  }
  
  return (
    <div className="Navigation">
        <Header />
        <LateralNavbar />
        <Outlet />
    </div>
  );
}

export default Navigation;