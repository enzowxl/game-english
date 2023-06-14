import React from 'react';


export default function Buttons({ name, func, top }) {


    return (

        <button
        onClick={func}
        style={{
            position:'absolute',
            top:top,
            backgroundColor: 'white',
            width: 482,
            height: 82,
            borderRadius:100,
            fontWeight:'600',
            color:'black',
            fontSize:20,
            borderWidth:0
        }}
        >{name}</button>

    );
}

