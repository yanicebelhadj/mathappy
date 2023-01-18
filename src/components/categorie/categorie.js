import React, { useState } from 'react';

// Import images 
import Nombres_et_calculs from "../../media/Nombres_et_calculs.png" 
import Espace_et_geometrie from "../../media/Espace_et_geometrie.png" 
import Grandeur_et_mesure from "../../media/Grandeur_et_mesure.png" 
import Organisation_et_gestion_de_la_donnee from "../../media/Organisation_et_gestion_de_la_donnee.png" 

// Import images 
import "./Categories.css"

function Categories(props) {
    
    const[Nombres_et_calculsActive, setActiveNombres_et_calculs] = useState(true);
    const[Espace_et_geometrieActive, setActiveEspace_et_geometrie] = useState(false);
    const[Grandeur_et_mesureActive, setActiveGrandeur_et_mesure] = useState(false);
    const[Organisation_et_gestion_de_la_donneeActive, setActiveOrganisation_et_gestion_de_la_donnee] = useState(false);

    const nombres_et_calculsActive = () => {
        setActiveNombres_et_calculs(true);
        setActiveEspace_et_geometrie(false);
        setActiveGrandeur_et_mesure(false);
        setActiveOrganisation_et_gestion_de_la_donnee(false);
    }

    const espace_et_geometrieActive = () => {
        setActiveNombres_et_calculs(false);
        setActiveEspace_et_geometrie(true);
        setActiveGrandeur_et_mesure(false);
        setActiveOrganisation_et_gestion_de_la_donnee(false);
    }

    const grandeur_et_mesureActive = () => {
        setActiveNombres_et_calculs(false);
        setActiveEspace_et_geometrie(false);
        setActiveGrandeur_et_mesure(true);
        setActiveOrganisation_et_gestion_de_la_donnee(false);
    }

    const organisation_et_gestion_de_la_donneeActive = () => {
        setActiveNombres_et_calculs(false);
        setActiveEspace_et_geometrie(false);
        setActiveGrandeur_et_mesure(false);
        setActiveOrganisation_et_gestion_de_la_donnee(true);
    }
    
    const onFilterCompetences = (event) => {
        props.filterCompetences(event)
    }


    return (
        <div className="Categories">
            <h2>Catégories</h2>

            <div onClick={() => {nombres_et_calculsActive(); onFilterCompetences("Nombres et calculs")}} className= {`Category ${Nombres_et_calculsActive ? "active" : ""}`} >
                <img src={Nombres_et_calculs} alt="Nombres et calculs" />
                <h3>Nombres et calculs</h3>
            </div>
            <div onClick={() => {espace_et_geometrieActive(); onFilterCompetences("Espace et geometrie")}} className= {`Category ${Espace_et_geometrieActive ? "active" : ""}`}>
                <img src={Espace_et_geometrie} alt="Espace et géométrie" />
                <h3>Espace et géométrie</h3>
            </div>
            <div onClick={() => {grandeur_et_mesureActive(); onFilterCompetences("Grandeur et mesure")}} className= {`Category ${Grandeur_et_mesureActive ? "active" : ""}`}>
                <img src={Grandeur_et_mesure} alt="Grandeur et mesure" />
                <h3>Grandeur et mesure</h3>
            </div>

            {
                props.level !== "sixieme" ?
                <div onClick={() => {organisation_et_gestion_de_la_donneeActive(); onFilterCompetences("Organisation et gestion de donnees")}} className= {`Category ${Organisation_et_gestion_de_la_donneeActive ? "active" : ""}`}>
                    <img src={Organisation_et_gestion_de_la_donnee} alt="Organisation et gestion de la donnée" />
                    <h3>Organisation et gestion de la donnée</h3>
                </div>
                :
                null
            }
        </div>
    );
}

export default Categories;
