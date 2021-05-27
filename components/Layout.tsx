import React from 'react';
import styled from "@emotion/styled";
import Head from "next/head";
const LayoutStyle = styled.div`
width: 100vw;
height: 100vh;
background: #F7F9FF;
border: 0.482498px solid #000000;
& > img {
max-width: 338px;
max-height: 135px;
width: calc(100vw - 83%);
height: calc(100vh - 88%);
position: absolute;
top: 86px;
right: 33px;
}
& > div {
position: absolute;
top: 18.5%;
left: 25%;
width: calc(100vw - 50%);
height: calc(100vh - 27%);
display: flex;
flex-wrap:wrap;
flex: 0 1 50%;
}
`

export const Layout: React.FC = ({children}) => {
    return (
        <LayoutStyle>
            <Head>
                <title>Sirius Future</title>
                <link rel="icon"
                      href="https://static.tildacdn.com/tild3934-3534-4836-b538-376130393931/favicon.ico"/>
            </Head>
            <img src="/static/Logo.svg" alt="Sirius Future Logo"/>
            <div>
                {children}
            </div>
        </LayoutStyle>
    )
}
