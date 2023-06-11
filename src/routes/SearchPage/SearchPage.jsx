import React, { useState } from "react";

import "./SearchPage.css";
// import { useSelector } from "react-redux"; REMETTRE ÇA POUR LE MENU

import dataChapitres from '../../content/content.json'

import Chapitre from "../../components/competence/competence";


function SearchPage() {
  const [selectedNiveauValue, setSelectedNiveauValue] = useState('');
  const [selectedThemeValue, setSelectedThemeValue] = useState('');

  const handleSelectNiveauChange = (event) => {
    setSelectedNiveauValue(event.target.value);
  };

  const handleSelectThemeChange = (event) => {
    setSelectedThemeValue(event.target.value);
  };
  
  // const menu = useSelector(state=> state.menu.open) REMETTRE ÇA POUR LE MENU

  let dataChapitresFiltered = dataChapitres;

  if(selectedNiveauValue){
    dataChapitresFiltered = dataChapitres.filter(chapitre => chapitre.niveau === parseInt(selectedNiveauValue,10))
  }

  if(selectedThemeValue){
    dataChapitresFiltered = dataChapitres.filter(chapitre => chapitre.theme === parseInt(selectedThemeValue,10))
  }

  if(selectedNiveauValue && selectedThemeValue){
    dataChapitresFiltered = dataChapitres.filter(chapitre => chapitre.theme === parseInt(selectedThemeValue,10) && chapitre.niveau === parseInt(selectedNiveauValue,10))
  }

  return (
     <div className={`Search-page container`}>  {/* REMETTRE ÇA POUR LE MENU ${menu ? "container-initialState" : "container-clickedState"}*/} 
      <div className="filters">
        <select className="filter" value={selectedNiveauValue} onChange={handleSelectNiveauChange}>
          <option value="">Niveau</option>
          <option value="6">6ème</option>
          <option value="5">5ème</option>
          <option value="4">4ème</option>
          <option value="3">3ème</option>
        </select>

        <select className="filter" value={selectedThemeValue} onChange={handleSelectThemeChange}>
          <option value="">Thème</option>
          <option value="1">Nombre et calcul</option>
          <option value="2">Espace et géométrie</option>
          <option value="3">Organisation et gestion de données</option>
          <option value="4">Grandeurs et mesures</option>
        </select>
      </div>

      <div className="competence-list">
        {
          dataChapitresFiltered.map((competence, index)=>{ 
              const { id, nomChapitre, theme,  nomTheme, description, niveau, duree, iconChapitre, slug } = competence;

              return(              
                <Chapitre
                  key={index}
                  slug={slug}
                  id={id}
                  theme={theme}
                  iconChapitre={iconChapitre}
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
