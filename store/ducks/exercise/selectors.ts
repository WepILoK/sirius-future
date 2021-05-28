import {IState} from "./contracts/state";
import {RootState} from "../../rootReducers";

export const selectExerciseState = (state: RootState): IState => state.exercise

export const selectWordsState = (state: RootState): IState['wordsWithSettings'] =>
    selectExerciseState(state).wordsWithSettings

