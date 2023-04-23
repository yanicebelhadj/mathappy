import { Link } from "react-router-dom"

import React, { useContext, useRef, useState, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

import { createUserDocumentFromAuth } from "../../firebase-config"

import Inscription from "../../media/Inscription.png"
import sixieme from "../../media/sixieme.png"
import cinquieme from "../../media/cinquieme.png"
import quatrieme from "../../media/quatrieme.png"
import troisieme from "../../media/troisieme.png"
import lastStep from "../../media/lastStep.png"

import arrowLeft from "../../icons/arrowLeft.svg"

import "./SignUp.styles.css"

const defaultFormFields = {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    level: ""
}

const SignUp = () => {
    const [phase, setPhase] = useState(0)
    const [subPhase, setSubPhase] = useState(0)

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, surname, email, password, confirmPassword, phoneNumber, level } = formFields;

    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }


    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     if (password !== confirmPassword) {
    //         alert("passwords don't match");
    //         return;
    //     }

    //     try {
    //         const { user }  = await createAuthUserWithEmailAndPassword(
    //             email,
    //             password
    //         );
    //         await createUserDocumentFromAuth(user, { name, surname, phoneNumber, level })
    //         setFormFields(defaultFormFields);
            

    //     } catch (error) {
    //         if(error.code === 'auth/email-already-in-use') {
    //             alert('Email already in use');
    //         }else{
    //             console.error(error);
    //         }
    //     }
    // }

    /////////////////////////// VALIDATION EMAIL ///////////////////////////

    const { signUp } = useContext(UserContext);

    const navigate = useNavigate();
    
    const [validation, setValidation] = useState("");
  
    const inputs = useRef([])
    const addInputs = el => {
      if(el && !inputs.current.includes(el)){
        inputs.current.push(el)
      }
    }  
    const formRef = useRef();
  
    const handleForm = async (e) => {
      e.preventDefault()
  
      if((password.length || confirmPassword.length) < 6) {
        setValidation("6 characters min")
        return;
      }
      else if(password !== confirmPassword) {
        setValidation("Passwords do not match")
        return;
      }
  
      try {
  
        const { user } = await signUp( email, password )
        await createUserDocumentFromAuth(user, { name, surname, phoneNumber, level })

        setValidation("")
        navigate("/SignIn")
  
      } catch (err) {
  
        if(err.code === "auth/invalid-email") {
          setValidation("Email format invalid")
        }
        
        if(err.code === "auth/email-already-in-use") {
          setValidation("Email already used")
        }
   
      }
  
    }

    /////////////////////////// VALIDATION EMAIL ///////////////////////////

    const validEmail = (email) => {
        if(email.length > 0 && (typeof(email) === "string" && email.includes("@")) ){
            return true
        }
        return false
    }

    const [message, setMessage] = useState(false);

    const [levelValue, setLevelValue] = useState(null);

    useEffect(() => {
        console.log(formFields)
    }, [formFields])
    
    return(
        <div className="sign-up-form">

            {
                phase === 0 &&
                <section id="phase-0">
                    <img src={Inscription} alt="inscription" />
                    <div className="text-area">
                        <h1>Crée un compte pour apprendre</h1>

                        <div className="separator">
                            <div className="line"></div>
                        </div>
                        <input required ref={addInputs} type="email" placeholder="Adresse e-mail" className="p-m-regular" onChange={handleChange} name="email" value={email} />

                        { message && <p>Format mail incorrect</p> }

                        <button className="p-s-bold form-button" onClick={() =>{ validEmail(email) ? setPhase(1) : setMessage(true) }}>S'inscrire</button>
                        
                        <p className="p-m-regular use-conditions">
                            En cliquant sur s’inscrire j’accepte les <Link>conditions d’utilisation</Link> et <Link>politique de confidentialité</Link> de Mathappy
                        </p>
                        <div className="new-user">
                            <p>Utilisateur existant ?</p>
                            <Link to="/SignIn" className="p-m-regular">Se connecter</Link>
                        </div>
                    </div>
                </section>
            }
            {
                phase === 1 &&
                <section id="phase-1">
                    <div className="header-progress-bar">

                        <img src={arrowLeft} alt="arrow left" onClick={() => 
                            subPhase === 0 ? setPhase(0) : setSubPhase(subPhase-1)
                        }/>
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{width:`${((subPhase+1)/3)*100}%`}}></div>
                        </div>
                    </div>
                    <form ref={formRef} onSubmit={handleForm}>
                        {
                            subPhase === 0 &&
                            <section id="phase-1-1">
                                <div className="information">
                                    <label>Prénom</label>
                                    <input required ref={addInputs} type="text" placeholder="Mireille" className="p-m-regular" onChange={handleChange} name="name" value={name} />
                                </div>
                                <div className="information">
                                    <label>Nom</label>
                                    <input required ref={addInputs} type="text" placeholder="Dupont" className="p-m-regular" onChange={handleChange} name="surname" value={surname} />
                                </div>
                                <div className="information">
                                    <label>Mot de passe</label>
                                    <input required ref={addInputs} type="password" placeholder="Mot de passe" className="p-m-regular" onChange={handleChange} name="password" value={password} />
                                </div>
                                <div className="information">
                                    <label>Confirmation mot de passe</label>
                                    <input required ref={addInputs} type="password" placeholder="Mot de passe" className="p-m-regular" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                                </div>
                                <div className="information">
                                    <label>Téléphone</label>
                                    <input required ref={addInputs} type="phone" placeholder="06 00 00 00 00" className="p-m-regular" onChange={handleChange} name="phoneNumber" value={phoneNumber} />
                                </div>

                                <div 
                                    className="form-button button-under-input" 
                                    onClick={()=>{
                                        name && surname && password && confirmPassword && phoneNumber ? setSubPhase(1) : alert("Veuillez remplir tous les champs")
                                    }}
                                ><p className="p-s-bold">Continuer</p></div>
                            </section>
                        }
                        {                            
                            subPhase === 1 &&
                            <section id="phase-1-2">
                                <div 
                                    className={`level ${levelValue === 6 ? "active" : ""}`} 
                                    onClick={() =>{
                                        setLevelValue(6);
                                        setFormFields({ ...formFields, level: 6 }); 
                                    }}
                                >
                                    <img src={sixieme} alt="sixieme"/>
                                    <p className="p-m-regular">6ème</p>
                                </div>
                                <div 
                                    className={`level ${levelValue === 5 ? "active" : ""}`} 
                                    onClick={() => {
                                        setLevelValue(5);
                                        setFormFields({ ...formFields, level: 5 })
                                    }}
                                >
                                    <img src={cinquieme} alt="cinquieme"/>
                                    <p className="p-m-regular">5ème</p>
                                </div>
                                <div 
                                    className={`level ${levelValue === 4 ? "active" : ""}`} 
                                    onClick={() => {setLevelValue(4); setFormFields({ ...formFields, level: 4 })
                                    }}
                                >
                                    <img src={quatrieme} alt="quatrieme"/>
                                    <p className="p-m-regular">4ème</p>
                                </div>
                                <div 
                                    className = {`level ${levelValue === 3 ? "active" : ""}`} 
                                    onClick = {() => { setLevelValue(3); setFormFields({ ...formFields, level: 3 })}}>
                                    <img src={troisieme} alt="troisieme"/>
                                    <p className="p-m-regular">3ème</p>
                                </div>
                                <p className="p-m-regular">{validation}</p>
                                <div className="form-button button-under-input" onClick={()=>setSubPhase(2)}><p className="p-s-bold">Continuer</p></div>
                            </section>
                        }
                        {
                            subPhase === 2 &&
                            <section id="phase-1-3">
                                <img src={lastStep} alt="last step" />
                                <div className="text-area">
                                    <h1 className="h1-m highlighth1">Félicitation tu es sur la bonne voie !</h1>
                                    <div className="quote">
                                        <p className="p-m-regular">“La <span className="bold">connaissance</span> s’acquiert par l’<span className="bold">expérience</span>, tout le reste n’est que de l’information.”</p>
                                        <p className="p-s-regular">Albert Einstein</p>
                                    </div>
                                    <button type="submit" className="form-button"><p className="p-s-bold">Continuer</p></button>
                                </div>
                            </section>
                        }
                    </form>
                </section>
            }
        </div>
    )
}

export default SignUp;