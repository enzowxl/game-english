import React from 'react';


export default function Buttons({ name, func, top }) {


    return (

        <button
        onClick={func}
        style={{
            position:'absolute',
            top:top,
            backgroundColor: '#BB9362',
            width: 482,
            height: 82,
            borderRadius:100,
            fontWeight:'600',
            color:'white',
            fontSize:20,
        }}
        >{name}</button>

    );
}

