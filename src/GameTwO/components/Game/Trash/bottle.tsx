import React, { useContext, useState } from 'react'

import {
  HEAD_PERSON,
  TILE_SIZE
} from '../../../constants/constants'

import { BottleContexts } from '../../../contexts/bottle'


export default function Bottle({ initialPosition }) {

  const bottleContext = useContext(BottleContexts)

  const animate = bottleContext.giveBottle.positions.find((position) => {
    const match = initialPosition.y === position.y
      &&
      initialPosition.x === position.x

    return match
  })

  const visible = animate ? null : 'url(./assets/bottle.png)'

  const generateRandomScaleX = () => {
    return Math.random() < 0.5 ? -1 : 1;
  };

  const randomScaleX = generateRandomScaleX();

  console.log(randomScaleX)

  return (

          <div
            style={{
              position: 'absolute',

              top: TILE_SIZE * initialPosition.y,
              left: TILE_SIZE * initialPosition.x,

              width: 74,
              height: 48,

              backgroundRepeat: 'no-repeat',
              backgroundImage: visible,

              zIndex: 2,

              //transform: `scaleX(${randomScaleX})`


            }}
          />

  )

}