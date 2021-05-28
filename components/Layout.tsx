import React from 'react';
import styled from "@emotion/styled";
import Head from "next/head";

const LayoutStyle = styled.div`
  width: 100%;
  height: 100%;
  background: #F7F9FF;
  border: 0.482498px solid #000000;

  & > img {
    height: 100px;
    position: fixed;
    top: 86px;
    right: 33px;
  }

  & > div {
    display: flex;
    position: absolute;
    top: 21.5%;
    left: 15%;
    max-height: calc(100vh - 8%);
    max-width: calc(100vw - 29%);
    flex-wrap:wrap;
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
            <div>
                {children}
            </div>
            <img src="/static/Logo.svg" alt="Sirius Future Logo"/>
        </LayoutStyle>
    )
}
