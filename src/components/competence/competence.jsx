import React from 'react';
import { Link } from "react-router-dom";

import Location from '../../icons/Location';
import Duration from '../../icons/Duration';

import "./competence.styles.css"

function Competence(props) {
    const { id, competenceName, localisation, duree, iconCompetence } = props
    return(
        <Link to={`/${props.slug}`} className='competence' key={id}>
            <img src={`${iconCompetence}`} alt="Nombres et calculs" />
            <div className='TextArea'>
                <p className='p-s-semi-bold'>{competenceName}</p>
                <div className='Details'>
                    <div className='Detail'>
                        <Location />
                        <p>{localisation}</p>
                    </div>
                    <p>•</p>
                    <div className='Detail'>
                        <Duration />
                        <p>{duree}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Competence