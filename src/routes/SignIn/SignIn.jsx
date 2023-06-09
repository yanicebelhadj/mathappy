import { Link } from "react-router-dom"
// import { signInWithGoogleRedirect, signInAuthUserWithEmailAndPassword, auth } from "../../utils/firebase/firebase.utils"
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useEffect, useState } from "react"

import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";

import { useNavigate } from "react-router-dom";

import satellite from "../../media/modal.png"

import "./SignIn.styles.css"

const SignIn = () => {
    const { signIn } = useContext(UserContext);

    const navigate = useNavigate();
  
    const [validation, setValidation] = useState("");
  
    const inputs = useRef([]);
    const addInputs = (el) => {
      if (el && !inputs.current.includes(el)) {
        inputs.current.push(el);
      }
    };
    const formRef = useRef();
  
    const handleForm = async (e) => {
      e.preventDefault();

      try {
        await signIn(
          inputs.current[0].value,
          inputs.current[1].value
        );

        setValidation("");

        navigate("/");
      } catch {
        setValidation("Wopsy, email and/or password incorrect")
      }
    };

    const toggleDisplay = () => {
      const password = document.querySelector(".password-input");
      const eye = document.querySelector(".eye");
      if (password.type === "password") {
        password.type = "text";
        eye.innerHTML = "Masquer";

      } else {
        password.type = "password";
        eye.innerHTML = "Afficher";
      }
    }

    return(
        <div className="sign-in-form">
            <img src={satellite} alt="logo" />
            <h1>Connexion</h1>
            <form ref={formRef} onSubmit={handleForm}>
                <input required type="email" placeholder="Adresse e-mail" className="p-m-regular" ref={addInputs} name="email" />
                <div className="password-container">
                  <input required type="password" placeholder="Mot de passe" className="p-m-regular password-input" ref={addInputs} name="password" />
                  <div>
                    <div onClick={() => {toggleDisplay()}} className="displayPassword">
                      <p className="eye p-s-medium">Afficher</p>
                    </div>
                  </div>                  
                </div>
                <p className="p-m-regular">{validation}</p>
                <button type="submit" className="connexion-button">
                    <p className="p-s-bold">Se connecter</p> 
                </button>
            </form>
            <Link to="/" className="p-m-regular">Mot de passe oublié</Link>
            <div className="new-user">
                <p>Nouvel utilisateur ?</p>
                <Link to="/SignUp" className="p-m-regular">S’inscrire</Link>
            </div>
        </div>
    )
}

export default SignIn;