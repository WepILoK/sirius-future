import {LoadingStatus} from "../../../types";

export interface IState {
    words: string[]
    wordCount: number
    numberOfLetters: number
    speed: number
    startingDistance: number
    increasingDistance: number
    wordsWithSettings: undefined | string[]
    loadingStatus: LoadingStatus
}