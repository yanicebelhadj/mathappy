import { Link } from "react-router-dom";
import Heart from "../../icons/Heart";
// import Thumbnail from "../../media/Thumbnail.png"

import "./capsule.styles.css";

function capsule(props) {
  return (
    <div className="capsule">
      <img src={props.thumbnail} className="thumbnail" alt="thumbnail" />
      
      <div className="cta">
        <div className="preliminary-cta">
          <Link to="La-fiche" className="fiche-cta"><p className="p-m-medium">Voir la fiche</p></Link>
          <div className="register-course">
            <Heart />
            <p className="p-m-semi-bold">Enregistrer ce cours</p>
          </div>
        </div>
        <Link to="Le-cours" className="course-cta p-m-medium">Voir le cours</Link>
      </div>
      
      <div className="content-course"></div>
    </div>
  );
}

export default capsule;
