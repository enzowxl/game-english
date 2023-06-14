import React, {
    useState,
  } from 'react'
  import './style.css'
  
  import { 
    DIRECTIONS,
    HEAD_PERSON,
    TILE_SIZE,
  } from '../../../constants/constants'
  
import useEnemieMovement from '../../../hooks/MovementEnemies'
  
  
  export default function Petroleum({ initialPosition }) {
  
      const { position, direction } =  useEnemieMovement(initialPosition)
  
      return(
  
            <div 
            style={{
              position:'absolute',
  
              top: TILE_SIZE * position.y - HEAD_PERSON,
              left:TILE_SIZE * position.x,
              
              width:TILE_SIZE,
              height:TILE_SIZE + HEAD_PERSON,
  
              backgroundRepeat: 'no-repeat',
              backgroundImage: 'url(./assets/tubarao2.png)',
              backgroundPosition: `0px -${TILE_SIZE - HEAD_PERSON}px`,
  

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