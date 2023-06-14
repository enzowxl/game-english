import React from 'react';
import './style.css'

export default function Image() {

    const TILE_SIZE = 48
    const HEAD = 12

    return (

        <div 
        style={{
          position:'absolute',

          top: 200,
          
          width:TILE_SIZE,
          height:TILE_SIZE + HEAD ,

          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(./assets/person.png)',
          backgroundPosition: `0px -${TILE_SIZE - HEAD}px`,

          animation: 'image-animation 1s steps(4) infinite',

          

          zIndex:3
          
        }}
        />
        
    );
}        