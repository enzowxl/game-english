import React, { useContext, useState } from 'react'

import {
  HEAD_PERSON,
  TILE_SIZE
} from '../../../constants/constants'

import { MetalContexts } from '../../../contexts/metal'


export default function Metal({ initialPosition }) {

  const metalContext = useContext(MetalContexts)

  const animate = metalContext.giveMetal.positions.find((position) => {
    const match = initialPosition.y === position.y
      &&
      initialPosition.x === position.x

    return match
  })

  const visible = animate ? null : 'url(./assets/metal2.png)'

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


            }}
          />

  )

}