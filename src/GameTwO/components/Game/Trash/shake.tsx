import React, { useContext, useState } from 'react'

import {
  HEAD_PERSON,
  TILE_SIZE
} from '../../../constants/constants'

import { ShakeContexts } from '../../../contexts/shake'


export default function Shake({ initialPosition }) {

  const ShakeContext = useContext(ShakeContexts)

  const animate = ShakeContext.giveShake.positions.find((position) => {
    const match = initialPosition.y === position.y
      &&
      initialPosition.x === position.x

    return match
  })

  const visible = animate ? null : 'url(./assets/shake.png)'

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