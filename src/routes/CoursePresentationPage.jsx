import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Objectives from "../components/objectives/objectives.component";
import Capsule from "../components/capsule/capsule.component";
import ContentCourse from "../components/content-course/content-course.component";

import Rate from "../components/rate/rate.component"
import client from "../contentful/client.js";
import { getSingleCompetence } from "../contentful/getEntries.js";

import "../css/CoursePresentationPage.styles.css";

function CoursePresentationPage() {
  const [isCompetencesLoading, setIsCompetencesLoading] = useState(false); // A utiliser pour faire un loader
  const [competences, setCompetences] = useState([]);

  //Met les variables récupérées de contenful sous un nom beaucoup plus claire
  const cleanUpCompetences = useCallback((rawData) => {
    const cleanCompetences = rawData.map((competence) => {
      const { sys, fields } = competence;
      const { id } = sys;
      const competenceName = fields.nomCompetence;
      const nomChapitre = fields.nomChapitre;
      const descriptionCompetence = fields.descriptionCompetence;
      const presentationContenu = fields.presentationContenu;
      const localisation = fields.localisation;
      const thumbnail = fields.thumbnail.fields.file.url;
      const duree = fields.duree;
      const slug = fields.slug
      const iconCompetence = fields.iconCompetence.fields.file.url;
      const updatedCompetence = {
        id,
        competenceName,
        nomChapitre,
        descriptionCompetence,
        presentationContenu,
        localisation,
        duree,
        thumbnail,
        slug,
        iconCompetence,
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

  //Fait en sorte que les données soient récupérer une seule fois et se mettent à jour seulement s'il y a une MAJ des données contentful
  useEffect(() => {
    getCompetences();
  }, [getCompetences]);

  //Récuperer le chapitre en fonction de la compétence demandé
  const [competence, setCompetence] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const competenceDuChapitre = competences.filter((competence) => {
    return(competence.slug === id)
  })

  const chapterName = competences.length > 0 ? competenceDuChapitre[0].nomChapitre : null
  const chapterDescription = competences.length > 0 ? competenceDuChapitre[0].descriptionCompetence : null
  const competencesChapitre = competences.length > 0 ? competenceDuChapitre.map((competence)=>{
    return(competence.competenceName)
  }) : null
  const thumbnail = competences.length > 0 ? competenceDuChapitre[0].thumbnail : null

  const dataChapitre = {
    nom: chapterName,
    description: chapterDescription,
    competencesChapitre: competencesChapitre,
    thumbnail: thumbnail
  }

  console.log(dataChapitre)

  return (
    <div className="CoursePresentationPage">
      <div className="starter-information-course">
        <div className="main-informations">
          <h1 className="h1-l">{dataChapitre.nom}</h1>
          <h2 className="h2-s-medium">{dataChapitre.description}</h2>
          <Rate />
        </div>
        <Objectives competences ={dataChapitre.competencesChapitre} />
      </div>

      <div className="cta-section">
        <Capsule thumbnail = {dataChapitre.thumbnail} />
        <ContentCourse />
      </div>
        
    </div>
  );
}

export default CoursePresentationPage;
