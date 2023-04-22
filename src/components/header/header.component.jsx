import React from "react"
import RegisteredCourses from "../registered-course/registered-courses.component"

import SearchBox from "../search-box/search-box.component"
import Logo from "../../icons/Logo.svg"
import BurgerMenu from "../../icons/BurgerMenu.svg"

import "./header.styles.css"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../../store/redux"
import { Link } from "react-router-dom"

import { signOutUser } from "../../utils/firebase/firebase.utils"

function Header(){    
    const dispatch = useDispatch();

    return(
        <header className="row justify-between">
            <div className="row">
                <img id="burger" src={BurgerMenu} alt="BurgerMenu" onClick={() => dispatch(toggleMenu())} /> 
                <Link to="/">
                    <img id="logo" src={Logo} alt="Logo" />
                </Link>
            </div>
            <SearchBox placeholder="Recherche un cours ..."/>
            <div onClick={signOutUser}>Deconnecter</div>
            <RegisteredCourses />
        </header>
    )
}

export default Header