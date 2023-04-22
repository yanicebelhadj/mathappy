import { Link } from "react-router-dom"
import { useState } from "react"
import { signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import Inscription from "../../media/Inscription.png"
import sixieme from "../../media/sixieme.png"
import cinquieme from "../../media/cinquieme.png"
import quatrieme from "../../media/quatrieme.png"
import troisieme from "../../media/troisieme.png"
import lastStep from "../../media/lastStep.png"

import google from "../../icons/google.png"
import facebook from "../../icons/facebook_blue.png"
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

    console.log(formFields)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            
            await createUserDocumentFromAuth(user, { name, surname, phoneNumber, level });

            setFormFields(defaultFormFields);
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Email already in use');
            }else{
                console.error(error);
            }
        }
    }

    return(
        <div className="sign-up-form">

            {
                phase === 0 &&
                <section id="phase-0">
                    <img src={Inscription} alt="inscription" />
                    <div className="text-area">
                        <h1>Crée un compte pour apprendre</h1>
                        <div className="social-login">
                            <button className="p-m-regular facebook"><img src={facebook} alt="facebook"/>Joindre avec Facebook</button>
                            <button onClick={signInWithGoogleRedirect} className="p-m-regular google"><img src={google} alt="google"/>Joindre avec Google</button>
                        </div>
                        <div className="separator">
                            <div className="line"></div>
                            <p className="p-m-regular">OU</p>
                            <div className="line"></div>
                        </div>
                        <input required type="email" placeholder="Adresse e-mail" className="p-m-regular" onChange={handleChange} name="email" value={email} />
                        <button className="p-s-bold form-button" onClick={() => setPhase(1)}>S'inscrire</button>
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
                    <form onSubmit={handleSubmit}>
                        {
                            subPhase === 0 &&
                            <section id="phase-1-1">
                                <div className="information">
                                    <label>Prénom</label>
                                    <input required type="text" placeholder="Mireille" className="p-m-regular" onChange={handleChange} name="name" value={name} />
                                </div>
                                <div className="information">
                                    <label>Nom</label>
                                    <input required type="text" placeholder="Dupont" className="p-m-regular" onChange={handleChange} name="surname" value={surname} />
                                </div>
                                <div className="information">
                                    <label>Mot de passe</label>
                                    <input required type="password" placeholder="Mot de passe" className="p-m-regular" onChange={handleChange} name="password" value={password} />
                                </div>
                                <div className="information">
                                    <label>Confirmation mot de passe</label>
                                    <input required type="password" placeholder="Mot de passe" className="p-m-regular" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                                </div>
                                <div className="information">
                                    <label>Téléphone</label>
                                    <input required type="phone" placeholder="06 00 00 00 00" className="p-m-regular" onChange={handleChange} name="phoneNumber" value={phoneNumber} />
                                </div>

                                <div className="form-button button-under-input" onClick={()=>setSubPhase(1)}><p className="p-s-bold">Continuer</p></div>
                            </section>
                        }
                        {                            
                            subPhase === 1 &&
                            <section id="phase-1-2">
                                <div className="level">
                                    <img src={sixieme} alt="sixieme"/>
                                    <p className="p-m-regular">6ème</p>
                                </div>
                                <div className="level">
                                    <img src={cinquieme} alt="cinquieme"/>
                                    <p className="p-m-regular">5ème</p>
                                </div>
                                <div className="level">
                                    <img src={quatrieme} alt="quatrieme"/>
                                    <p className="p-m-regular">4ème</p>
                                </div>
                                <div className="level">
                                    <img src={troisieme} alt="troisieme"/>
                                    <p className="p-m-regular">3ème</p>
                                </div>
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