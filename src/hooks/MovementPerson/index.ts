import React, {
  useContext,
    useState
} from 'react'

import useEventListener from '@use-it/event-listener'

import { checkMovement, handleNextPosition } from '../../contexts/canvas/helper'

import { DIRECTIONS, PERSONS } from '../../constants/constants'

import { CanvasContext } from '../../contexts/canvas'
import { PapersContexts } from '../../contexts/papers'
import { BananasContexts } from '../../contexts/banana'


export default function usePersonMovement(initialPosition) {

    const canvasContext = useContext(CanvasContext)

    const papersContext = useContext(PapersContexts)

    const bananaContext = useContext(BananasContexts)

    const [PersonPosition, setPersonPosition] = useState(initialPosition)
    const [direction, setDirection] = useState(DIRECTIONS.RIGHT)


    

    useEventListener('keydown', (event: any) => {

      const direction = event.key as DIRECTIONS

      if(direction.indexOf('Arrow') === -1){
        return
      }


      const movement = canvasContext.updateCanvas(direction, PersonPosition,PERSONS.PERSON)

      if(movement.nextMove.valid){
        setPersonPosition(movement.nextPosition)
        setDirection(direction)
      }

      if(movement.nextMove.paper){
        papersContext.updatePapers(movement.nextPosition)
      }

      if(movement.nextMove.banana){
        bananaContext.updateBananas(movement.nextPosition)
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
        alert('You win')
        window.location.reload()
      }

    })

    return {
      position: PersonPosition,
      direction: direction
    }
    
}