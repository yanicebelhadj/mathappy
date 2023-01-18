import "../css/CoursePage.styles.css"
import Example from "../icons/Example"
import Reminder from "../icons/Reminder"

function CoursePage(){
    return(
        <div className="course-page">
            <h1><span className="h1-m highlighth1">Décomposer un nombre décimal en fractions décimales</span></h1>
            <h2><span className="h2-m-semi-bold highlighth2">Fraction décimale</span></h2>        
            <p className="p-m-regular">Une <strong>fraction décimale</strong> est une fraction de dénominateur 10; 100; 1000 ....</p>    
            <div className="example">
                <Example />
                <div className="text-area">
                    <p className="p-m-regular"><strong>Exemple:</strong></p>
                    <p className="p-m-regular">5/1000 ; 43/10; 9246/100 sont des fractions décimales (elles se lisent “5 millièmes” ; “43 dixièmes” ; “9246 centièmes”)</p>
                </div>
            </div>
            <div className="reminder">
                <Reminder />
                <div className="text-area">
                    <p className="p-m-regular"><strong>Rappel:</strong></p>
                    <p className="p-m-regular">Le numérateur et le dénominateur d’une fraction sont des nombres entiers: 7/3 (7 est le numérateur et 3 le dénominateur)</p>
                </div>
            </div>
            <h2><span className="h2-m-semi-bold highlighth2">Les différentes écritures d’un nombre</span></h2>
            <p className="p-m-regular">Un <strong>nombre décimal</strong> peut s’écrire sous différentes formes.</p>
            <div className="example">
                <Example />
                <div className="text-area">
                    <p className="p-m-regular"><strong>Exemple:</strong></p>
                    <p className="p-m-regular">
                        Le nombre décimal 6,419 peut s’écrire:<br/>
                        6,419 --> écriture décimale<br/>
                        6419/1000 --> une seule fraction décimale<br/>
                        6 + 4/10 + 1/100 + 9/1000 --> un nombre entier et plusieurs fractions décimales<br/>
                        6 + 419/1000 --> Un nombre entier et une seule fraction décimale<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CoursePage