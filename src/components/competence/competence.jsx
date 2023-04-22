import React from 'react';
import { Link } from "react-router-dom";

import Location from '../../icons/Location';
import Duration from '../../icons/Duration';
import Niveau from '../../icons/Niveau';

import "./competence.styles.css"
import Rate from '../rate/rate.component';

function Competence(props) {
    const { id, competenceName, nomCategorie, descriptionCompetence, avis, niveau, localisation, duree, iconCompetence } = props
    return(
        <Link to={`/${props.slug}`} className='competence' key={id}>
            <img src={`${iconCompetence}`} alt="Nombres et calculs" />
            <div className='TextArea'>
                <p className='title p-s-semi-bold'>{competenceName}</p>
                {nomCategorie && <p className='category p-s-medium'>{nomCategorie}</p>}
                {descriptionCompetence && <p className='description p-s-medium'>{descriptionCompetence.substr(0,110) + " ..."}</p>}
                {avis && <Rate />}
                <div className='Details'>
                    <div className='Detail'>
                        <Duration />
                        <p>{duree}</p>
                    </div>
                    {
                        niveau &&
                        <>
                            <p>•</p>
                            <div className='Detail'>
                                <Niveau />
                                <p>{niveau}</p>
                            </div>
                        </>

                    }
                    <p>•</p>
                    <div className='Detail'>
                        <Location />
                        <p>{localisation}</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Competence