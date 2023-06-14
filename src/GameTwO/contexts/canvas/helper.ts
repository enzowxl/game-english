import React, { useState } from "react"

import { DIRECTIONS, PERSONS, NUMBER_OBJECTS } from "../../constants/constants";

function handleNextPosition(direction, PersonPosition) {

    
    switch (direction) {

        case DIRECTIONS.UP:
            return {
                x: PersonPosition.x,
                y: PersonPosition.y - 1,
              }
        case DIRECTIONS.RIGHT:
            return {
                x: PersonPosition.x + 1,
                y: PersonPosition.y,
              }
        case DIRECTIONS.DOWN:
            return {
                x: PersonPosition.x,
                y: PersonPosition.y + 1
              }
        case DIRECTIONS.LEFT:
            return {
                x: PersonPosition.x - 1,
                y: PersonPosition.y,
                  }

        }
    }

const {
    FLOOR: FL,
    WALL: WL,
    HERO: HR,
    PETROLEUM: PE,
    TRUCK: TK,
    BOTTLE: BT,
    SHAKE: SK
} = NUMBER_OBJECTS

const canvas = [
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
    [WL,BT,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,PE,FL,FL,FL,FL,SK,WL],
    [WL,FL,FL,FL,FL,FL,FL,PE,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,PE,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,BT,FL,FL,FL,FL,PE,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,PE,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,SK,FL,FL,PE,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,PE,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,SK,WL],
    [WL,FL,BT,FL,FL,FL,FL,PE,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,TK,TK,TK,TK,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,TK,TK,TK,TK,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,HR,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
]

function checkMovement(nextPosition, walker) {

    const positionValue =  canvas[nextPosition.y][nextPosition.x]

    
    if(walker === PERSONS.PERSON){
        return getPersonMoves(positionValue)
    }else if(walker === PERSONS.ENEMIE){
        return getEnemieMoves(positionValue)
    }

}

function getPersonMoves(positionValue) {

    return {

        valid: 
        positionValue === NUMBER_OBJECTS.FLOOR 
        ||
        positionValue === NUMBER_OBJECTS.HERO
        ||
        positionValue === NUMBER_OBJECTS.PETROLEUM
        ||
        positionValue === NUMBER_OBJECTS.BOTTLE
        ||
        positionValue === NUMBER_OBJECTS.SHAKE,

        dead:  positionValue === NUMBER_OBJECTS.PETROLEUM,

        truck: positionValue === NUMBER_OBJECTS.TRUCK,

        bottle: positionValue === NUMBER_OBJECTS.BOTTLE,

        shake: positionValue === NUMBER_OBJECTS.SHAKE

    }
    
}

function getEnemieMoves(positionValue) {

    return {

        valid: 
        positionValue === NUMBER_OBJECTS.FLOOR 
        ||
        positionValue === NUMBER_OBJECTS.HERO,

        dead:  NUMBER_OBJECTS.HERO === positionValue,

        bottle: false,

        truck: false,

        shake: false

    
    }
    
}

export {
    canvas,
    checkMovement,
    handleNextPosition
}


