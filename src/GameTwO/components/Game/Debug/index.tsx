import React, { useContext } from "react";

import Tile from "./Tile";

import { CanvasContext } from "../../../contexts/canvas";

function getMap(canvas) {

    const tilesComponent = []

    for(let y = 0; y < canvas.length; y++){

        const canvasY = canvas[y]

        for(let x = 0; x < canvasY.length; x++){

            const canvaYX = canvasY[x]

            const position = { 
                x: x, 
                y: y
            }

            const text = canvas[y][x] || canvaYX

            const key = `${x}-${y}`

            tilesComponent.push(
                <Tile
                key={key}
                position={position} 
                text={text} 
                />
            )

        }

    }

    return tilesComponent
    
}

export default function Debugger() {

    const canvasContext = useContext(CanvasContext)

    const tiles = getMap(canvasContext.canvas)

    return(

        <div>
            {tiles}
        </div>

    )
    
}