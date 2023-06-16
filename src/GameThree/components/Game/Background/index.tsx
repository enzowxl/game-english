import React, { useContext, useState } from 'react'

import Person from '../Person'


import {
  GAME_SIZE,
  NUMBER_OBJECTS
} from '../../../constants/constants'

import { canvas } from '../../../contexts/canvas/helper'

import Modal from '../Modal'

import Modal2 from '../Modal2'
import Fire from '../Fire'



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

      if (text === NUMBER_OBJECTS.FIRE) {

        tilesComponent.push(
          <Fire
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

  const [modalVisible, setModalVisible] = useState(true)
  const [modalVisible2, setModalVisible2] = useState(false)



  return (

    <div>

      {elements}


      {
        modalVisible &&
        <Modal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        modalVisible2={modalVisible2}
        setModalVisible2={setModalVisible2}
        />
      }

      {
        modalVisible2 &&
        <Modal2
        modalVisible={modalVisible2}
        setModalVisible={setModalVisible2}
        />

      }



      <img
        src='./assets/back3.gif'
        alt=''
        width={GAME_SIZE}
        height={GAME_SIZE}
      />

    </div>

  )

}