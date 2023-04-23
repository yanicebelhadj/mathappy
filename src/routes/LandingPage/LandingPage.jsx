import { Link } from "react-router-dom"
import { useState } from "react"

import mainSection from "../../media/mainSection.png"
import pilierReussite from "../../media/pilierReussite.png"
import rectangle from "../../media/rect.png"
import argument from "../../media/argument.png"
import Modal from "../../media/modal.png"

import "./LandingPage.styles.css"
import Logo from "../../icons/Logo.svg"
import LogoFooter from "../../icons/LogoFooter"
import Instagram from "../../icons/Instagram"
import Youtube from "../../icons/Youtube"
import Tiktok from "../../icons/Tiktok"


const LandingPage = () => {

    const [modal, setModal] = useState(false)

    return(
        <div className="landing-page">
            <header>
                <img id="logo" src={Logo} alt="Logo" />
                <button onClick={()=>setModal(true)} className="p-m-bold connexion">Connexion</button>
            </header>

            <section className="main-section">
                <div className="text-area">
                    <h1>Obtiens les réponses dont tu as besoin en <span className="highlighth1">mathématiques</span></h1>
                    <p className="p-m-semi-bold description">Découvre les maths sous un nouvel angle.</p>
                    <Link to="/SignUp" className="p-l-bold connexion">Commencer</Link>
                </div>
                <img src={mainSection} alt="main section" />
            </section>

            {
                modal &&
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span onClick={()=>setModal(false)} className="close">&times;</span>
                            <img src={Modal} alt="Modal" />
                        </div>
                        <p className="h2-m-medium">Excelle en mathématiques</p>
                        <div className="modal-body">
                            <button className="p-m-medium email"><Link to="/SignIn">Se connecter avec Email</Link></button>
                        </div>
                        <div className="sign-up">
                            <p>Nouvel utilisateur ?</p> 
                            <Link to="/SignUp">S’inscrire</Link>
                        </div>
                    </div>
                </div>
            }

            <section className="pilier-reussite">
                <div className="image-area">
                    <h1>Maitrise les <span className="highlighth1">compétences une à une</span></h1>
                    <img src={pilierReussite} alt="pilier reussite" />
                </div>
                <div className="text-area">
                    <div className="pilier">
                        <p className="title">Efficacité</p>
                        <p className="description p-l-regular">
                            Pas de miracle pour être efficace, la fiche de cours ne doit plus avoir de 
                            secrets pour toi. C’est pourquoi elle constitue ton guide. Une fois que tu 
                            te sens prêt place à la pratique.
                        </p>
                    </div>
                    <div className="pilier">
                        <p className="title">Organisation</p>
                        <p className="description p-l-regular">
                            Un travail organisé est essentiel non seulement en maths mais aussi dans ton quotidien. 
                            Cette organisation inclut beaucoup de paramètres c’est pourquoi on va t’aider à prendre 
                            conscience de cela et à mieux la gérer.
                        </p>
                    </div>
                    <div className="pilier">
                        <p className="title">Rapidité</p>
                        <p className="description p-l-regular">
                            Pas de miracle pour être efficace, la fiche de cours ne doit plus avoir de 
                            secrets pour toi. C’est pourquoi elle constitue ton guide. Une fois que tu 
                            te sens prêt place à la pratique.
                        </p>
                    </div>
                </div>
            </section>

            <section className="quick-course-presentation">
                <div className="title-description">
                    <h1>Apprends les <span className="highlighth1">mathématiques d’une autre manière</span></h1>
                    <p>
                        Nos élèves nous aiment pour notre créativité. Tous nos cours sont conçus en 
                        mettant les élèves au centre de l’apprentissage. 
                    </p>
                </div>
                <div className="categories">
                    <div className="category">
                        <img src={rectangle} alt="category" />
                        <p className="p-xxs-medium">NOMBRES ET CALCULS</p>
                    </div>
                    <div className="category">
                        <img src={rectangle} alt="category" />
                        <p className="p-xxs-medium">ESPACE ET GÉOMÉTRIE</p>
                    </div>
                    <div className="category">
                        <img src={rectangle} alt="category" />
                        <p className="p-xxs-medium">GRANDEURS ET MESURES</p>
                    </div>
                    <div className="category">
                        <img src={rectangle} alt="category" />
                        <p className="p-xxs-medium">ORGANISATIONS ET GESTION DE DONNÉES</p>
                    </div>
                </div>
                <div className="image-area">
                    <p>Cours sur les nombres et calculs</p>
                </div>
            </section>

            <section className="arguments-section">
                <h1>Maîtriser les <span className="highlighth1">compétences essentielles</span></h1>
                <div className="arguments">
                    <div className="argument-container">
                        <div className="line"></div>
                        <div className="argument">
                            <img src={argument} alt="argument" />
                            <div className="text-area">
                                <p className="title">Maîtriser les compétences essentielles</p>
                                <p className="description">Nos élèves nous aiment pour notre créativité. Tous nos cours sont conçus en metteant les élèves au centre. </p>
                            </div>
                        </div>
                    </div>
                    <div className="argument-container">
                        <div className="line"></div>
                        <div className="argument">
                            <img src={argument} alt="argument" />
                            <div className="text-area">
                                <p className="title">Maîtriser les compétences essentielles</p>
                                <p className="description">Nos élèves nous aiment pour notre créativité. Tous nos cours sont conçus en metteant les élèves au centre. </p>
                            </div>
                        </div>
                    </div>
                    <div className="argument-container">
                        <div className="line"></div>
                        <div className="argument">
                            <img src={argument} alt="argument" />
                            <div className="text-area">
                                <p className="title">Maîtriser les compétences essentielles</p>
                                <p className="description">Nos élèves nous aiment pour notre créativité. Tous nos cours sont conçus en metteant les élèves au centre. </p>
                            </div>
                        </div>
                    </div>
                    <div className="argument-container">
                        <div className="line"></div>
                        <div className="argument">
                            <img src={argument} alt="argument" />
                            <div className="text-area">
                                <p className="title">Maîtriser les compétences essentielles</p>
                                <p className="description">Nos élèves nous aiment pour notre créativité. Tous nos cours sont conçus en metteant les élèves au centre. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <LogoFooter />
                <div className="text-area">
                    <div className="first-part-links">
                        <div className="column">
                            <p className="p-xl-bold title">Entreprise</p>
                            <p className="p-m-regular">À propos</p>
                            <p className="p-m-regular">Principes</p>
                            <p className="p-m-regular">Professeurs</p>
                            <p className="p-m-regular">Blog</p>
                        </div>
                        <div className="column">
                            <p className="p-xl-bold title">Produit</p>
                            <p className="p-m-regular">Cours</p>
                            <p className="p-m-regular">Aujourd’hui</p>
                            <p className="p-m-regular">Prix</p>
                            <p className="p-m-regular">Témoignages</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <Instagram />
                        <Youtube />
                        <Tiktok />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage