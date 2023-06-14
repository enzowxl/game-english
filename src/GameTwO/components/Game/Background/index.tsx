import React, { useContext } from 'react'

import Person from '../Person'


import {
  GAME_SIZE,
  NUMBER_OBJECTS
} from '../../../constants/constants'

import { canvas } from '../../../contexts/canvas/helper'

import Petroleum from '../Enemie'
import Bottle from '../Trash/bottle'
import Shake from '../Trash/shake'




function getMap() {

  const tilesComponent = []

  for (let y = 0; y < canvas.length; y++) {

    const canvasY = canvas[y]

    for (let x = 0; x < canvasY.length; x++) {

      const canvaYX = canvasY[x]

      const position = {
        x: x,
        y: y
      }

      const text = canvas[y][x] || canvaYX

      const key = `${x}-${y}`

      if (text === NUMBER_OBJECTS.HERO) {

        tilesComponent.push(
          <Person
            key={key}
            initialPosition={position}
          />

        )
      }

      if (text === NUMBER_OBJECTS.PETROLEUM){
        tilesComponent.push(
          <Petroleum
            key={key}
            initialPosition={position}
          />
        )
      }

      if (text === NUMBER_OBJECTS.BOTTLE){
        tilesComponent.push(
          <Bottle
            key={key}
            initialPosition={position}
          />
        )
      }

      if (text === NUMBER_OBJECTS.SHAKE){
        tilesComponent.push(
          <Shake
            key={key}
            initialPosition={position}
          />
        )
      }


    }

  }

  return tilesComponent

}

const elements = getMap()


export default function BackGround() {



  return (

    <div>

      {elements}

      {/*

        paperContext.totalPapers 
        === 
        paperContext.givePapers.total
        &&
        bananaContext.totalBananas
        === 
        bananaContext.giveBananas.total

        ? 

        
        null
        

        :

        null
        
    */}

    {

      <img
      style={{
        position:'absolute',
        left:45,
        bottom:75,
        width:200
      }}
      src='./assets/truck2.png'
      alt=''
      />

    }



      <img
        src='./assets/back2.gif'
        alt=''
        width={GAME_SIZE}
        height={GAME_SIZE}
      />

    </div>

  )

}