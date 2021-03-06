import React from 'react'
import { Link } from "react-router-dom"
import {Button} from "@material-ui/core";

import Art01 from './Art01'

function Home () {

  return (
    <>
    <br></br>
    <h1>The Square</h1>
    <div className="grid-container">
      <div className="grid-item">
        <img src="/artpics/01/2022.03.12-14.16.31.png" />
        <br></br>
        <Button variant="contained" style={{backgroundColor: "#B388FF",}} href="./01"> configure your own artwork </Button>
      </div>
      <div className="grid-item">
        <img src="/artpics/01/2022.03.12-13.37.06.png"/>
      </div>
      <div className="grid-item">
        <img src="/artpics/01/2022.03.12-13.46.27.png" />
      </div>
      <div className="grid-item">
        <img src="/artpics/01/2022.03.12-14.16.31.png" />
      </div>
    </div>

    <br></br>
    <h1>The Circle</h1>
    <div className="grid-container">
      <div className="grid-item">
        <img src="/artpics/02/2022.03.19-18.40.47.png" />
        <br></br>
        <Button variant="contained" style={{backgroundColor: "#B388FF",}} href="./02"> configure your own artwork </Button>
      </div>
      <div className="grid-item">
        <img src="/artpics/02/2022.03.20-09.09.43.png" />
      </div>
      <div className="grid-item">
        <img src="/artpics/02/2022.03.20-09.11.43.png" />
      </div>
      <div className="grid-item">
        <img src="/artpics/02/2022.03.20-09.17.08.png" />
      </div>
    </div>

    <br></br>
    <h1>Moving Dots</h1>
    <div className="grid-container">
      <div className="grid-item">
        <video src="/artpics/03/2022.03.14-16.19.34.mp4" autoPlay muted loop />
        <br></br>
        <Button variant="contained" style={{backgroundColor: "#B388FF",}} href="./03"> configure your own artwork </Button>
      </div>
      <div className="grid-item">
        <img src="/artpics/03/2022.03.14-16.18.47.png" />
      </div>
      <div className="grid-item">
        <img src="/artpics/03/2022.03.20-09.32.55.gif" />
      </div>
      <div className="grid-item">
        <img src="/artpics/03/2022.03.20-09.38.33.gif" />
      </div>
    </div>

    <br></br>
    <h1>Noise</h1>
    <div className="grid-container">
      <div className="grid-item">
        {/* <video src="/artpics/04/2022.03.19-19.28.32.mp4" autoPlay muted loop /> */}
        <video src="/artpics/04/2022.03.19-19.28.32.mp4" autoPlay muted loop />
        <br></br>
        <Button variant="contained" style={{backgroundColor: "#B388FF",}} href="./04"> configure your own artwork </Button>
      </div>
      <div className="grid-item">
        <video src="/artpics/04/2022.03.19-19.29.21.mp4" autoPlay muted loop />
      </div>
      <div className="grid-item">
        <video src="/artpics/04/2022.03.19-19.31.43.mp4" autoPlay muted loop />
      </div>
      <div className="grid-item">
        <video src="/artpics/04/2022.03.19-19.33.04.mp4" autoPlay muted loop />
      </div>
      {/* <div className="grid-item">
        <video src="/artpics/04/2022.03.19-19.33.49.mp4" autoPlay muted loop />
      </div> */}
    </div>
    </>
  )
}

export default Home