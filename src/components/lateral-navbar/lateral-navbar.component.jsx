import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../media/Logo.js";
import LogoLarge from "../../media/Logo-large.js";

import "./LateralNavbar.css";
import Fiche from "../../icons/fiche-line-style";
import Cours from "../../icons/cours-line-style";
import Exercice from "../../icons/exercice-line-style";
import Methode from "../../icons/methode-line-style";
import Dashboard from "../../icons/Dashboard.js";
import SearchPage from "../../icons/SearchPage.js";
import MyCourses from "../../icons/MyCourses.js";
import Stats from "../../icons/Stats.js";

function LateralNavbar() {

  const location = useLocation();
  const namePage = location.pathname.split("/")

  console.log(namePage)

  return (
    <div className={`LateralNavbar ${namePage[2] === "Le-cours" || namePage[2] === "MethodMath" || namePage[2] === "Exercices" || namePage[2] === "La-fiche"  ? "large-lateral-navbar" :""}`}>
      <Link to="/" className={`logo ${namePage[2] === "Le-cours" || namePage[2] === "MethodMath" || namePage[2] === "Exercices" || namePage[2] === "La-fiche" ? "non-active" :"active"}`}>
        <Logo />
      </Link>

      <Link to="/" className={`logo-large ${namePage[2] === "Le-cours" || namePage[2] === "MethodMath" || namePage[2] === "Exercices" || namePage[2] === "La-fiche" ? "active" :"non-active"}`}>
        <LogoLarge />
      </Link>

      <ul className={`categories ${namePage[2] === "Le-cours" || namePage[2] === "MethodMath" || namePage[2] === "Exercices" || namePage[2] === "La-fiche" ? "active" :"non-active"}`}>
        <li>
          <Link className="p-l-semi-bold" to={`/${namePage[1]}/Le-cours`}><Cours />Cours</Link>
        </li>
        <li>
          <Link className="p-l-semi-bold" to={`/${namePage[1]}/MethodMath`}><Methode />Méthodes</Link>
        </li>
        <li>
          <Link className="p-l-semi-bold" to={`/${namePage[1]}/Exercices`}><Exercice />Exercices</Link>
        </li>
        <li>
          <Link className="p-l-semi-bold" to={`/${namePage[1]}/La-fiche`}><Fiche />Fiche</Link>
        </li>
      </ul>

      <nav>
        <ul className={`menu ${namePage[2] !== "Le-cours" && namePage[2] !== "MethodMath" && namePage[2] !== "Exercices" && namePage[2] !== "La-fiche" ? "active" :"non-active"}`}>
          <li><Link to="/"><Dashboard /><p className="p-s-regular">Tableau de bord</p></Link></li>
          <li><Link to="/SearchPage"><SearchPage /><p className="p-s-regular">Tous les cours</p></Link></li>
          <li><Link><MyCourses /><p className="p-s-regular">Mes cours</p></Link></li>
          <li><Link><Stats /><p className="p-s-regular">Mes stats</p></Link></li>
        </ul>
      </nav>

    </div>
  );
}

export default LateralNavbar;
