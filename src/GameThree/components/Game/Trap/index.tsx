import React, { useContext, useState } from 'react'
import './style.css'


import {
  HEAD_PERSON,
  TILE_SIZE
} from '../../../constants/constants'

export default function Trap({ initialPosition }) {


  return (

          <div
            style={{
              position: 'absolute',

              top: TILE_SIZE * initialPosition.y,
              left: TILE_SIZE * initialPosition.x,

              width: TILE_SIZE,
              height: TILE_SIZE + 12,

              backgroundRepeat: 'no-repeat',
              backgroundImage: 'url(./assets/trap-2.png)',
              backgroundPosition: `0px 0px`,

              animation: 'trap-animation 1s steps(8) infinite',

              zIndex: 2,


            }}
          />

  )

}