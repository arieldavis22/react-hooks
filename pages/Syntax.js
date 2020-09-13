import React, { useEffect } from 'react';

const Syntax = () => {

    useEffect(() => {
        console.log("in effect");
        return () => {
            console.log("in effect cleanup");
            
        }
    }, [])

    return (  
        <div></div>
    );
}
 
export default Syntax;