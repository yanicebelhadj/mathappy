import { useSelector } from "react-redux";

import "./CompetencesPage.styles.css"

import { Link } from "react-router-dom";

import ContentCourse from "../../content/content.json";

import image from "../../media/chapitreIcon.png"
import Cours from "../../icons/cours.svg";
import Exercices from "icons/exercice.svg";
import Hexagone from "../../icons/hexagone.svg";

const CompetencesPage = () => {
    const menu = useSelector(state=> state.menu.open)
  
    const urlcourante = document.location.href; 
  
    const idChapitre = urlcourante.split("/").slice(-1)[0].split("-")[0]
  
    const result = ContentCourse.filter(item => item.id === idChapitre);

    const competenceList = result[0].competences.map((competence) => {
        return competence
    })

    const nomChapitre = result[0].nomChapitre

    const slug = result[0].slug
    
    return(
        <div className={`competences-page ${menu ? "container-menuOpen" : "container"}`}>
            <div className="navigation">
                <Link to={`/${idChapitre + "-" + slug}`} className="back-button">Retour</Link>
            </div>
            <div className="course-summary-and-competences-list">
                <div className="course-summary">
                    <img src={image} alt="course-summary" />
                    <h1>{nomChapitre}</h1>
                    <p>Commence ton voyage en algèbre ici avec les nombres entiers et décimaux.</p>
                    <div className="lesson-details">
                        <div className="lesson-details-item">
                            <img src={Cours} alt="icon" /> 
                            <p>{competenceList.length} Leçons</p>
                        </div>
                        <div className="lesson-details-item">
                            <img src={Exercices} alt="icon" /> 
                            <p>Exercices</p>
                        </div>
                        
                    </div>
                </div>
                <div className="competences-list">
                    {
                        competenceList.map((competence, index) => {
                            return(
                                <Link key={index} to={{ pathname: `/le-cours/${competence.id + "-" + competence.slug}` }} className="competence-item">
                                    <div className="hexagone" style={{backgroundImage: `url(${Hexagone})`}}>
                                        <p className="h2-m-semi-bold">{index + 1}</p>
                                    </div>
                                    <p className="p-l-semi-bold competence-name">{competence.nom}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CompetencesPage