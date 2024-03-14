// Photos.js
import React, { useState } from 'react';
// import { Masonry } from "react-plock";
import Masonry from '@mui/lab/Masonry';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import imageData from './imageData'

const Photos = ({ setModel, setTempImgSrc, getImagePath, setActiveIndex, activeIndex }) => {


    const Label = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const getImg = (imgSrc, index) => {
        setTempImgSrc(imgSrc);
        setModel(true);
        setActiveIndex(index); // Make sure to update activeIndex when a new image is clicked
    };


    return (
        <>
            <Masonry columns={{ xs: 3, sm: 5, md: 5 }} spacing={2}>               
            {imageData.map((item, index) => {
                // Determine the number of columns based on filename
                const columns = item.startsWith("HOR") ? true : false;
                return (
                    <div key={index} style={{ /* Add inline style to override default styling */ }}>
                        <img
                            className="teste"
                            onClick={() => getImg(getImagePath(item, index), index)}
                            src={getImagePath(item)}
                            loading="lazy"
                            alt='img'
                            style={{
                                display: 'block',
                                width: '100%',
                            }}
                        />
                    </div>
                );
            })}
            </Masonry>


        </>
    );
};

// return (
//     <Masonry
//         items={imageData}
//         style={{ marginRight: "16px" }}
//         config={{
//             columns: [4],
//             gap: [3],
//             media: [1024],
//         }}
//         render={(item, idx) => (
//             <div style={{ position: "relative", marginTop: '-3px' }} key={idx}>
//                 <img
//                     onClick={() => getImg('https://svenzj.github.io/portfolio/static/media/' + item)}
//                     src={'https://svenzj.github.io/portfolio/static/media/' + item}
//                     style={{ width: "100%", height: "auto" }}
//                 />
//                 <Label style={{ position: "absolute", top: "8px", left: "8px" }}>{imageData.indexOf(item) + 1}</Label> 
//             </div>
//         )}
//     />
// );
//};

export default Photos;
