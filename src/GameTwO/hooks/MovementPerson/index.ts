import React, {
  useContext,
    useState
} from 'react'

import { useNavigate } from 'react-router-dom'

import useEventListener from '@use-it/event-listener'

import { checkMovement, handleNextPosition } from '../../contexts/canvas/helper'

import { DIRECTIONS, PERSONS } from '../../constants/constants'

import { CanvasContext } from '../../contexts/canvas'
import { StepsContexts } from '../../contexts/steps'
import { LifeContexts } from '../../../context/Life'
import { BottleContexts } from '../../contexts/bottle'
import { ShakeContexts } from '../../contexts/shake'




export default function usePersonMovement(initialPosition) {

    const navigate = useNavigate()

    const canvasContext = useContext(CanvasContext)

    const stepsContext = useContext(StepsContexts)

    const LifesContext = useContext(LifeContexts)

    const bottleContext = useContext(BottleContexts)

    const shakeContext = useContext(ShakeContexts)

    const [PersonPosition, setPersonPosition] = useState(initialPosition)
    const [direction, setDirection] = useState(DIRECTIONS.LEFT)



    useEventListener('keydown', (event: any) => {

      const direction = event.key as DIRECTIONS

      if(event.key.indexOf('Arrow') === -1){
        return
      }


      const movement = canvasContext.updateCanvas(direction, PersonPosition,PERSONS.PERSON)

      if (direction === DIRECTIONS.LEFT || direction === DIRECTIONS.RIGHT) {
        setDirection(direction);
      }

      if(movement.nextMove.valid){
        setPersonPosition(movement.nextPosition)
        stepsContext.updateSteps()
      }

      if(movement.nextMove.bottle){
        bottleContext.updateBottle(movement.nextPosition)
      }

      if(movement.nextMove.shake){
        shakeContext.updateShake(movement.nextPosition)
      }


      if(
        bottleContext.totalBottle 
        === 
        bottleContext.giveBottle.total
        &&
        shakeContext.totalShake
        ===
        shakeContext.giveShake.total
        &&
        movement.nextMove.truck){
        navigate('/game-3')
      }

      if(movement.nextMove.dead){
        LifesContext.updateLifes()
      }

      if(stepsContext.steps <= 0){
        LifesContext.updateLifes()
      }

    })

    return {
      position: PersonPosition,
      direction: direction
    }
    
}