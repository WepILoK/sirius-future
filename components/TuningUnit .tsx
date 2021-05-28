import styled from "@emotion/styled";
import {Input} from "./RangeSlider";
import {ChangeEvent, Dispatch, SetStateAction} from "react";

interface ITuningUnitStyle {
    pattern?: boolean
}

const TuningUnitStyle = styled.div<ITuningUnitStyle>`
  flex: 0 1 50%;
  max-width: 610px;
  height: 186px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 48.2498px;
  padding: 22px 70px 17px 70px;
  margin: 15px 16px 15px 16px;
  text-align: center;

  & > div > h1 {
    color: #371548;
    font-size: 38px;
  }
  ${props =>
          props.pattern ? `
    & > div {
    display: flex;
    justify-content:space-around;
    margin-bottom: 10px
    }
    & > img {
    width: 80px;
    height: 80px;
    margin: 10px 11px 0 11px;
    &:hover {
    cursor: pointer;
    opacity: 0.9;
        }
    &:active {
    opacity: 0.8;
    }
    }
    ` : `
    & > div > ul {
    display: flex;
    justify-content:space-between;
    padding: 10px 0 10px 0;
    margin: 0 5px 0 5px;
    font-weight: 700;
    font-size: 30px;
    list-style-type: none;
    }
    `}
`

interface ITuningUnit {
    title: string
    arrayNumber?: number[]
    sliderData?: { max: number, min: number, value: number }
    pattern?: boolean
    updateValue?: () => void
    updateSliderValue?: Dispatch<SetStateAction<{ max: number; min: number; value: number; }>>
}

export const TuningUnit: React.FC<ITuningUnit> =
    ({children, updateSliderValue, sliderData, arrayNumber, title, pattern}) => {

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (updateSliderValue && sliderData) {
                updateSliderValue({...sliderData, value: Number(e.currentTarget.value)})
            }
        }

        if (pattern) {
            return (
                <TuningUnitStyle pattern>
                    {children}
                </TuningUnitStyle>
            )
        } else {
            return (
                <TuningUnitStyle>
                    <div>
                        <h1>{title}</h1>
                        <ul>
                            {arrayNumber && arrayNumber.map(i => <li key={i}>{i}</li>)}
                        </ul>
                    </div>
                    <Input className='slider-progress' type='range' value={sliderData?.value} max={sliderData?.max}
                           min={sliderData?.min}
                           onChange={handleChange}/>
                </TuningUnitStyle>
            )
        }
    }