export const TILE_SIZE = 48

export const HEAD_PERSON = 12

export const GAME_SIZE = 20 * TILE_SIZE

export enum PERSONS  {
    PERSON = 'HERO'
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

    TRAP = 3,

    PAPER = 4, // BLUE
    BANANA = 5, // BROWN
    PLASTIC = 6, // RED
    GLASS = 7, // GREEN,
    METAL = 8, // YELLOW

    BIN = 9, // WHITE


}