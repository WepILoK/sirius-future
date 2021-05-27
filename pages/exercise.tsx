import React, {useEffect, useState} from 'react';
import {Layout} from "../components/Layout";
import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";
import {selectLoadedStatus, selectWordsState} from "../store/ducks/exercise/selectors";
import {startExercise} from "../store/ducks/exercise/actionCreators";

const ExerciseStyle = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 80%;
width: 100%;
color: #371548;
font-size: 60px;
font-weight: 900;
& > img {
position: relative;
top: 2.2%;
}
`

export default function Exercise() {
    const specifiedDistance = 50
    const [visible, setVisible] = useState(false)
    const [distance, setDistance] = useState(specifiedDistance)
    const dispatch = useDispatch()

    const words = useSelector(selectWordsState)
    const loaded = useSelector(selectLoadedStatus)
    const updateVisible = () => {

    }

    console.log(words)
    useEffect(() => {
        dispatch(startExercise())

    }, [loaded])

    if (!loaded) {
        return null
    }
    return (
        <Layout>
            <ExerciseStyle>
                <p>ffaw</p>
                <img src='/static/space.svg'/>
                <p>fwaf</p>
            </ExerciseStyle>
        </Layout>
    );


};

