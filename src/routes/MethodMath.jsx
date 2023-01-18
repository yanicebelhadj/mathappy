import "../css/MethodMath.styles.css"
import Tick from "../icons/Tick"
import CheckList from "../icons/CheckList"

function MethodMath(){
    return(
        <div className="method-math">
            <h1><span className="h1-m highlighth1">Décomposer un nombre décimal en fractions décimales</span></h1>
            <h2><span className="h2-m-semi-bold highlighth2">Passer d’une écriture à une autre</span></h2>
            <div className="methode">
                <CheckList />
                <div className="text-area">
                    <p className="p-l-medium">Par exemple, on nous demande d’écrire 23 + 6/1000 sous forme d’une seule fraction décimale.</p>
                    <ul>
                        <li>
                            <Tick />
                            <p className="p-l-regular">Il faudra alors placer dans un tableau chaque chiffre à la bonne position, en veillant à placer la virgule après le chiffre des unités.</p>
                        </li>
                        <li>
                            <Tick />
                            <p className="p-l-regular">Lire le nombre dans l’écriture demandée: 23 006/ 1000</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MethodMath