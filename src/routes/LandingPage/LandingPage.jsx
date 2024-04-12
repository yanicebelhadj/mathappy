import { Link } from "react-router-dom"
import { useState } from "react"

import mainSection from "../../media/mainSection.png"
// import pilierReussite from "../../media/pilierReussite.png"
import ctaSection from "../../media/ctaSection.png"
import quickCoursePresentation from "../../media/quickCoursePresentation.png"
import Modal from "../../media/modal.png"
import explorationExcellenceDescription1 from "../../media/explorationExcellenceDescription1.png"
import explorationExcellenceDescription2 from "../../media/explorationExcellenceDescription2.png"
import explorationExcellenceDescription3 from "../../media/explorationExcellenceDescription3.png"

import "./LandingPage.styles.css"
import Logo from "../../icons/Logo.svg"
import LogoFooter from "../../icons/LogoWhite.svg"
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
            <div className="container-landing-page"> 

                <section className="main-section">
                    <div className="text-area">
                        <h1>Explorez les <span className="highlighth1">Mathématiques</span> d'une Nouvelle Façon ! </h1>
                        <p className="p-m-semi-bold description">Soyez les bienvenus sur Mathappy, la plateforme de soutien scolaire avec la pédagogie la plus adaptée à chacun pour véritablement progresser. Pour être en pleine confiance et ainsi obtenir les meilleures notes possibles.</p>
                        <div className="cta">
                            <Link to="/SignUp" className="p-l-bold connexion">Commencer</Link>
                            <a className="p-l-bold cta-button" href="https://www.meetinclass.com/prof/yanice20/ingenieur-informatique-ma-mission-est-apporter-mon-soutien-collegiens-pour-exceller-mathematiques">Réserver des cours de soutien scolaire</a>
                        </div>
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

                <section className="quick-course-presentation">
                    <div className="title-description">
                        <h1>Notre <span className="highlighth1">secret </span> ? <br/> <span className="highlighth1">Comprendre</span> et ne pas qu'apprendre par coeur.</h1>
                        <p className="p-l-bold">Lire ses leçons régulièrement et chercher ensuite, avec un temps raisonnable, les exercices correspondants. <br/>La clé de la réussite est la régularité dans le travail personnel tout en étant guidé par un pédagogue expérimenté. Notre cours est très visuel, basé sur des schématisations, des prises d'initiatives et toujours éclairé par nos explications uniques. </p>
                    </div>
                    
                    <div className="image-area">
                        <img src={quickCoursePresentation} alt="quick course presentation" />
                    </div>
                </section>

                <section className="exploration-excellence-section">
                    <div className="title-description">
                        <h1><span className="highlighth1">Travailler</span> pour atteindre son <span className="highlighth1">potentiel maximal</span>.</h1>
                    </div>
                    
                    <div className="exploration-excellence-description">
                        <img src={explorationExcellenceDescription1} alt="exploration Excellence Description" />
                        <div className="text-area">
                            <p className="h1-m title">La particularité de nos cours</p>
                            <p className="p-m-bold description">
                                Choisir successivement, sans temps mort et en temps réel, les exercices les plus appropriés pour une progression optimale de l’élève. En le guidant ni trop ni pas assez, pour y répondre. Qu’ils soient parfaitement compris et donc que le cours le soit aussi.
                            </p>
                        </div>
                    </div>

                    <div className="exploration-excellence-description">
                        <img src={explorationExcellenceDescription2} alt="exploration Excellence Description" />
                        <div className="text-area">
                            <p className="h1-m title">Élever chaque élève vers la réussite, quel que soit son niveau</p>
                            <p className="p-m-bold description">
                                Nous aidons les plus en difficulté à reprendre confiance en eux ; nous permettons à ceux ayant un niveau correct de consolider leur dossier scolaire ; nous menons les plus performants aux portes des meilleures écoles de France et du monde ; à tous, nous transmets le goût de l'effort, la volonté de réussir et de rendre un travail de qualité.
                            </p>
                        </div>
                    </div>

                    <div className="exploration-excellence-description">
                        <img src={explorationExcellenceDescription3} alt="exploration Excellence Description" />
                        <div className="text-area">
                            <p className="h1-m title">Forger des champions en mathématiques</p>
                            <p className="p-m-bold description">
                                Nous rendons nos étudiants forts en mathématiques. Le véritable "fort" est celui qui sait résoudre toutes les questions, correspondants aux thèmes qu'il a étudiés, avec un temps suffisant. C'est celui chez qui l'instinct et l'intuition prédominent.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="text-area">
                        <p className="h1-m title">Stimuler la constance pour exceller dans l'apprentissage</p>
                        <p className="p-m-bold description">Notre pédagogie ne se limite pas à acquérir un savoir-faire technique. Elle vise aussi à atteindre un certain état d’esprit au travers d’une préparation qui aidera l’élève à mieux aborder chaque devoir ou examen. À supporter le stress, à utiliser ses propres atouts.</p>
                        <Link to="/SignUp" className="p-l-bold connexion">Commencer</Link>
                    </div>
                    <img src={ctaSection} alt="cta section" />
                </section>
                
            </div>

            <footer>
                <div className="footer-container"> 
                    <img src={LogoFooter} alt="Logo" />
                    <div className="text-area">
                        {/* <div className="first-part-links">
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
                        </div> */}
                        <div className="social-media">
                            <Instagram />
                            <Youtube />
                            <Tiktok />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage