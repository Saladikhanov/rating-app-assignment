import React from 'react';
import Rating from "./Rating";


const Hero = ({name, single, rating, coverUrl, color}) => {
    return (
        <>
            <img src={coverUrl} alt="cover"/>
            <div>
                <h2>{name}</h2>
                <p>{single}</p>
                <Rating rating={rating}/>
            </div>
        </>
    );
};

export default Hero;