import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Caption from "../../components/Caption";
import Host from "../../components/Host";
import Collapse from "../../components/Collapse";
import { Rate } from "../../components/Rate";
import { fetchLogementsJSON } from "../..";

export default function FicheLogement() {
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
  console.log(datas);

  const { id } = useParams();
  var logement,
    firstName,
    lastName = [];
  if (datas) {
    const filtered = datas.filter(function (logement) {
      return logement.id === id;
    });
    logement = filtered[0];
    if (logement) {
      const names = logement.host.name.split(" ");
      firstName = names[0];
      lastName = names[1];
    }
  }

  return (
    <div className="fiche-logement">
      {datas && <Carousel arrayImg={logement.pictures} />}
      <div className="fiche-logement__details">
        <Caption
          title={datas && logement.title}
          location={datas && logement.location}
          tags={
            datas &&
            logement.tags.map((el) => (
              <p className="tags__card" key={el}>
                {el}
              </p>
            ))
          }
        />
        <div className="content">
          <Host
            firstName={datas && firstName}
            lastName={datas && lastName}
            src={datas && logement.host.picture}
          />
          <Rate rate={datas && logement.rating} maxRate={5} />
        </div>
      </div>
      <div className="fiche-logement__collapse">
        <Collapse
          layout="collapse-logement"
          title="Description"
          content={datas && logement.description}
        />
        <Collapse
          layout="collapse-logement"
          title="Équipements"
          content={
            datas && logement.equipments.map((el) => <li key={el}>{el}</li>)
          }
        />
      </div>
    </div>
  );
}
