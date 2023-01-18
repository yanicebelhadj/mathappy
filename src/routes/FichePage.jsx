import Rate from "../components/rate/rate.component"
import RateSubmit from "../components/rate-submit/rate-submit.component"
import Download from "../icons/Download"
import Fiche from "../media/Fiche.png"

import "../css/FichePage.styles.css"

function FichePage(){
    return(
        <div className="fiche-page">
            <img src={Fiche} alt="fiche" />
            <div className="button-area">
                <div className="download-button"><Download /><p className="p-m-semi-bold">Télécharger la fiche</p></div>
                <Rate />
                <RateSubmit />
            </div>
        </div>
    )
}

export default FichePage