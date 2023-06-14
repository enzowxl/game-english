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
import { GlassContexts } from '../../contexts/glass'
import { PlasticContexts } from '../../contexts/plastic'
import { MetalContexts } from '../../contexts/metal'
import { LifeContexts } from '../../../context/Life'




export default function usePersonMovement(initialPosition) {

    const navigate = useNavigate()

    const canvasContext = useContext(CanvasContext)


    const papersContext = useContext(PapersContexts)

    const bananaContext = useContext(BananasContexts)

    const glassContext = useContext(GlassContexts)

    const plasticContext = useContext(PlasticContexts)

    const metalContext = useContext(MetalContexts)

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
        setDirection(direction);
      }

      if(movement.nextMove.valid){
        setPersonPosition(movement.nextPosition)
        stepsContext.updateSteps()
      }


      if(movement.nextMove.paper){
        papersContext.updatePapers(movement.nextPosition)
      }

      if(movement.nextMove.banana){
        bananaContext.updateBananas(movement.nextPosition)
      }

      if(movement.nextMove.glass){
        glassContext.updateGlass(movement.nextPosition)
      }

      if(movement.nextMove.plastic){
        plasticContext.updatePlastic(movement.nextPosition)
      }

      if(movement.nextMove.metal){
        metalContext.updateMetal(movement.nextPosition)
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