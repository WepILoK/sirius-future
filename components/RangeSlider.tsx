import React from 'react';
import styled from "@emotion/styled";

interface InInput {
    value: number
    min: number
    max: number
}

export const Input = styled.input<InInput>(props => ({
    '--value': `${props.value}`,
    '--min': `${props.min}`,
    '--max': `${props.max}`,
    '&.slider-progress': {
        '--range': 'calc(var(--max) - var(--min))',
        '--ratio': 'calc((var(--value) - var(--min)) / var(--range))',
        '--sx': 'calc(0.5 * 44px + var(--ratio) * (100% - 44px))',
        '&::-webkit-slider-runnable-track': {
            background: 'linear-gradient(#FDD207,#FDD207) 0/var(--sx) 100% no-repeat, #FFFFFF',
        }
    },

    width: '100%',
    height: '24px',
    '-webkit-appearance': 'none',
    '&:focus': {
        outline: 'none',
    },

    '&::-webkit-slider-thumb': {
        cursor: 'pointer',
        width: '44px',
        height: '44px',
        borderRadius: '9.4em',
        background: '#000',
        border: '13px solid #FDD207',
        boxShadow: '0 0 2px black',
        marginTop: 'calc(24px * 0.5 - max(44px * 0.5,13px))',
        '-webkit-appearance': 'none',
    },

    '&::-webkit-slider-runnable-track': {
        cursor: 'pointer',
        height: '24px',
        borderRadius: '23px',
        background: '#FFFFFF',
        border: 'none',
        boxShadow: 'none',
    }
}))