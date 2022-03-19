import React from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom"

import Home from './Home'
import Art01 from './Art01'
import Art02 from './Art02'
import Art03 from './Art03'
import Art04 from './Art04'

function App () {  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/01' element={<Art01 />} />
      <Route path='/02' element={<Art02 />} />
      <Route path='/03' element={<Art03 />} />
      <Route path='/04' element={<Art04 />} />
    </Routes>
  </>
  )
}

export default App