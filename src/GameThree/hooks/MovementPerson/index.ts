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




export default function usePersonMovement(initialPosition) {

    const navigate = useNavigate()

    const canvasContext = useContext(CanvasContext)


    const LifesContext = useContext(LifeContexts)

    const stepsContext = useContext(StepsContexts)

    const [PersonPosition, setPersonPosition] = useState(initialPosition)
    const [direction, setDirection] = useState(DIRECTIONS.RIGHT)



    useEventListener('keydown', (event: any) => {

      const direction = event.key as DIRECTIONS

      if(event.key.indexOf('Arrow') === -1){
        return
      }




      const movement = canvasContext.updateCanvas(direction, PersonPosition,PERSONS.PERSON)

      if (direction === DIRECTIONS.LEFT || direction === DIRECTIONS.RIGHT) {
        //setDirection(direction);
      }

      if(movement.nextMove.valid){
        //setPersonPosition(movement.nextPosition)
        //stepsContext.updateSteps()
      }



      /*if(
        papersContext.totalPapers 
        === 
        papersContext.givePapers.total
        &&
        bananaContext.totalBananas
        === 
        bananaContext.giveBananas.total
        &&
        glassContext.totalGlass
        ===
        glassContext.giveGlass.total
        &&
        plasticContext.totalPlastic
        ===
        plasticContext.givePlastic.total
        &&
        metalContext.totalMetal
        ===
        metalContext.giveMetal.total
        &&
        movement.nextMove.bin){
        navigate('/game-2')
      }*/

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