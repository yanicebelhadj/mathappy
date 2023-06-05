import React from "react"
import RegisteredCourses from "../registered-course/registered-courses.component"

// import SearchBox from "../search-box/search-box.component"
import Logo from "../../icons/Logo.svg"
import BurgerMenu from "../../icons/BurgerMenu.svg"
import logout from "../../icons/logout.svg"
import avatar from "../../media/ninjaH.svg"

import "./header.styles.css"
import { useDispatch } from "react-redux" //Redux
import { toggleMenu } from "../../store/redux"  //Redux
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
              {/* <img id="burger" src={BurgerMenu} alt="BurgerMenu" onClick={() => dispatch(toggleMenu())} /> */} {/*Redux */}
              <Link to="/">
                  <img id="logo" src={Logo} alt="Logo" />
              </Link>
            </div>
            {/* <SearchBox placeholder="Recherche un cours ..."/> */}

            <div className="header-right-part">
              <RegisteredCourses />
              <div className="user-information">
                <img className="avatar" src={avatar} alt="user" />
                <p className="p-s-semi-bold">Yanice Belhadj</p>
                <div onClick={logOut}>
                  <img className="logout" src={logout} alt="logout" />
                </div>
              </div>
            </div>
        </header>
    )
}

export default Header