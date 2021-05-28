import {IState} from "./contracts/state";
import {
    ActionsType,
    ISetSettings,
} from "./contracts/actionTypes";

export const setSettings = (payload: { wordCount: IState['wordCount'],
    speed: IState['speed'], startingDistance: IState['startingDistance'],
    increasingDistance: IState['increasingDistance'],
    numberOfLetters: IState['numberOfLetters'] }): ISetSettings => ({
    type: ActionsType.SET_SETTINGS,
    payload
})