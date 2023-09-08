import "./gallery.scss";
import { useEffect, useState } from "react";
import Cards from "../Cards";
import { fetchLogementsJSON } from "../..";

function Gallery({ children }) {
  return <div className="gallery">{children}</div>;
}

export default function Gallerylayout() {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetchLogementsJSON().then((response) => {
      if (!ignore) {
        setDatas(response);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Gallery>
      {!!datas &&
        datas.map((card) => (
          <Cards
            key={card.id}
            id={card.id}
            url={card.cover}
            alt={card.title}
            caption={card.title}
          />
        ))}
    </Gallery>
  );
}
