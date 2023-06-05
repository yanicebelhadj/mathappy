import ChevronBottom from "../../icons/ChevronBottom";

import "./SearchPage.css";
// import { useSelector } from "react-redux"; REMETTRE ÇA POUR LE MENU

import dataChapitres from '../../content/content.json'

import Chapitre from "../../components/competence/competence";

function SearchPage() {
  // const menu = useSelector(state=> state.menu.open) REMETTRE ÇA POUR LE MENU

  return (
     <div className={`Search-page container`}>  {/* REMETTRE ÇA POUR LE MENU ${menu ? "container-initialState" : "container-clickedState"}*/} 
      <div className="filters">
        <div className="filter">
          <p className="p-m-bold">Niveau</p>
          <ChevronBottom />
        </div>
        <div className="filter">
          <p className="p-m-bold">Catégorie</p>
          <ChevronBottom />
        </div>
      </div>

      <div className="competence-list">
        {
          dataChapitres.map((competence, index)=>{ 
              const { id, nomChapitre, nomTheme, description, niveau, duree, iconCompetence, slug } = competence;
              return(
                <Chapitre
                  key={index}
                  slug={slug}
                  id={id}
                  iconCompetence={iconCompetence}
                  competenceName={nomChapitre}
                  duree={duree} 
                  nomTheme={nomTheme}
                  description = {description}
                  niveau={niveau}
                  />
              )
          })
        }
      </div>
    </div>
  );
}

export default SearchPage;
