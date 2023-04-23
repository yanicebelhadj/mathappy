import React from "react"
import RegisteredCourses from "../registered-course/registered-courses.component"

import SearchBox from "../search-box/search-box.component"
import Logo from "../../icons/Logo.svg"
import BurgerMenu from "../../icons/BurgerMenu.svg"

import "./header.styles.css"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../../store/redux"
import { Link } from "react-router-dom"

import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import {auth} from "../../firebase-config"

// import { signOutUser } from "../../utils/firebase/firebase.utils"

function Header(){   

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const logOut = async () => {
        try {
          await signOut(auth)
          navigate("/math")
        } catch {
          alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
        }
      }

    return(
        <header className="row justify-between">
            <div className="row">
                <img id="burger" src={BurgerMenu} alt="BurgerMenu" onClick={() => dispatch(toggleMenu())} /> 
                <Link to="/">
                    <img id="logo" src={Logo} alt="Logo" />
                </Link>
            </div>
            <SearchBox placeholder="Recherche un cours ..."/>
            <button onClick={logOut}>Deconnecter</button>
            <RegisteredCourses />
        </header>
    )
}

export default Header