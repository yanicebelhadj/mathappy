import { Link } from "react-router-dom"
import { signInWithGoogleRedirect, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import { useState, useContext } from "react"
import { UserContext } from "../../contexts/user.context"

import facebook from "../../icons/facebook_blue.png"
import google from "../../icons/google.png"
import satellite from "../../media/modal.png"

import "./SignIn.styles.css"

const defaultFormFields = {
    email: "",
    password: ""
}

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const SignInWithGoogle = async () => {
        const { user } = await signInWithGoogleRedirect();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);

        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert("Mot de passe incorrect");
                    break;
                case 'auth/user-not-found':
                    alert("Utilisateur non trouvé");
                    break;
                default:
                    console.error(error)

            }

        }
    }

    return(
        <div className="sign-in-form">
            <img src={satellite} alt="logo" />
            <h1>Connexion</h1>
            <div className="social-login">
                <button className="p-m-regular facebook"><img src={facebook} alt="facebook"/></button>
                <button onClick={signInWithGoogleRedirect} className="p-m-regular google"><img src={google} alt="google"/></button>
            </div>
            <div className="separator">
                <div className="line"></div>
                <p className="p-m-regular">OU</p>
                <div className="line"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <input required type="email" placeholder="Adresse e-mail" className="p-m-regular" onChange={handleChange} name="email" value={email}/>
                <input required type="password" placeholder="Mot de passe" className="p-m-regular" onChange={handleChange} name="password" value={password}/>

                <button type="submit" className="p-s-bold connexion-button">Se connecter</button>
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