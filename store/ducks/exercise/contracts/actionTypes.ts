import {Action} from "redux";
import {IState} from "./state";


export enum ActionsType {
    SET_SETTINGS = 'exercise/SET_SETTINGS',
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
    | ISetSettings

