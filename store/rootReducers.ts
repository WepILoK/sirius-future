import {combineReducers} from "redux";
import {exerciseReducer} from "./ducks/exercise/reducer";


export const rootReducer = combineReducers({
    exercise: exerciseReducer,
});

export type RootState = ReturnType<typeof rootReducer>

