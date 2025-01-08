import React from 'react'
import { Element } from 'react-scroll'
import TopContent from '../TopContent/TopContent.jsx'
import "./TopContainer.css"

const TopContainer = () => {
  return (
   <Element name="home" className="topContainer">
    <TopContent/>
   </Element>
  )
}

export default TopContainer