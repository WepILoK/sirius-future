import {ActionsType, IActions} from "./contracts/actionTypes";
import {IState} from "./contracts/state";
import {LoadingStatus} from "../../types";


const exerciseState: IState = {
    increasingDistance: 20,
    loadingStatus: LoadingStatus.LOADED,
    numberOfLetters: 8,
    speed: 1,
    startingDistance: 20,
    wordCount: 5,
    wordsWithSettings: undefined,
    words: ['Человек', 'год', 'время', 'дело', 'жизнь', 'день', 'рука', 'раз', 'работа', 'слово', 'место', 'лицо',
        'друг', 'глаз', 'вопрос', 'дом', 'сторона', 'страна', 'мир', 'случай', 'голова', 'ребенок', 'сила', 'конец',
        'вид', 'система', 'часть', 'город', 'отношение', 'женщина', 'деньги', 'земля', 'машина', 'вода', 'отец',
        'проблема', 'час', 'право', 'нога', 'решение', 'дверь', 'образ', 'история', 'власть', 'закон', 'война', 'бог',
        'голос', 'тысяча', 'книга', 'возможность', 'результат', 'ночь', 'стол', 'имя', 'область', 'статья', 'число',
        'компания', 'народ', 'жена', 'группа', 'развитие', 'процесс', 'суд', 'условие', 'средство', 'начало', 'свет',
        'пора', 'путь', 'душа', 'уровень', 'форма', 'связь', 'минута', 'улица', 'вечер', 'качество', 'мысль', 'дорога',
        'мать', 'действие', 'месяц', 'государство', 'язык', 'любовь', 'взгляд', 'мама', 'век', 'школа', 'цель',
        'общество', 'деятельность', 'организация', 'президент', 'комната',],
}

export const exerciseReducer = (state = exerciseState, action: IActions): IState => {
    switch (action.type) {
        case ActionsType.SET_WORD_COUNT:
            return {
                ...state,
                wordCount: action.payload,
            }
        case ActionsType.SET_INCREASING_DISTANCE:
            return {
                ...state,
                increasingDistance: action.payload,
            }
        case ActionsType.SET_SPEED:
            return {
                ...state,
                speed: action.payload,
            }
        case ActionsType.SET_STARTING_DISTANCE:
            return {
                ...state,
                startingDistance: action.payload,
            }
        case ActionsType.SET_NUMBER_OF_LETTERS:
            return {
                ...state,
                numberOfLetters: action.payload,
            }
        case ActionsType.SET_START_EXERCISE:
            let newWordsArray = exerciseState.words.filter(i => i.length === exerciseState.numberOfLetters).slice(exerciseState.wordCount)
            console.log(newWordsArray)
            return {
                ...state, wordsWithSettings: newWordsArray
            }
        default:
            return state
    }
}