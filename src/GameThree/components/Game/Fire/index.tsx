import React, { useContext, useState } from 'react'
import { TILE_SIZE } from '../../../constants/constants'
import { QuestionsContexts } from '../../../contexts/questions'


export default function Fire({ initialPosition }) {

  const questionContext = useContext(QuestionsContexts)

  return (

    <img
    alt=''
    src='./assets/fire.gif'
    style={{
      backgroundSize:'contain',
      width:questionContext.width,
      position:'absolute',
      left:TILE_SIZE * initialPosition.x,
      top:TILE_SIZE * initialPosition.y - questionContext.top ,
    }}
    />

  )

}