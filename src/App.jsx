import React from "react"
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import About from "./Routes/About"
import Project from "./Routes/Project"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/contact" element = {<Contact/>}></Route>
        <Route path = "/about" element = {<About/>}></Route>
        <Route path = "/project" element = {<Project/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
