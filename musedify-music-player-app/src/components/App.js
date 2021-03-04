import React from 'react'
import { Global, css, jsx } from '@emotion/core';
import MusedifyPlayer from "./MusedifyPlayer";

/**
 * @function App
 */
const App = () => (
  <>
    <Global styles={GlobalCSS} />
    <MusedifyPlayer/>
  </>
)

const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html,
  body,
  .app {
    margin: 0;
    height: 100%;
    width: 100%;
    background-color:black;
  }


  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
`

export default App
