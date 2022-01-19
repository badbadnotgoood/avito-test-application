import React from "react";
import '../css/ItemComponent.css';

const ItemComponent = (props) => {
    const el = props.el;
    const setClick = props.clickFunc;
    const setItem = props.itemFunc;
    return (
        <button
            className="item"
            onClick={() => {
                setClick(true);
                setItem(el);
            }}
        >
            <img
                alt="GameCapsule"
                src={el.images.capsule_231x87}
                className="item__img"
            />
            <div className="item__desk">
                <p className="item__name">
                    {el.name}
                </p>

                {"price_overview" in el ?
                    <p className="item__price">{el.price_overview.final / 100 + " " + el.price_overview.currency}</p> :
                    <p className="item__price-free">Бесплатно</p>}

                <div className="item__platform">
                    {el.platforms.linux && <p className="item__platform-el">Linux</p>}
                    {el.platforms.mac && <p className="item__platform-el">Mac</p>}
                    {el.platforms.windows && <p className="item__platform-el">Windows</p>}
                </div>
                <div className="item__genre">
                    {"genres" in el && el.genres.map((el, i) => (
                        i < 3 &&
                        <p key={i} className="item__genre-el">{el.description}</p>
                    ))}
                </div>
                {"metacritic" in el &&
                <div className="item__score-container">
                    <img
                        className="metacritic__img"
                        src="https://upload.wikimedia.org/wikipedia/commons/2/20/Metacritic.svg"
                        alt="Metacritic Logo"
                    />
                    <p className="metacritic__score">{el.metacritic.score}</p>
                </div>
                }
            </div>
        </button>
    );
}

export default ItemComponent;