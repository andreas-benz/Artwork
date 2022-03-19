import React from 'react'
import { Link } from "react-router-dom"

import Art01 from './Art01'
import Art02 from './Art02'
import Art03 from './Art03'
import Art04 from './Art04'

function Home () {  
  return (
    <>
    <h1>Interactive Art Gallery</h1>
    <h2>Square</h2>
    <div className="grid-container">
      <div className="grid-item">
        <img src="/artpics/01/2022.03.12-14.16.31.png" width="200" height="200" />
        <br></br>
        <button><Link to={`/01`}>configure your own artwork</Link></button>
      </div>
      <div className="grid-item">
        <img src="/artpics/01/2022.03.12-13.37.06.png" width="200" height="200" />
      </div>
      <div className="grid-item">
        <img src="/artpics/01/2022.03.12-13.46.27.png" width="200" height="200" />
      </div>
      <div className="grid-item">
        <img src="/artpics/01/2022.03.12-14.16.31.png" width="200" height="200" />
      </div>
    </div>

    <h2>Circle</h2>
    <div className="grid-container">
      <div className="grid-item">
        <img src="/artpics/02/2022.03.12-18.21.51.png" width="200" height="200" />
        <br></br>
        <button><Link to={`/02`}>configure your own artwork</Link></button>
      </div>
      <div className="grid-item">
        <img src="/artpics/02/2022.03.19-18.40.47.png" width="200" height="200" />
      </div>
      <div className="grid-item">
        <img src="/artpics/02/2022.03.19-18.42.03.png" width="200" height="200" />
      </div>
      <div className="grid-item">
        <img src="/artpics/02/2022.03.19-18.42.04.png" width="200" height="200" />
      </div>
    </div>



{/* 
    <Art04 />
    <Art01 />
    <Art02 />
    <Art03 /> */}

    </>
  )
}

export default Home