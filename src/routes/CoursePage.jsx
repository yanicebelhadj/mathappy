import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import client from "../contentful/client.js";
// import { getSingleCompetence } from "../contentful/getEntries.js";

import "../css/CoursePage.styles.css"
import Example from "../icons/Example"
import Reminder from "../icons/Reminder"

function CoursePage(){
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
        const cours = fields.cours
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
            cours
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

    console.log(competences)

    return(
        <div className="course-page">
            <h1><span className="h1-m highlighth1">Décomposer un nombre décimal en fractions décimales</span></h1>
            <h2><span className="h2-m-semi-bold highlighth2">Fraction décimale</span></h2>        
            <p className="p-m-regular">Une <strong>fraction décimale</strong> est une fraction de dénominateur 10; 100; 1000 ....</p>    
            <div className="example">
                <Example />
                <div className="text-area">
                    <p className="p-m-regular"><strong>Exemple:</strong></p>
                    <p className="p-m-regular">5/1000 ; 43/10; 9246/100 sont des fractions décimales (elles se lisent “5 millièmes” ; “43 dixièmes” ; “9246 centièmes”)</p>
                </div>
            </div>
            <div className="reminder">
                <Reminder />
                <div className="text-area">
                    <p className="p-m-regular"><strong>Rappel:</strong></p>
                    <p className="p-m-regular">Le numérateur et le dénominateur d’une fraction sont des nombres entiers: 7/3 (7 est le numérateur et 3 le dénominateur)</p>
                </div>
            </div>
            <h2><span className="h2-m-semi-bold highlighth2">Les différentes écritures d’un nombre</span></h2>
            <p className="p-m-regular">Un <strong>nombre décimal</strong> peut s’écrire sous différentes formes.</p>
            <div className="example">
                <Example />
                <div className="text-area">
                    <p className="p-m-regular"><strong>Exemple:</strong></p>
                    <p className="p-m-regular">
                        Le nombre décimal 6,419 peut s’écrire:<br/>
                        6,419 --> écriture décimale<br/>
                        6419/1000 --> une seule fraction décimale<br/>
                        6 + 4/10 + 1/100 + 9/1000 --> un nombre entier et plusieurs fractions décimales<br/>
                        6 + 419/1000 --> Un nombre entier et une seule fraction décimale<br/>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default CoursePage