import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./LateralNavbar.css";
import Fiche from "../../icons/fiche-line-style";
import Cours from "../../icons/cours-line-style";
import Exercice from "../../icons/exercice-line-style";
import Methode from "../../icons/methode-line-style";

import TableauDeBord from "../../icons/TableauDeBord.svg";
import TousLesCours from "../../icons/TousLesCours.svg";
import MesCours from "../../icons/MesCours.svg";
import MesStats from "../../icons/MesStats.svg";
import { useSelector } from "react-redux";

function LateralNavbar() {

  const location = useLocation();
  const namePage = location.pathname.split("/")

  const menu = useSelector(state=> state.menu.open)

  return (
    <div className={`LateralNavbar 
      ${namePage[1] === "LandingPage" ? "non-active" :""}`
    }>
      
      <nav>
        <ul className={`menu 
          ${
            namePage[2] !== "Le-cours" && 
            namePage[2] !== "MethodMath" && 
            namePage[2] !== "Exercices" && 
            namePage[2] !== "La-fiche" 
            ? 
            "active" : "non-active"
          }`
        }>
          <li>
            <Link to="/">
              <img src = {TableauDeBord} alt="" />
              <p className={`p-s-medium ${menu ? "menuInitialState" : "menuClickedState"} `}>Tableau de bord</p>
            </Link>
          </li>
          <li>
            <Link to="/SearchPage">
              <img src = {TousLesCours} alt="" />
              <p className={`p-s-medium ${menu ? "menuInitialState" : "menuClickedState"} `}>Tous les cours</p>
            </Link>
          </li>
          <li>
            <Link>
              <img src = {MesCours} alt="" />
              <p className={`p-s-medium ${menu ? "menuInitialState" : "menuClickedState"} `}>Mes cours</p>
            </Link>
          </li>
          <li>
            <Link>
              <img src = {MesStats} alt="" />
              <p className={`p-s-medium ${menu ? "menuInitialState" : "menuClickedState"} `}>Mes stats</p>
            </Link>
          </li>
        </ul>
      </nav>

      <ul className={`categories 
        ${
          namePage[2] === "Le-cours" || 
          namePage[2] === "MethodMath" || 
          namePage[2] === "Exercices" || 
          namePage[2] === "La-fiche" 
          ? 
          "active" :"non-active"
        }`
      }>
        <li>
          <Link className="p-l-semi-bold" to={`/Le-cours/${namePage[1]}`}>
            <Cours />
            <p className= {`p-s-medium ${menu ? "menuInitialState" : "menuClickedState"} `}>Cours</p>
          </Link>
        </li>
        <li>
          <Link className="p-l-semi-bold" to={`/${namePage[1]}/MethodMath`}>
            <Methode />
            <p className={`p-s-medium ${menu ? "menuInitialState" : "menuClickedState"} `}>Méthodes</p>
          </Link>
        </li>
        <li>
          <Link className="p-l-semi-bold" to={`/${namePage[1]}/Exercices`}>
            <Exercice />
            <p className={`p-s-medium ${menu ? "menuInitialState" : "menuClickedState"} `}>Exercices</p>
          </Link>
        </li>
        <li>
          <Link className="p-l-semi-bold" to={`/${namePage[1]}/La-fiche`}>
            <Fiche />
            <p className={`p-s-medium ${menu ? "menuInitialState" : "menuClickedState"} `}>Fiche</p>
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default LateralNavbar;
