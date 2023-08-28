export default function Host({ firstName, lastName, src }) {
  return (
    <div className="host">
      <div className="host__portrait">
        <div className="host__portrait__name">
          <p className="host__portrait__name__p">{firstName}</p>
          <p className="host__portrait__name__p">{lastName}</p>
        </div>
        <img
          className="host__portrait__img"
          src={src}
          alt={firstName + lastName}
        ></img>
      </div>
    </div>
  );
}
