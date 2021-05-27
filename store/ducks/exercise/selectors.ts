import {IState} from "./contracts/state";
import {RootState} from "../../rootReducers";
import {LoadingStatus} from "../../types";

export const selectExerciseState = (state: RootState): IState => state.exercise

export const selectWordsState = (state: RootState): IState['wordsWithSettings'] =>
    selectExerciseState(state).wordsWithSettings

export const selectLoadedStatus = (state: RootState): boolean =>
    selectExerciseState(state).loadingStatus === LoadingStatus.LOADED
