import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'

const ImageChangeOnMouseOver = () => {
    return (  
        <div>
            <ImageToggleOnMouseOver 
            primaryImg="static/bw/speaker1.jpg" 
            secondaryImg="static/speaker1.jpg"
            alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver 
            primaryImg="static/bw/speaker2.jpg" 
            secondaryImg="static/speaker2.jpg"
            alt="" />
        </div>
    );
}

export default ImageChangeOnMouseOver;