import "../../index.scss";
import "./caption.scss";

function CaptionSkelet({ children }) {
  return <div className="caption">{children}</div>;
}

export default function Caption({ title, location, tags }) {
  return (
    <CaptionSkelet>
      <h2 className="caption__title">{title}</h2>
      <p className="caption__location">{location}</p>
      <div className="tags">{tags}</div>
    </CaptionSkelet>
  );
}
