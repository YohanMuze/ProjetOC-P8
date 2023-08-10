import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRef } from "react";

export default function Collapse({ layout, title, content }) {
  const [open, setOpen] = useState(false);
  //const contentRef = useRef(0);
  const contentRef = useRef(false);
  console.log(contentRef.current);
  if (contentRef.current) console.log(contentRef.current.scrollHeight);
  function handleClick() {
    open ? setOpen(false) : setOpen(true);
    contentRef.current
      ? (contentRef.current = true)
      : (contentRef.current = false);
  }

  return (
    <div className={layout}>
      <div className="collapse">
        <div className="collapse__header">
          <p>{title}</p>
          <FontAwesomeIcon
            className="collapse__header__icon"
            icon={faAngleUp}
            onClick={handleClick}
          />
        </div>
        {open && (
          <div
            className="collapse__box"
            ref={contentRef}
            style={
              open
                ? { height: contentRef.current.scrollHeight + "px" }
                : { height: "0px" }
            }
          >
            <p className="collapse__box__p">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
}
