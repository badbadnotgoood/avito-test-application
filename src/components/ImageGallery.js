import React, {useEffect, useRef, useState} from "react";
import '../css/ImageGallery.css'

const ImageGallery = (props) => {
    const item = props.item;
    const [originalImg, setOriginalImg] = useState(item.screenshots[0].path_full);
    const thumbnailContainer = useRef();
    useEffect(() => {
        setOriginalImg(item.screenshots[0].path_full);
        thumbnailContainer.current.scrollTo({left: 0});
    }, [item])
    let imgs = [];
    item.screenshots.forEach((el) => {
        let tempImg = {
            original: el.path_full,
            thumbnail: el.path_thumbnail
        }
        imgs.push(tempImg);
    });
    return (
        <div className="description__img-container">
            <img className="description__original" src={originalImg} alt="Original Size"/>
            <div className="description__thumbnail-container" id="thumbnail-container" ref={thumbnailContainer}>
                {imgs.map((el, i) => (
                    <img
                        key={i}
                        src={el.thumbnail}
                        className="description__thumbnail"
                        onClick={() => {
                            setOriginalImg(el.thumbnail);
                        }}
                        alt="Thumbnail Size"
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;