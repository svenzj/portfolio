import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import imageData from "./imageData";
import CloseIcon from '@mui/icons-material/Close';
import "./gallery.css";
const Gallery = () => {



    const Label = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const getImagePath = (fileName) => {
        return require(`./img/${fileName}`);
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
            <Box sx={{ minHeight: 829 }}>
                <Masonry columns={4} spacing={2}>
                    {imageData.map((item, index) => (
                        <div key={index}>
                            <Label>{index + 1}</Label>
                            {/* para ver o numero da foto por cima(ordem) */}
                            <img className="teste" onClick={() => getImg(getImagePath(item))}
                                srcSet={`${item}?w=162&auto=format&dpr=2 2x`}
                                src={getImagePath(item)}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    display: 'block',
                                    width: '100%',
                                }}
                            />
                        </div>
                    ))}
                </Masonry>
            </Box>
        </>
    );

};

export default Gallery;
