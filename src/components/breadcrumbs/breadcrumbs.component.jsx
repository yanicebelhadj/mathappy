import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import ContentCourse from "../../content/content.json";

import backarrow from "../../icons/back-arrow.svg";

import "./breadcrumbs.styles.css";

function Breadcrumbs() {
    const location = useLocation();

    const urlcourante = document.location.href; 

    const idChapitre = urlcourante.split("/").slice(-1)[0].split("-")[0]

    const result = ContentCourse.filter(item => item.id === idChapitre);

    const slug = result[0]?.slug

    const refCompetence = location.pathname.split('/')[2]?.slice(0, 3)

    const chapterSlug = ContentCourse.find(item => item?.id === refCompetence);


    console.log(chapterSlug?.id + "-" + chapterSlug?.slug)

    // console.log(refCompetence)

    return (
        <div className="Breadcrumbs">
            {
                location.pathname.split('/')[1] === "le-cours" ? 
                <Link to={`/maths/${chapterSlug?.id + "-" + chapterSlug?.slug}`} className="row">
                    <img src={backarrow} alt="backarrow" />
                    <p>Retour à la liste de compétences</p> 
                </Link> :
                location.pathname.split('/')[1] === "maths" ?
                <Link to={`/${idChapitre + "-" + slug}`} className="row"> 
                    <img src={backarrow} alt="backarrow" />
                    <p>Retour à la présentation du cours</p>
                </Link>
                :
                <Link to="/" className="row"> 
                    <img src={backarrow} alt="backarrow" />
                    <p>Accueil</p> 
                </Link>



            }
        </div>
    )

}

export default Breadcrumbs;