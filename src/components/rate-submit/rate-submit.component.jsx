import Star from "../../icons/StarSubmit";
import "./rate-submit.styles.css"

function rateSubmit() {
  return (
    <div className="rate-submit">
      <div className="rate">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <div className="submit-your-rate"><p>Soumettre la note</p></div>
    </div>
  );
}

export default rateSubmit;
