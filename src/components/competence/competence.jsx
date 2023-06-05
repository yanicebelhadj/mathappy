import React from 'react';
import { Link } from "react-router-dom";

import Duration from '../../icons/Duration';
import Niveau from '../../icons/Niveau';

import "./competence.styles.css"

function Competence(props) {
    const { id, competenceName, nomTheme, description, niveau, iconCompetence } = props
    return(
        <Link to={`/${props.id + "-" + props.slug}`} className='competence' key={id}>
            <img src={`${iconCompetence}`} alt={`${competenceName}`} />
            <div className='TextArea'>
                <p className='title p-s-semi-bold'>{competenceName}</p>
                {description && <p className='description p-s-medium'>{description.substr(0,110) + " ..."}</p>}
                <div className='Details'>
                    <div className='Detail'>
                        <Duration />
                        <p>{nomTheme}</p>
                    </div>
                    {
                        niveau &&
                        <>
                            <p>•</p>
                            <div className='Detail'>
                                <Niveau />
                                <p>{niveau}eme</p>
                            </div>
                        </>

                    }
                </div>
            </div>
        </Link>
    )
}

export default Competence