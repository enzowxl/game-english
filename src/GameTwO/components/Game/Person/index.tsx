import React, {
  useState,
} from 'react'
import './style.css'

import { 
  DIRECTIONS,
  HEAD_PERSON,
  TILE_SIZE 
} from '../../../constants/constants'

import usePersonMovement from '../../../hooks/MovementPerson'


export default function Person({ initialPosition }) {

    const { direction, position } =  usePersonMovement(initialPosition)

    const person = 
    position.y <= 14 
    ? 
    'url(./assets/aa.png)' 
    : 
    'url(./assets/person.png)'

    const second = 
    position.y <= 14 
    ? 
    3
    : 
    1

    return(

          <div 
          style={{
            position:'absolute',

            top: TILE_SIZE * position.y - HEAD_PERSON,
            left:TILE_SIZE * position.x,
            
            width:TILE_SIZE,
            height:TILE_SIZE + HEAD_PERSON,

            backgroundRepeat: 'no-repeat',
            backgroundImage: person,
            backgroundPosition: `0px -${TILE_SIZE - HEAD_PERSON}px`,

            animation: `person-animation ${second}s steps(4) infinite`,

           
            transform: `scaleX(${
              direction 
              === 
              DIRECTIONS.RIGHT 
              ? 
              1 
              : 
              -1
            })`,

            zIndex:3
            
          }}
          />

    )
    
}