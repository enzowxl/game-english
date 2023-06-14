import React, { useContext } from 'react'

import Person from '../Person'
import Paper from '../Trash/paper'
import Banana from '../Trash/banana'
import Trap from '../Trap'
import Plastic from '../Trash/plastic'
import Metal from '../Trash/metal'
import Glass from '../Trash/glass'

import {
  GAME_SIZE,
  NUMBER_OBJECTS
} from '../../../constants/constants'

import { canvas } from '../../../contexts/canvas/helper'

import { PapersContexts } from '../../../contexts/papers'
import { BananasContexts } from '../../../contexts/banana'
import { GlassContexts } from '../../../contexts/glass'
import { PlasticContexts } from '../../../contexts/plastic'
import { MetalContexts } from '../../../contexts/metal'





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

      
      if (text === NUMBER_OBJECTS.TRAP) {

        tilesComponent.push(
          <Trap
            key={key}
            initialPosition={position}
          />

        )
      }

      if (text === NUMBER_OBJECTS.GLASS) {

        tilesComponent.push(
          <Glass
            key={key}
            initialPosition={position}
          />

        )
      }

      if (text === NUMBER_OBJECTS.METAL) {

        tilesComponent.push(
          <Metal
            key={key}
            initialPosition={position}
          />

        )
      }

      if (text === NUMBER_OBJECTS.PLASTIC) {

        tilesComponent.push(
          <Plastic
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

  const glassContext = useContext(GlassContexts)

  const plasticContext = useContext(PlasticContexts)

  const metalContext = useContext(MetalContexts)



  return (

    <div>

      {elements}

      {

        glassContext.totalGlass 
        === 
        glassContext.giveGlass.total

        ? 

        (
          <img
          style={{
            position:'absolute',
            right:55,
            top:10
          }}
          src='./assets/green-open.png'
          alt=''
          />
        )

        :

        (
          <img
          style={{
            position:'absolute',
            right:55,
            top:22
          }}
          src='./assets/green-closed.png'
          alt=''
          />
        )
      }

      {

      plasticContext.totalPlastic 
      === 
      plasticContext.givePlastic.total

      ? 

      (
        <img
        style={{
          position:'absolute',
          right:150,
          top:10
        }}
        src='./assets/red-open.png'
        alt=''
        />
      )

      :

      (
        <img
        style={{
          position:'absolute',
          right:150,
          top:22
        }}
        src='./assets/red-closed.png'
        alt=''
        />
      )
      }

      {

      paperContext.totalPapers 
      === 
      paperContext.givePapers.total

      ? 

      (
        <img
        style={{
          position:'absolute',
          right:245,
          top:10
        }}
        src='./assets/blue-open.png'
        alt=''
        />
      )

      :

      (
        <img
        style={{
          position:'absolute',
          right:245,
          top:22
        }}
        src='./assets/blue-closed.png'
        alt=''
        />
      )
      }

      {

      bananaContext.totalBananas 
      === 
      bananaContext.giveBananas.total

      ? 

      (
        <img
        style={{
          position:'absolute',
          right:340,
          top:10
        }}
        src='./assets/brown-open.png'
        alt=''
        />
      )

      :

      (
        <img
        style={{
          position:'absolute',
          right:340,
          top:22
        }}
        src='./assets/brown-closed.png'
        alt=''
        />
      )
      }

      {

      metalContext.totalMetal 
      === 
      metalContext.giveMetal.total

      ? 

      (
        <img
        style={{
          position:'absolute',
          right:440,
          top:10
        }}
        src='./assets/yellow-open.png'
        alt=''
        />
      )

      :

      (
        <img
        style={{
          position:'absolute',
          right:440,
          top:22
        }}
        src='./assets/yellow-closed.png'
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