import React, {useState} from "react";
import {TuningUnit} from "../components/TuningUnit ";
import {Layout} from "../components/Layout";
import styled from "@emotion/styled";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {setSettings} from "../store/ducks/exercise/actionCreators";

const Count = styled.div`
  width: 115px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 20px;
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  line-height: 45px;
  position: relative;
  top: 5px;
`

const Button = styled.button`
  width: 389px;
  height: 109px;
  background: #FDD207;
  border-radius: 81.5275px;
  border: none;
  font-size: 49px;
  font-weight: 700;
  color: #371548;
  margin: 74px 137px 74px 137px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`

export default function Home() {
    const wordRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const distanceRange = [5, 10, 15, 20, 25, 30, 35, 40]
    const RangeOfLetters = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const dispatch = useDispatch()
    const [speed, setSpeed] = useState(1)
    const [sliderWordsCount, setSliderWordsCount] = useState({max: 10, min: 1, value: 5});
    const [sliderStartingDistance, setSliderStartingDistance] = useState({max: 40, min: 5, value: 20});
    const [sliderNumberOfLetters, setSliderNumberOfLetters] = useState({max: 12, min: 3, value: 8});
    const [sliderIncreasingDistance, setSliderIncreasingDistance] = useState({max: 40, min: 5, value: 20});

    const changeCountPlus = (): void => {
        if (speed < 5) {
            setSpeed(speed + 0.5)
        }
    }

    const changeCountMinus = (): void => {
        if (speed > 1) {
            setSpeed(speed - 0.5)
        }
    }

    const startGame = () => {
        dispatch(setSettings({
            wordCount: sliderWordsCount.value,
            startingDistance: sliderStartingDistance.value,
            numberOfLetters: sliderNumberOfLetters.value,
            increasingDistance: sliderIncreasingDistance.value,
            speed: speed
        }))
        console.log({
            wordsCount: sliderWordsCount.value,
            startingDistance: sliderStartingDistance.value,
            NumberOfLetters: sliderNumberOfLetters.value,
            increasingDistance: sliderIncreasingDistance.value,
            count: speed
        })
        // router.push('/exercise')
    }

    return (
        <Layout>
            <TuningUnit title='Сколько слов' arrayNumber={wordRange} updateSliderValue={setSliderWordsCount}
                        sliderData={sliderWordsCount}/>
            <TuningUnit title='Стартовое расстояние' arrayNumber={distanceRange}
                        updateSliderValue={setSliderStartingDistance} sliderData={sliderStartingDistance}/>
            <TuningUnit title='Сколько букв в словах' arrayNumber={RangeOfLetters}
                        updateSliderValue={setSliderNumberOfLetters} sliderData={sliderNumberOfLetters}/>
            <TuningUnit title='Увеличение расстояния' arrayNumber={distanceRange}
                        updateSliderValue={setSliderIncreasingDistance} sliderData={sliderIncreasingDistance}/>
            <TuningUnit title='Скорость' pattern>
                <div>
                    <h1>Скорость</h1>
                    <Count>
                        {speed}
                    </Count>
                    <h1>сек.</h1>
                </div>
                <img onClick={changeCountMinus} src='/static/minus.svg' alt='minus'/>
                <img onClick={changeCountPlus} src='/static/plus.svg' alt='plus'/>
            </TuningUnit>
            <Link href='/exercise'>
                <Button onClick={startGame}>СТАРТ</Button>
            </Link>
        </Layout>
    )
}
