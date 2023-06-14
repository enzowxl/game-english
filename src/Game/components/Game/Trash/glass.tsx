import React, { useContext, useState } from 'react'

import {
  HEAD_PERSON,
  TILE_SIZE
} from '../../../constants/constants'

import { GlassContexts } from '../../../contexts/glass'


export default function Glass({ initialPosition }) {

  const glassContext = useContext(GlassContexts)

  const animate = glassContext.giveGlass.positions.find((position) => {
    const match = initialPosition.y === position.y
      &&
      initialPosition.x === position.x

    return match
  })

  const visible = animate ? null : 'url(./assets/glass2.png)'

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