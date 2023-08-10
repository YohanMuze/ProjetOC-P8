import Hero from "../../components/Hero";
import HeroImg from "../../assets/Hero_A_Propos.png";
import Collapse from "../../components/Collapse";

export default function APropos() {
  return (
    <>
      <Hero url={HeroImg} caption="" />
      <Collapse
        layout="collapse-apropos"
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les informations son régulièrement vérifiées par nos équipes."
      />
      <Collapse
        layout="collapse-apropos"
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Collapse
        layout="collapse-apropos"
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Collapse
        layout="collapse-apropos"
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des
                        ateliers sur la sécurité domestique pour nos hôtes."
      />
    </>
  );
}
