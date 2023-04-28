import React, { useState, useEffect, useCallback } from "react";

import ChevronBottom from "../../../icons/ChevronBottom";

import client from "../../../contentful/client.js";

import "./SearchPage.css";
import Chapitre from "../../../components/competence/competence";
import { useSelector } from "react-redux";

function SearchPage() {
  //PREPARATION DES DONNEES DE CONTENFUL
  const [isCompetencesLoading, setIsCompetencesLoading] = useState(false); // A utiliser pour faire un loader
  const [competences, setCompetences] = useState([]);

  //Met les variables récupérées sur contenful sous un nom beaucoup plus claire
  const cleanUpCompetences = useCallback((rawData) => {
    const cleanCompetences = rawData.map((competence) => {
      const { sys, fields } = competence;
      const { id } = sys;
      const competenceName = fields.nomCompetence;
      const localisation = fields.localisation;
      const duree = fields.duree;
      const niveau = fields.niveau;
      const iconCompetence = fields.iconCompetence.fields.file.url;
      const nomChapitre = fields.nomChapitre ;
      const descriptionCompetence = fields.descriptionCompetence;
      const slug = fields.slug;
      const nomCategorie = fields.nomCategorie;

      const updatedCompetence = {
        id,
        competenceName,
        localisation,
        duree,
        niveau,
        iconCompetence,
        nomChapitre,
        descriptionCompetence,
        nomCategorie,
        slug,
      };
      return updatedCompetence;
    });

    setCompetences(cleanCompetences);
  }, []);

  //Récupère les données sur contentful
  const getCompetences = useCallback(async () => {
    setIsCompetencesLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "competence",
        order: "-sys.createdAt",
        limit: 200,
      });
      const responseData = response.items;
      if (responseData) {
        cleanUpCompetences(responseData);
      } else {
        setCompetences([]);
      }
      setIsCompetencesLoading(false);
    } catch (error) {
      console.log(error);
      setIsCompetencesLoading(false);
    }
  }, [cleanUpCompetences]);

  //Fait en sorte que les données sois récupérer une seule fois et se mette à jour seulement s'il y a une MAJ des données contentful
  useEffect(() => {
    getCompetences();
  }, [getCompetences]);

  const chapter = []

  if(competences.length > 0){

    for(let i=0; i < competences.length ; i++){
      if(chapter.length === 0){chapter.push(competences[i])}
      
      for(let j=0; j < chapter.length + 1; j++){

        if(chapter[j] !== undefined)console.log("Passe" + i + ": competence = " + competences[i].nomChapitre + " --- Chapitre = " + chapter[j].nomChapitre)

        if(chapter[j] !== undefined){
          if(competences[i].nomChapitre !== chapter[j].nomChapitre){
            chapter.push(competences[i])
          }
        }        
      }
    }
  }

  const menu = useSelector(state=> state.menu.open)
  

  return (
    <div className={`Search-page ${menu ? "container-menuOpen" : "container"}`}>
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
        {chapter.map((competence)=>{
            const { id, nomChapitre, nomCategorie, descriptionCompetence, localisation, niveau, duree, iconCompetence, slug } = competence;
            return(
                <Chapitre
                slug={slug}
                id={id}
                iconCompetence={iconCompetence}
                competenceName={nomChapitre}
                localisation={localisation}
                duree={duree} 
                nomCategorie={nomCategorie}
                descriptionCompetence = {descriptionCompetence}
                niveau={niveau}
                avis
                />
            )
        })}
      </div>
    </div>
  );
}

export default SearchPage;
