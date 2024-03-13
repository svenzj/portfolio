import React, { useState } from 'react';
import Box from '@mui/material/Box';
import imageData from "./imageData";
import CloseIcon from '@mui/icons-material/Close';

// import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress

import "./gallery.css";
import Photos from './Photos';
const Gallery = () => {

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

    const getImagePath = (fileName, index) => {
        return require(`./imagess/${fileName}`);
    };
    const nextImage = () => {
        const nextIndex = (activeIndex + 1) % imageData.length;
        setTempImgSrc(getImagePath(imageData[nextIndex], nextIndex));
        setActiveIndex(nextIndex);
    };

    const prevImage = () => {
        const prevIndex = (activeIndex - 1 + imageData.length) % imageData.length;
        setTempImgSrc(getImagePath(imageData[prevIndex], prevIndex));
        setActiveIndex(prevIndex);
    };


    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="enlarged" />
                <CloseIcon onClick={() => setModel(false)} />
                <button onClick={prevImage}>Previous</button>
                <button onClick={nextImage}>Next</button>
            </div >
            <Box sx={{ marginLeft: 2, minHeight: 829, marginRight: "16px" }}>
                <Photos
                    imageData={imageData}
                    setModel={setModel}
                    setTempImgSrc={setTempImgSrc}
                    setActiveIndex={setActiveIndex}
                    getImagePath={getImagePath}
                    activeIndex={activeIndex} // Pass activeIndex as a prop
                />
            </Box>

        </>
    );

};

export default Gallery;
