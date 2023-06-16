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

    TRAP: TP,

    PAPER: PP,
    BANANA: BA,
    PLASTIC: PL,
    GLASS: GL,
    METAL: MT,

    BIN: BN,

    FIRE: FR

} = NUMBER_OBJECTS

const canvas = [
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FR,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FR,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FR,FL,FL,FL,FL,FL,FL,FL,FR,FL,FL,FL,FR,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FR,FL,FL,FR,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FR,FL,FR,FR,FR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FR,FL,FL,FL,WL],
    [WL,FL,FR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FR,FL,FL,FL,FR,FL,FL,FL,FL,FL,FR,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FR,FL,FL,FL,FL,FL,FL,FL,FL,FR,FL,FL,FL,FL,FL,FR,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FR,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,GL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FR,FR,FR,FL,WL],
    [WL,HR,FL,FL,FL,FL,FL,FR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
]

function checkMovement(nextPosition, walker) {

    const positionValue =  canvas[nextPosition.y][nextPosition.x]

    const result = walker === PERSONS.PERSON
    ? getPersonMoves(positionValue)
    : null

    return result

    
}

function getPersonMoves(positionValue) {

    return {

        valid: 
        positionValue === NUMBER_OBJECTS.FLOOR 
        ||
        positionValue === NUMBER_OBJECTS.HERO
        ||
        positionValue === NUMBER_OBJECTS.TRAP
        || 
        positionValue === NUMBER_OBJECTS.PAPER
        ||
        positionValue === NUMBER_OBJECTS.BANANA
        ||
        positionValue === NUMBER_OBJECTS.PLASTIC
        ||
        positionValue === NUMBER_OBJECTS.GLASS
        ||
        positionValue === NUMBER_OBJECTS.METAL,


        dead:  positionValue === NUMBER_OBJECTS.TRAP,


        bin: positionValue === NUMBER_OBJECTS.BIN,


        paper: positionValue === NUMBER_OBJECTS.PAPER,

        banana: positionValue === NUMBER_OBJECTS.BANANA,

        plastic: positionValue === NUMBER_OBJECTS.PLASTIC,

        glass: positionValue === NUMBER_OBJECTS.GLASS,

        metal: positionValue === NUMBER_OBJECTS.METAL

    }
    
}

export {
    canvas,
    checkMovement,
    handleNextPosition
}


