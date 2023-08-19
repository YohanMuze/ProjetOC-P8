function HostSkelet({ children }) {
  return <div className="host">{children}</div>;
}

export default function Host({ firstName, lastName, src }) {
  return (
    <HostSkelet>
      <div className="portrait">
        <div className="portrait__name">
          <p className="portrait__name__p">{firstName}</p>
          <p className="portrait__name__p">{lastName}</p>
        </div>
        <img
          className="portrait__img"
          src={src}
          alt={firstName + lastName}
        ></img>
      </div>
    </HostSkelet>
  );
}
