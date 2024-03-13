import React, { useState } from 'react';
import Box from '@mui/material/Box';
import imageData from "./imageData";
import CloseIcon from '@mui/icons-material/Close';

// import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress

import "./gallery.css";
import Photos from './Photos';
const Gallery = () => {

    const getImagePath = (fileName) => {
        return require(`./imagess/${fileName}`);
    };

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

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
            <Box sx={{ marginLeft: 2, minHeight: 829 }}>
                <Photos imageData={imageData} getImagePath={getImagePath} getImg={getImg} />
            </Box>

        </>
    );

};

export default Gallery;
