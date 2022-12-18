import React, { useState } from 'react';
import {Link} from "react-router-dom";

import Logo from "../media/Logo.js"
import "../css/LateralNavbar.css"
import Sixieme from '../icons/Sixieme.js';
import Cinquieme from '../icons/Cinquieme.js';
import Quatrieme from '../icons/Quatrieme.js';
import Troisieme from '../icons/Troisieme.js';

function LateralNavbar( props ) {
    const[SixiemeActive, setActiveSixieme] = useState(true);
    const[CinquiemeActive, setActiveCinquieme] = useState(false);
    const[QuatriemeActive, setActiveQuatrieme] = useState(false);
    const[TroisiemeActive, setActiveTroisieme] = useState(false);

    const sixiemeActive = () => {
        setActiveSixieme(true);
        setActiveCinquieme(false);
        setActiveQuatrieme(false);
        setActiveTroisieme(false);
    }

    const cinquiemeActive = () => {
        setActiveSixieme(false);
        setActiveCinquieme(true);
        setActiveQuatrieme(false);
        setActiveTroisieme(false);
    }

    const quatriemeActive = () => {
        setActiveSixieme(false);
        setActiveCinquieme(false);
        setActiveQuatrieme(true);
        setActiveTroisieme(false);
    }

    const troisiemeActive = () => {
        setActiveSixieme(false);
        setActiveCinquieme(false);
        setActiveQuatrieme(false);
        setActiveTroisieme(true);
    }

    const onFilterCategories = (event) => {
        // console.log(event)
        props.filterCategories(event)
    }

    onFilterCategories()


    // props.sixieme(SixiemeActive)

    return (
    <div className="LateralNavbar">
        <Link to="/"><Logo /></Link>
        <ul>
            <div className='backgroundSelect' 
                    style = {SixiemeActive ? {marginTop:"0"} :
                    CinquiemeActive ? {marginTop:"115px"} :
                    QuatriemeActive ? {marginTop:"230px"} :
                    TroisiemeActive ? {marginTop:"345px"} :
                    null }
            ></div>
            <li onClick={() => {sixiemeActive(); onFilterCategories("sixieme") }} className={`${SixiemeActive ? "active" : "null"}`} ><Sixieme /></li>
            <li onClick={() => {cinquiemeActive(); onFilterCategories("cinquieme")}} className={`${CinquiemeActive ? "active" : "null"}`}><Cinquieme /></li>
            <li onClick={() => {quatriemeActive(); onFilterCategories("quatrieme")}} className={`${QuatriemeActive ? "active" : "null"}`}><Quatrieme /></li>
            <li onClick={() => {troisiemeActive(); onFilterCategories("troisieme")}} className={`${TroisiemeActive ? "active" : "null"}`}><Troisieme /></li>
        </ul> 
    </div>
    );
}

export default LateralNavbar;
