import React, { useState, useEffect, useCallback } from "react";

import ChevronBottom from "../icons/ChevronBottom";

import client from "../contentful/client.js";

import "../css/SearchPage.css";
import Competence from "../components/competence/competence";

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
      const iconCompetence = fields.iconCompetence.fields.file.url;
      const slug = fields.slug;
      // console.log(competence)
      const updatedCompetence = {
        id,
        competenceName,
        localisation,
        duree,
        iconCompetence,
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


  return (
    <div className="Search-page">
      <div className="filters">
        <div className="filter">
          <p>Niveau</p>
          <ChevronBottom />
        </div>
        <div className="filter">
          <p>Catégorie</p>
          <ChevronBottom />
        </div>
      </div>

      <div className="competence-list">
        {competences.map((competence)=>{
            const { id, competenceName, localisation, duree, iconCompetence, slug } = competence;
            return(
                <Competence
                slug={slug}
                id={id}
                iconCompetence={iconCompetence}
                competenceName={competenceName}
                localisation={localisation}
                duree={duree} 
                />
            )
        })}
      </div>
    </div>
  );
}

export default SearchPage;
