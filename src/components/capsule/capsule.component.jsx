import { Link } from "react-router-dom";
import Reservation from "../../icons/reservation.svg";

import "./capsule.styles.css";

function capsule(props) {
  return (
    <div className="capsule">
      <img src={props.thumbnail} className="thumbnail" alt="thumbnail" />
      
      <div className="cta">
        <div className="preliminary-cta">
          <Link to={{ pathname: `/maths/${props.id + "-" + props.slug}` }} className="course-cta p-m-medium">Voir le cours</Link>{/*  */}
          <a href="https://calendly.com/mathappy/cours-particulier" className="register-course">
            <img src={Reservation} alt="reserver un cours"/>
            <p className="p-m-semi-bold">Réserver un cours</p>
          </a>
        </div>
        
      </div>
      
      <div className="content-course"></div>
    </div>
  );
}

export default capsule;
