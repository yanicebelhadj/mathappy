import Rate from "../../components/rate/rate.component"
import RateSubmit from "../../components/rate-submit/rate-submit.component"
import Download from "../../icons/Download"
import Fiche from "../../media/Fiche.png"

import "./FichePage.styles.css"
import { useSelector } from "react-redux"

function FichePage(){
    const menu = useSelector(state=> state.menu.open)

    return(
        <div className={`fiche-page ${menu ? "container-menuOpen" : "container"}`}>
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