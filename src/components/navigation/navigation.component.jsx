import { Outlet } from "react-router-dom";
import Header from "../header/header.component";
import LateralNavbar from "../lateral-navbar/lateral-navbar.component";

import "./navigation.styles.css";

function Navigation() {
  
  return (
    <div className="Navigation">
        <Header />
        <LateralNavbar />
        <Outlet />
    </div>
  );
}

export default Navigation;