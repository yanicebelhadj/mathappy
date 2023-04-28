import Objectives from "../../components/objectives/objectives.component";
import Capsule from "../../components/capsule/capsule.component";
import ContentCourse from "../../content/content.json";


import "./CoursePresentationPage.styles.css";
import { useSelector } from "react-redux";

function CoursePresentationPage() {

  const menu = useSelector(state=> state.menu.open)

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
    <div className={`CoursePresentationPage ${menu ? "container-menuOpen" : "container"}`}>
      <div className="starter-information-course">
        <div className="main-informations">
          <h1 className="h1-l">{dataChapitre.nom}</h1>
          <h2 className="h2-s-medium">{dataChapitre.description}</h2>
        </div>
        <Objectives competences ={dataChapitre.competencesChapitre} />
      </div>

      <div className="cta-section">
        <Capsule id={dataChapitre.id} slug={dataChapitre.slug} thumbnail = {dataChapitre.thumbnail} />
        {/* <ContentCourse /> */}
      </div>
        
    </div>
  );
}

export default CoursePresentationPage;
