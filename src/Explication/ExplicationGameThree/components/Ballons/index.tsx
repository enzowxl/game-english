import React from 'react';

function Ballon({
    ballon,
}) {

    if(ballon === 1){
        return (
            <img
            alt=''
            src='../assets/game3-ballon1.png'
            style={{
                top:230,
                right:420,
                position:'absolute',
                height:200
            }}
            />
        );
    }else if(ballon === 2){
        return (
            <img
            alt=''
            src='../assets/game3-ballon2.png'
            style={{
                top:230,
                right:420,
                position:'absolute',
                height:200
            }}
            />
        );
    }else if(ballon === 3){
        return (
            <img
            alt=''
            src='../assets/game3-ballon3.png'
            style={{
                top:230,
                right:420,
                position:'absolute',
                height:200
            }}
            />
        );
    }


}

export default Ballon