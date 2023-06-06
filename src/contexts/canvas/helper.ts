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
    BIN: BN,
    PAPER: PP,
    BANANA: BA,
    HERO: HR
} = NUMBER_OBJECTS

const canvas = [
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,BN,BN,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,BN,BN,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,BN,BN,WL],
    [WL,FL,FL,FL,PP,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,BA,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,PP,FL,WL],
    [WL,FL,BA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,PP,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,BA,FL,FL,WL],
    [WL,PP,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,BA,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,PP,FL,WL],
    [WL,HR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
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
        positionValue === NUMBER_OBJECTS.PAPER
        ||
        positionValue === NUMBER_OBJECTS.BANANA
        ||
        positionValue === NUMBER_OBJECTS.HERO,

        paper: positionValue === NUMBER_OBJECTS.PAPER,

        banana: positionValue === NUMBER_OBJECTS.BANANA,

        bin: positionValue === NUMBER_OBJECTS.BIN

    }
    
}

export {
    canvas,
    checkMovement,
    handleNextPosition
}


