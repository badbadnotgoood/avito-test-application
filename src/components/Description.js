import React from "react";
import ImageGallery from "./ImageGallery";
import '../css/Description.css';

const Description = (props) => {
    const item = props.item;
    const originalImg = props.img;
    return (
        <div className="description">
            <p className="description__name">{item.name}</p>
            {"screenshots" in item &&
            <ImageGallery image={originalImg} item={item}/>
            }
            {item.short_description !== '' &&
            <div className="description__description">
                {item.short_description}
            </div>
            }
            {"release_date" in item &&
            item.release_date.date !== '' &&
            <div className="description__releaseDate-container">
                <p className="description__releaseDate-first">ДАТА ВЫХОДА:</p>
                <p className="description__releaseDate-second">
                    {item.release_date.coming_soon ?
                        "SOON" :
                        item.release_date.date
                    }
                </p>
            </div>
            }
            {"platforms" in item &&
            <>
                <p className="description__platform-first">ПЛАТФОРМЫ:</p>
                <div className="description__platform-container">
                    {item.platforms.linux && <p className="description__platform-second">Linux</p>}
                    {item.platforms.mac && <p className="description__platform-second">Mac</p>}
                    {item.platforms.windows && <p className="description__platform-second">Windows</p>}
                </div>
            </>
            }
            {"genres" in item &&
            <>
                <p className="description__genre-first">ЖАНР:</p>
                <div className="description__genre-container">
                    {item.genres.map((el, i) => (
                        <p key={i} className="description__genre-second">{el.description}</p>
                    ))}
                </div>
            </>
            }
            {"developers" in item &&
            <>
                <p className="description_developer-first">РАЗРАБОТЧИКИ:</p>
                <div className="description__developer-container">
                    {item.developers.map((el, i) => (
                        <p key={i} className="description_developer-second">{el}</p>
                    ))}
                </div>
            </>
            }
            {item.publishers[0] !== '' &&
            <>
                <p className="description__publichers-first">ИЗДАТЕЛИ:</p>
                <div>
                    {item.publishers.map((el, i) => (
                        <p key={i} className="description__publichers-second">{el}</p>
                    ))}
                </div>
            </>
            }
        </div>
    );
}

export default Description;