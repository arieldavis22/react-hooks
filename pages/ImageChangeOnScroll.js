import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll'

const ImageChangeOnScroll = () => {
    return (  
        <div>
            {[1, 2].map(speakerId => {
                return (
                    <div key={speakerId}>
                        <ImageToggleOnScroll 
                            primaryImg={`/static/bw/speaker${speakerId}.jpg`}
                            secondaryImg={`/static/speaker${speakerId}.jpg`}
                            alt=""
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default ImageChangeOnScroll;