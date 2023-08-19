import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";
import datas from "../../datas/datas";
import Caption from "../../components/Caption";
import Host from "../../components/Host";
import Collapse from "../../components/Collapse";
import { Rate } from "../../components/Rate";

export default function FicheLogement() {
  const { id } = useParams();
  const filtered = datas.filter(function (logement) {
    return logement.id === id;
  });
  const logement = filtered[0];
  console.log(logement);
  const names = logement.host.name.split(" ");
  const firstName = names[0];
  const lastName = names[1];

  return (
    <div className="fiche-logement">
      <Carousel arrayImg={logement.pictures} />
      <div className="fiche-logement__details">
        <Caption
          title={logement.title}
          location={logement.location}
          tags={logement.tags.map((el) => (
            <p className="tags__card" key={el}>
              {el}
            </p>
          ))}
        />
        <div className="content">
          <Host
            firstName={firstName}
            lastName={lastName}
            src={logement.host.picture}
          />
          <Rate rate={logement.rating} maxRate={5} />
        </div>
      </div>
      <div className="fiche-logement__collapse">
        <Collapse
          layout="collapse-logement"
          title="Description"
          content={logement.description}
        />
        <Collapse
          layout="collapse-logement"
          title="Équipements"
          content={logement.equipments.map((el) => (
            <li key={el}>{el}</li>
          ))}
        />
      </div>
    </div>
  );
}
