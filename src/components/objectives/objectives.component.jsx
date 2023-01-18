import Tick from "../../icons/Tick"

import "./objectives.styles.css"
function Objectives(props){
    return(
        <div className="objectives">
            <p className="p-l-bold">Les objectifs pour cette compétences sont:</p>
            <ul className="list-objectives">
                {
                    props.competences ?
                    props.competences.map(competence => {
                        return(
                            <li key={competence}>
                                <Tick />
                                <p className="p-s-medium">{competence}</p>
                            </li>
                        )
                    })
                    :null
                }
            </ul>
        </div>
    )
}

export default Objectives