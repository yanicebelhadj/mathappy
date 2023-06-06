import Objectives from "../../components/objectives/objectives.component";
import Capsule from "../../components/capsule/capsule.component";
import ContentCourse from "../../content/content.json";
import { Link } from "react-router-dom";
import Heart from "../../icons/Heart";

import "./CoursePresentationPage.styles.css";
// import { useSelector } from "react-redux"; REMETTRE ÇA POUR LE MENU

function CoursePresentationPage() {

  // const menu = useSelector(state=> state.menu.open) REMETTRE ÇA POUR LE MENU

  console.log(ContentCourse)

  
  const urlcourante = document.location.href; 

  const idChapitre = urlcourante.split("/").slice(-1)[0].split("-")[0]

  const chapitre = ContentCourse.filter(item => item.id === idChapitre);
  
  const dataChapitre = {
    id: chapitre[0].id,
    slug: chapitre[0].slug,
    nom: chapitre[0].nomChapitre,
    description: chapitre[0].description,
    competencesChapitre: chapitre[0].competences.map((competence) => {
      return competence.nom
    }),
    thumbnail: "https://picsum.photos/385/250"
  }
  
  return (
    <div className={`CoursePresentationPage container`}> {/* REMETTRE ÇA POUR LE MENU ${menu ? "container-initialState" : "container-clickedState"}*/}
      <div className="starter-information-course">
        <div className="main-informations">
          <h1 className="h1-l">{dataChapitre.nom}</h1>
          <h2 className="p-l-medium">{dataChapitre.description}</h2>
        </div>
        <Objectives competences ={dataChapitre.competencesChapitre} />
        <div className="preliminary-cta-tablette">
          <Link to={{ pathname: `/maths/${dataChapitre.id + "-" + dataChapitre.slug}` }} className="course-cta p-m-medium">Voir le cours</Link>{/*  */}
          <div className="register-course">
            <Heart />
            <p className="p-m-semi-bold">Enregistrer ce cours</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <Capsule id={dataChapitre.id} slug={dataChapitre.slug} thumbnail = {dataChapitre.thumbnail} />
        {/* <ContentCourse /> */}
      </div>
        
    </div>
  );
}

export default CoursePresentationPage;
