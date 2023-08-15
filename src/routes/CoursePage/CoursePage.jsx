// import { useSelector } from "react-redux";

import "./CoursePage.styles.css"
import ContentCourse from '../../content/content.json'
import Breadcrumbs from "components/breadcrumbs/breadcrumbs.component";

function CoursePage(){
    // const menu = useSelector(state=> state.menu.open)

    var urlcourante = document.location.href; 

    var idChapitre = urlcourante.split("/").slice(-1)[0].split("-")[0].slice(0,3)

    // console.log(idChapitre)
    
    const chapitre = ContentCourse.filter(item => item.id === idChapitre);
    
    // console.log(chapitre)

    var idCompetence = urlcourante.split("/").slice(-1)[0].split("-")[0].slice(0,4)

    const competence = chapitre[0].competences.filter(item => item.id === idCompetence);
    const nomCompetence = competence[0].nom

    console.log(competence[0])

    return(
        <div className={`course-page container`}> {/* REMETTRE ÇA POUR LE MENU ${menu ? "container-initialState" : "container-clickedState"}*/} 
            <Breadcrumbs />
            <h1><span className="h1-m highlighth1">{nomCompetence}</span></h1>
            <img className="cours" src={ process.env.PUBLIC_URL + competence[0].contenu} alt="course" />
            <a href= { process.env.PUBLIC_URL + competence[0].exercice} target="_blank" rel="noreferrer" className="btn-exercices">
                <p className="p-m-semi-bold">Exercices</p>
            </a>
        </div>
    )
}

export default CoursePage