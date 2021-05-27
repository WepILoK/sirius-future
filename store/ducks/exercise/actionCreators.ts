import {IState} from "./contracts/state";
import {
    ActionsType,
    ISetIncreasingDistance,
    ISetNumberOfLetters,
    ISetSettings,
    ISetSpeed,
    ISetStartingDistance,
    ISetWordCount, IStartExercise
} from "./contracts/actionTypes";


export const setIncreasingDistance = (payload: IState['increasingDistance']): ISetIncreasingDistance => ({
    type: ActionsType.SET_INCREASING_DISTANCE,
    payload
})

export const setNumberOfLetters = (payload: IState['numberOfLetters']): ISetNumberOfLetters => ({
    type: ActionsType.SET_NUMBER_OF_LETTERS,
    payload
})

export const setStartingDistance = (payload: IState['startingDistance']): ISetStartingDistance => ({
    type: ActionsType.SET_STARTING_DISTANCE,
    payload
})

export const setSpeed = (payload: IState['speed']): ISetSpeed => ({
    type: ActionsType.SET_SPEED,
    payload
})

export const setWordCount = (payload: IState['wordCount']): ISetWordCount => ({
    type: ActionsType.SET_WORD_COUNT,
    payload
})

export const startExercise = (): IStartExercise => ({
    type: ActionsType.SET_START_EXERCISE,
})

export const setSettings = (payload: { wordCount: IState['wordCount'],
    speed: IState['speed'], startingDistance: IState['startingDistance'],
    increasingDistance: IState['increasingDistance'],
    numberOfLetters: IState['numberOfLetters'] }): ISetSettings => ({
    type: ActionsType.SET_SETTINGS,
    payload
})