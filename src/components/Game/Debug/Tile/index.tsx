import React from 'react';

import { 
    TILE_SIZE,
    NUMBER_OBJECTS
} from '../../../../constants/constants';


export default function Tile({ position, text }) {

    function getColor() {

        switch(text){
            case NUMBER_OBJECTS.FLOOR:
                return 'gray'
            case NUMBER_OBJECTS.WALL:
                return 'yellow'
            case NUMBER_OBJECTS.BIN:
                return 'white'
            case NUMBER_OBJECTS.PAPER:
                return 'cyan'
            case NUMBER_OBJECTS.BANANA:
                return 'orange'
            case NUMBER_OBJECTS.HERO:
                return 'red'
        }
        
    }

    const color = getColor()

    return (

        <div
        style={{
            position:'absolute',

            left: TILE_SIZE * position.x,
            top: TILE_SIZE * position.y,

            width: TILE_SIZE,
            height: TILE_SIZE,

            border: `2px solid ${color}`,

            color: color,
            fontSize:32,
            
            zIndex: 99
        }}
        >

            {text}
            
        </div>

    );

}
