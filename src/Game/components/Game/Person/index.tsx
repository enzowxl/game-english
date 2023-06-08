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

    return(

          <div 
          style={{
            position:'absolute',

            top: TILE_SIZE * position.y - HEAD_PERSON,
            left:TILE_SIZE * position.x,
            
            width:TILE_SIZE,
            height:TILE_SIZE + HEAD_PERSON,

            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(./assets/person.png)',
            backgroundPosition: `0px -${TILE_SIZE - HEAD_PERSON}px`,

            animation: 'person-animation 1s steps(4) infinite',

            transform: `scaleX(${
              direction 
              === 
              DIRECTIONS.LEFT 
              ? 
              -1 
              : 
              1
            })`,

            zIndex:3
            
          }}
          />

    )
    
}