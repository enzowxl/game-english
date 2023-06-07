import React, {
    createContext, useState
} from "react";

import { canvas, checkMovement, handleNextPosition } from "./helper";

import { NUMBER_OBJECTS } from "../../constants/constants";


export const CanvasContext = createContext({
    canvas: [],
    updateCanvas: (direction, PersonPosition, walker) => null
})

export default function CanvasProvider({ children }) {

    const [canvasState, setCanvasState] = useState({
        canvas: canvas,
        updateCanvas: (direction, PersonPosition, walker) => {

            const nextPosition = handleNextPosition(direction, PersonPosition)
            const nextMove =  checkMovement(nextPosition, walker)
    
            if(nextMove.valid){
                setCanvasState((state) => {

                    const newCanvas = Object.assign([], state.canvas)
                    const value = newCanvas[PersonPosition.y][PersonPosition.x]

                    newCanvas[PersonPosition.y][PersonPosition.x] = NUMBER_OBJECTS.FLOOR

                    newCanvas[nextPosition.y][nextPosition.x] = value

                    return {
                        canvas: newCanvas,
                        updateCanvas: state.updateCanvas
                    }


                })
            }

            return {
                nextPosition,
                nextMove
            }
    
        }
    })

    return (
        <CanvasContext.Provider
        value={canvasState}
        >
            
            {children}

        </CanvasContext.Provider>
    )
    
}
