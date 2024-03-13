import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import imageData from "./imageData";
import "./gallery.css";

const Gallery = () => {
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImagePath = (fileName) => {
        return require(`./img/${fileName}`);
    };

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="enlarged" />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className="gallery">
                {imageData.map((fileName, index) => (
                    <div className="pics" key={index} onClick={() => getImg(getImagePath(fileName))}>
                        <img src={getImagePath(fileName)} alt="thumbnail" style={{ width: '100%' }} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;
