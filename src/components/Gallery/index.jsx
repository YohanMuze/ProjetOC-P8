import Cards from "../Cards";
import datas from "../../datas/datas.js"

function Gallery({ children }) {
    return (
        <div className="gallery">
            {children}
        </div>
    )
}

export default function Gallerylayout() {
    const houses = datas;
    console.log(houses);
    return (
        <Gallery>
            {houses.map((card) =>
                <Cards 
                    key={card.id}
                    url={card.cover} 
                    alt={card.title}
                    caption={card.title}
                />
            )}
        </Gallery>
    )
}

