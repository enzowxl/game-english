import React, { useContext } from 'react'

import Person from '../Person'
import Paper from '../Trash/paper'
import Banana from '../Trash/banana'

import {
  GAME_SIZE,
  NUMBER_OBJECTS
} from '../../../constants/constants'

import { canvas } from '../../../contexts/canvas/helper'

import { PapersContexts } from '../../../contexts/papers'
import { BananasContexts } from '../../../contexts/banana'



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

      if (text === NUMBER_OBJECTS.PAPER) {

        tilesComponent.push(
          <Paper
            key={key}
            initialPosition={position}
          />

        )
      }

      if (text === NUMBER_OBJECTS.BANANA) {

        tilesComponent.push(
          <Banana
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

  const paperContext = useContext(PapersContexts)

  const bananaContext = useContext(BananasContexts)



  return (

    <div>

      {elements}

      {

        paperContext.totalPapers 
        === 
        paperContext.givePapers.total
        &&
        bananaContext.totalBananas
        === 
        bananaContext.giveBananas.total

        ? 

        (
          <img
          style={{
            position:'absolute',
            right:0,
            top:20
          }}
          src='./assets/bin-open.png'
          alt=''
          />
        )

        :

        (
          <img
          style={{
            position:'absolute',
            right:0,
            top:20
          }}
          src='./assets/bin-closed.png'
          alt=''
          />
        )
      }



      <img
        src='./assets/back.gif'
        alt=''
        width={GAME_SIZE}
        height={GAME_SIZE}
      />

    </div>

  )

}