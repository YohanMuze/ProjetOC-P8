import ArrowUp from "../../assets/Arrow_Up.png";
import { useState } from "react";
import { useRef } from "react";

export default function Collapse({ layout, title, content }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(false);

  function openCollapse() {
    setOpen(!open);
  }

  function onKeyEnter(e) {
    if (e.keyCode === 13) {
      openCollapse();
    }
  }

  return (
    <div className={layout}>
      <div className="collapse">
        <div className="collapse__header">
          <p>{title}</p>
          <img
            className={
              open ? "collapse__header__icon--rotate" : "collapse__header__icon"
            }
            src={ArrowUp}
            onClick={openCollapse}
            tabIndex={0}
            onKeyUp={onKeyEnter}
            alt={"cliquer pour faire dérouler"}
          />
        </div>
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
      </div>
    </div>
  );
}
