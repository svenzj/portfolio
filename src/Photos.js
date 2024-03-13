// Photos.js
import React from 'react';
import Masonry from '@mui/lab/Masonry';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
const Photos = ({ imageData, getImagePath, getImg, }) => {

    // const Label = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(0.5),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));

    return (
        <>
            <Masonry columns={5} spacing={2} >
                {imageData.map((item, index) => (
                    <div key={index}>
                        {/* <Label>{index + 1}</Label> */}
                        {/* para ver o numero da foto por cima(ordem) */}
                        <img className="teste" onClick={() => getImg(getImagePath(item))}
                            // srcSet={`${item}?w=162&auto=format&dpr=2 2x`}
                            src={getImagePath(item)}
                            loading="lazy"
                            alt='img'
                            style={{
                                display: 'block',
                                width: '100%',
                            }}
                        />
                    </div>
                ))}
            </Masonry>

        </>
    );
};

export default Photos;
