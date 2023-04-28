import { useSelector } from "react-redux";

import "./CoursePage.styles.css"
import ContentCourse from '../../content/content.json'

function CoursePage(){
    const menu = useSelector(state=> state.menu.open)

    var urlcourante = document.location.href; 

    var idChapitre = urlcourante.split("/").slice(-1)[0].split("-")[0].slice(0,3)

    console.log(idChapitre)
    
    const chapitre = ContentCourse.filter(item => item.id === idChapitre);
    
    console.log(chapitre)

    var idCompetence = urlcourante.split("/").slice(-1)[0].split("-")[0].slice(0,4)

    const competence = chapitre[0].competences.filter(item => item.id === idCompetence);

    console.log(competence[0].contenu)

    return(
        <div className={`course-page ${menu ? "container-menuOpen" : "container"}`}>
            <h1><span className="h1-m highlighth1">Décomposer un nombre décimal en fractions décimales</span></h1>
            <img className="cours" src={ process.env.PUBLIC_URL + competence[0].contenu} alt="course" />
        </div>
    )
}

export default CoursePage