import { Link } from "react-router-dom";


export default function Cards({url, alt, caption}) {
    return (
        <Link className="gallery-card">
        <img className="gallery-card__img" src={url} alt={alt}></img>
        <figcaption className="gallery-card__caption" >{caption}</figcaption>
        <div className="gallery-card__shadow"></div>
        </Link>
    )
}
