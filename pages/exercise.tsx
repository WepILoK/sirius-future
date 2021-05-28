import React, {useEffect, useState} from 'react';
import {Layout} from "../components/Layout";
import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";
import {selectExerciseState, selectWordsState} from "../store/ducks/exercise/selectors";
import {useRouter} from "next/router";

interface IExerciseStyle {
    newDistance: number
}

const ExerciseStyle = styled.div<IExerciseStyle>(props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    width: '100%',
    color: '#371548',
    fontSize: '60px',
    fontWeight: 900,
    '& > img': {
        paddingTop: '22px',
        paddingLeft: props.newDistance,
        paddingRight: props.newDistance
    }
}))


export default function Exercise() {
    const router = useRouter()
    const state = useSelector(selectExerciseState)
    const words = useSelector(selectWordsState)
    const [visible, setVisible] = useState(false)
    const [ret, setRet] = useState(false)
    const [wordId, setWordId] = useState(0)
    const [word, setWord] = useState<string[]>([])
    const [distance, setDistance] = useState(state.startingDistance)


    const splitWordByIndex = (value: string, index: number) => {
        return (value.substring(0, index) + "," + value.substring(index)).split(",");
    }


    useEffect(() => {
        if (wordId !== words.length) {
            setWord(splitWordByIndex(words[wordId], Math.round(state.numberOfLetters / 2)))
        } else {
            router.push('/greatJob')
        }
        let render = setTimeout(() => {
            setVisible(true)
        }, ((state.speed * 1000)));
        let rerender = setTimeout(() => {
            setVisible(false)
            setWordId(wordId + 1)
            setDistance(distance + state.increasingDistance)
            setRet(!ret)
        }, ((state.speed * 1000 + 900)));
        return () => {
            clearTimeout(render)
            clearTimeout(rerender)
        }
    }, [wordId])

    return (
        <Layout>
            <ExerciseStyle newDistance={distance}>
                {visible && <p>{word[0]}</p>}
                <img src='/static/space.svg'/>
                {visible && <p>{word[1]}</p>}
            </ExerciseStyle>
        </Layout>
    );
};

