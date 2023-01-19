import React from "react"
import { Link, useLocation } from "react-router-dom";
import RegisteredCourses from "../registered-course/registered-courses.component"

import SearchBox from "../search-box/search-box.component"

import "./header.styles.css"


function Header(props){
    
    const location = useLocation();
    const namePage = location.pathname.split("/");

    return(
        <header className={`${namePage[1] === "" ? "active" :""} ${props.visible ? "visible-forced" : ""} ${namePage[2] === "Le-cours" || namePage[2] === "MethodMath" || namePage[2] === "Exercices" || namePage[2] === "La-fiche" ? "little-header" : ""}`} >
            <p className={`message-homePage highlighth1 p-l-bold ${namePage[1] === "" ? "active" :""}`}>Salut Abdourrahmane</p>
            <SearchBox placeholder="Recherche un cours ..."/>
            <RegisteredCourses />
        </header>
    )
}

export default Header