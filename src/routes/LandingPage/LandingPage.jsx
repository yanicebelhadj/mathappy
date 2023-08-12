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
                        <p className="p-m-semi-bold description">Embarquez pour une aventure où chaque cours devient une exploration captivante, chaque défi une opportunité de s’améliorer, et où la confiance en mathématiques devient votre plus grande force. </p>
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

                <section className="quick-course-presentation">
                    <div className="title-description">
                        <h1>Découvrez une approche qui combine <span className="highlighth1">innovation pédagogique</span> et <span className="highlighth1">inspiration</span>.</h1>
                        <p className="p-l-bold">Plongez dans une aventure éducative inédite en France où les mathématiques prennent vie.  Mathappy vous offre une plateforme d'apprentissage en ligne conçue spécialement pour les élèves du niveau collège.</p>
                    </div>
                    
                    <div className="image-area">
                        <img src={quickCoursePresentation} alt="quick course presentation" />
                    </div>
                </section>

                <section className="exploration-excellence-section">
                    <div className="title-description">
                        <h1>Bienvenue dans un monde où <span className="highlighth1">l'exploration</span> mène à <span className="highlighth1">l'excellence</span>.</h1>
                    </div>
                    
                    <div className="exploration-excellence-description">
                        <img src={explorationExcellenceDescription1} alt="exploration Excellence Description" />
                        <div className="text-area">
                            <p className="h1-m title">Là où l'Exploration Devient Personnalisée</p>
                            <p className="p-m-bold description">
                                Découvrez des cours structurés qui démystifient les mathématiques et rendent chaque concept passionnant. 
                                Et pour une montée en compétences encore plus rapide et ciblée, plongez dans nos cours particuliers sur mesure. 
                                Nos professeurs vous guideront vers la maîtrise des concepts mathématiques, débloquant votre potentiel !
                            </p>
                        </div>
                    </div>

                    <div className="exploration-excellence-description">
                        <img src={explorationExcellenceDescription2} alt="exploration Excellence Description" />
                        <div className="text-area">
                            <p className="h1-m title">Les maths en images</p>
                            <p className="p-m-bold description">
                            Parcourez des cours organisés par chapitre et compétence. Des vidéos originales vous guideront à travers chaque concept, 
                            vous aidant à visualiser et à comprendre les mathématiques de manière concrète.
                            </p>
                        </div>
                    </div>

                    <div className="exploration-excellence-description">
                        <img src={explorationExcellenceDescription3} alt="exploration Excellence Description" />
                        <div className="text-area">
                            <p className="h1-m title">La connaissance s’acquiert par la pratique le reste n’est que de l’information</p>
                            <p className="p-m-bold description">
                                Que vous cherchiez à perfectionner vos compétences en résolution de problèmes, à affiner votre compréhension des concepts 
                                clés ou à relever des défis stimulants, nos exercices vous guideront vers l'excellence mathématique. Préparez-vous à explorer, 
                                à apprendre et à exceller grâce à nos exercices soigneusement élaborés.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="text-area">
                        <p className="h1-m title">Prêt à explorer les mathématiques sous un nouvel angle ?</p>
                        <p className="p-m-bold description">Rejoignez Mathappy aujourd'hui et ouvrez la porte vers une nouvelle manière d'apprendre !</p>
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