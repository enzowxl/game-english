import React, {
  useContext,
  useState
} from 'react'

import { DIRECTIONS, PERSONS } from '../../constants/constants'

import { CanvasContext } from '../../contexts/canvas'

import useInterval from '@use-it/interval'
import { LifeContexts } from '../../../context/Life'


export default function useEnemieMovement(initialPosition) {

  const canvasContext = useContext(CanvasContext)

  const lifesContext = useContext(LifeContexts)

  const [EnemiePosition, setEnemiePosition] = useState(initialPosition)
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT)

  
  useInterval(move, 1000)


  function move() {

    var random = Math.floor(Math.random() * 2)
    var Array = Object.values(DIRECTIONS)
    const randomDirection = Array[random]

    const movement = canvasContext.updateCanvas(randomDirection, EnemiePosition, PERSONS.ENEMIE)

    
    if (movement.nextMove.valid) {
      setEnemiePosition(movement.nextPosition)
      setDirection(randomDirection)
    }

    if(movement.nextMove.dead){
      lifesContext.updateLifes()
    }

  }


  return {
    position: EnemiePosition,
    direction: direction
  }

}