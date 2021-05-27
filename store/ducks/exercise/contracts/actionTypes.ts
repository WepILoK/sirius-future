import {Action} from "redux";
import {IState} from "./state";


export enum ActionsType {
    SET_INCREASING_DISTANCE = 'exercise/SET_INCREASING_DISTANCE',
    SET_NUMBER_OF_LETTERS = 'exercise/SET_NUMBER_OF_LETTERS',
    SET_STARTING_DISTANCE = 'exercise/SET_STARTING_DISTANCE',
    SET_SPEED = 'exercise/SET_SPEED',
    SET_WORD_COUNT = 'exercise/SET_WORD_COUNT',
    SET_SETTINGS = 'exercise/SET_SETTINGS',
    SET_START_EXERCISE = 'exercise/SET_START_EXERCISE',
}

export interface ISetIncreasingDistance extends Action<ActionsType> {
    type: ActionsType.SET_INCREASING_DISTANCE
    payload: IState['increasingDistance']
}

export interface ISetNumberOfLetters extends Action<ActionsType> {
    type: ActionsType.SET_NUMBER_OF_LETTERS
    payload: IState['numberOfLetters']
}

export interface ISetStartingDistance extends Action<ActionsType> {
    type: ActionsType.SET_STARTING_DISTANCE
    payload: IState['startingDistance']
}

export interface ISetSpeed extends Action<ActionsType> {
    type: ActionsType.SET_SPEED
    payload: IState['speed']
}

export interface ISetWordCount extends Action<ActionsType> {
    type: ActionsType.SET_WORD_COUNT
    payload: IState['wordCount']
}

export interface IStartExercise extends Action<ActionsType> {
    type: ActionsType.SET_START_EXERCISE
}

export interface ISetSettings extends Action<ActionsType> {
    type: ActionsType.SET_SETTINGS
    payload: {
        wordCount: IState['wordCount'],
        speed: IState['speed'],
        startingDistance: IState['startingDistance'],
        increasingDistance: IState['increasingDistance'],
        numberOfLetters: IState['numberOfLetters']
    }
}


export type IActions =
    ISetIncreasingDistance
    | ISetNumberOfLetters
    | ISetStartingDistance
    | ISetSpeed
    | ISetWordCount
    | ISetSettings
    | IStartExercise
