import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EmptyStar() {
  return (
    <FontAwesomeIcon
      className="empty-star fa-xl"
      icon={faStar}
      aria-hidden="true"
    />
  );
}

function FullStar() {
  return (
    <FontAwesomeIcon
      className="filled-star fa-xl"
      icon={faStar}
      aria-hidden="true"
    />
  );
}

function Rate({ rate, maxRate }) {
  let fullStar = [];
  let emptyStar = [];
  let srOnly = (
    <span className="sr-only">
      Note de {rate} sur {maxRate}
    </span>
  );

  for (let i = rate; i > 0; i--) {
    fullStar.push(<FullStar key={i} />);
  }

  for (let i = maxRate - rate; i > 0; i--) {
    emptyStar.push(<EmptyStar key={i} />);
  }

  return (
    <div className="rate-box">
      {fullStar}
      {emptyStar}
      {srOnly}
    </div>
  );
}
export { Rate };
