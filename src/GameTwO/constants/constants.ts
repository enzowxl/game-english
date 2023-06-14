export const TILE_SIZE = 48

export const HEAD_PERSON = 12

export const GAME_SIZE = 20 * TILE_SIZE

export enum PERSONS  {
    PERSON = 'HERO',
    ENEMIE = 'PETROLEUM'
}

export enum DIRECTIONS {

    LEFT = "ArrowLeft",
    RIGHT = "ArrowRight",
    UP = "ArrowUp",
    DOWN = "ArrowDown"

}

export enum NUMBER_OBJECTS {

    FLOOR = 0,
    WALL = 1,
    HERO = 2,
    PETROLEUM = 3,
    TRUCK = 4,
    BOTTLE = 5,
    PLASTIC = 6,
    SHAKE = 7

}