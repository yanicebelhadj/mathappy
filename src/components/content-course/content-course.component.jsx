import DiscoverTheWorld from "../../icons/DiscoverTheWorld"
import Exercices from "../../icons/Exercices"
import Fiche from "../../icons/Fiche"
import Kezako from "../../icons/Kezako"
import Video from "../../icons/Video"

import "./content-course.styles.css"
function contentCourse(){
    return(
        <div className="content-course">
            <p className="p-l-bold">Ce cours comprend:</p>
            <ul>
                <li>
                    <Video /> 
                    <div className="text-area">
                        <p className="p-m-semi-bold">Video</p>
                        <p className="description p-xs-medium">Ce cours présente une vidéo</p>
                    </div>
                </li>
                <li>
                    <Fiche />
                    <div className="text-area">
                        <p className="p-m-semi-bold">Fiche</p>
                        <p className="description p-xs-medium">Pour avoir toutes les clés pour retenir tout ce que tu compris </p>
                    </div>
                </li>
                <li>
                    <Kezako />
                    <div className="text-area">
                        <p className="p-m-semi-bold">T'as capté ?</p>
                        <p className="description p-xs-medium">Quoi de mieux qu’un cours expliqué par un autre élève</p>
                    </div>
                </li>
                <li>
                    <Exercices />
                    <div className="text-area">
                        <p className="p-m-semi-bold">Exercices</p>
                        <p className="description p-xs-medium">Rien de mieux pour te tester que de faire des exercices</p>
                    </div>
                </li>
                <li>
                    <DiscoverTheWorld />
                    <div className="text-area">
                        <p className="p-m-semi-bold">Top Math</p>
                        <p className="description p-xs-medium">Comprends les maths à travers le monde</p>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

export default contentCourse