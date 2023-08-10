import HeroPng from "../../assets/Hero.png"

function Hero({ url=HeroPng, caption="Chez vous, partout et ailleurs"}) {
    return (
        <figure className="hero">
            <img className="hero__img" src={url} alt="Paysage côtier"></img>
            <div className="hero__shadow"></div>
            <h1 className="hero__caption">{caption}</h1>
        </figure>
    )
}

export default Hero