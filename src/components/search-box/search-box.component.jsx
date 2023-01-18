import React, { useState, useEffect, useCallback } from "react";
import "./search-box.styles.css";

import Competence from "../competence/competence";

import client from "../../contentful/client.js";
import Search from "../../icons/Search";

function SearchBox(props) {
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
      const slug = fields.slug
      // console.log(competence)
      const updatedCompetence = {
        id,
        competenceName,
        localisation,
        duree,
        iconCompetence,
        slug
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


  //SETUP DE LA BARRE DE RECHERCHE
  const [searchField, setSearchField] = useState("");
  const [filteredCompetences, setFilteredCompetences] = useState(competences);
  
  //
  useEffect(() => {
    const newFilteredCompetences = competences.filter((competence) => {
      return getStringWithoutAccent(competence.competenceName)
        .toLocaleLowerCase()
        .includes(searchField);
    });

    setFilteredCompetences(newFilteredCompetences);
  }, [competences, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(getStringWithoutAccent(searchFieldString));
  };

  //Retirer les accents pour les recherches
  const getStringWithoutAccent = (string) => {
    return string.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  };


  return (
    <div className="search-box">
      <div className="search-form">
        <form>
          <input
            type="search"
            placeholder={props.placeholder}
            onChange={onSearchChange}
          />
        </form>
        <button onClick={(x)=>x}>
          <Search />
        </button>
      </div>

      {searchField.length > 0 ? (
        <div className="suggestion">
          {filteredCompetences.slice(0,10).map((competence) => {
            const { id, competenceName, localisation, duree, iconCompetence, slug } = competence;
            return (
              <Competence
                slug={slug}
                id={id}
                iconCompetence={iconCompetence}
                competenceName={competenceName}
                localisation={localisation}
                duree={duree}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default SearchBox;
