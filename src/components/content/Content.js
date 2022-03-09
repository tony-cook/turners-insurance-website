import React from 'react'
import './Content.css'
import BackgroundImage from '../../assets/images/background_image.png'

function Content() {
  return (
    <div className="content-container">
        <img src={BackgroundImage} alt="bg.png" />
    </div>
  )
}

export default Content