import React, {
  useContext,
    useState
} from 'react'

import { useNavigate } from 'react-router-dom'

import useEventListener from '@use-it/event-listener'

import { checkMovement, handleNextPosition } from '../../contexts/canvas/helper'

import { DIRECTIONS, PERSONS } from '../../constants/constants'

import { CanvasContext } from '../../contexts/canvas'
import { PapersContexts } from '../../contexts/papers'
import { BananasContexts } from '../../contexts/banana'
import { StepsContexts } from '../../contexts/steps'




export default function usePersonMovement(initialPosition) {

    const navigate = useNavigate()

    const canvasContext = useContext(CanvasContext)

    const papersContext = useContext(PapersContexts)

    const bananaContext = useContext(BananasContexts)

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
        setDirection(direction);
      }

      if(movement.nextMove.valid){
        setPersonPosition(movement.nextPosition)
        console.log(stepsContext.steps)
        stepsContext.updateSteps()
      }

      if(movement.nextMove.paper){
        papersContext.updatePapers(movement.nextPosition)
      }

      if(movement.nextMove.banana){
        bananaContext.updateBananas(movement.nextPosition)
      }

      if(movement.nextMove.dead){
        navigate('/dead')
        window.location.reload()
      }

      if(stepsContext.steps <= 0){
        navigate('/dead')
        window.location.reload()
      }

      if(
        papersContext.totalPapers 
        === 
        papersContext.givePapers.total
        &&
        bananaContext.totalBananas
        === 
        bananaContext.giveBananas.total
        &&
        movement.nextMove.bin){
        navigate('/gameTwO')
        window.location.reload()
      }

    })

    return {
      position: PersonPosition,
      direction: direction
    }
    
}