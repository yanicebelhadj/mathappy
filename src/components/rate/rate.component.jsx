import Star from "../../icons/Star";

import "./rate.styles.css"
function Rate(){
    return(
        <div className="rate">
            <div className="result-rate-star">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <p className="result-rate p-xs-bold">5.0</p>
            <p className="nb-rates p-xs-semi-bold">200 notes</p>
        </div>
    )
}

export default Rate