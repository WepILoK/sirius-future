import {ActionsType, IActions} from "./contracts/actionTypes";
import {IState} from "./contracts/state";


const exerciseState: IState = {
    numberOfLetters: 0,
    wordCount: 0,
    increasingDistance: 0,
    speed: 0,
    startingDistance: 0,
    wordsWithSettings: [],
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
        case ActionsType.SET_SETTINGS:
            const makeRandomArr = (a: string, b: string) => {
            return Math.random() - 0.5;
            }
            let newWordsArray = exerciseState.words.filter(i => i.length === action.payload.numberOfLetters).sort(makeRandomArr)
            newWordsArray = newWordsArray.splice(0, action.payload.wordCount)
            return {
                ...state,
                wordCount: action.payload.wordCount,
                increasingDistance: action.payload.increasingDistance,
                speed: action.payload.speed,
                startingDistance: action.payload.startingDistance,
                numberOfLetters: action.payload.numberOfLetters,
                wordsWithSettings: newWordsArray,
            }
        default:
            return state
    }
}