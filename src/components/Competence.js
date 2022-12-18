import React from 'react';

import Location from '../icons/Location';
import Duration from '../icons/Duration';

function Competence(props) {
    
    return(
        
        <>
            <img src={`${props.img}`} alt="Nombres et calculs" />
            <div className='TextArea'>
                <h3>{props.nomCompetence}</h3>
                <div className='Details'>
                    <div className='Detail'>
                        <Location />
                        <p>{props.localisation}</p>
                    </div>
                    <p>•</p>
                    <div className='Detail'>
                        <Duration />
                        <p>{props.duree}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Competence