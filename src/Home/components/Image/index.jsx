import React from 'react';
import './style.css'

export default function Image() {
    return (

        <div 
        style={{
          position:'absolute',

          top: 200,
          
          width:48,
          height:48 + 12,

          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(./assets/person.png)',
          backgroundPosition: `0px -${48 - 12}px`,

          animation: 'image-animation 1s steps(4) infinite',


          zIndex:3
          
        }}
        />
        
    );
}        