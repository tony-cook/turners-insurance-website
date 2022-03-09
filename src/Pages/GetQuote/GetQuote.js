import React from 'react'
import './GetQuote.css'
import Header from '../../components/header/Header.js'
import Navigation from '../../components/navigation/Navigation.js'
import Content from '../../components/content/Content.js'
import InsuranceOptions from './components/insuranceOptions/InsuranceOptions.js'
import QuoteEstimate from './components/quoteEstimate/QuoteEstimate.js'

import TinaPoints from '../../assets/images/tina_points.png'

function GetQuote() {

  return (
    <div>
      <Header />
      <Navigation />
      <Content />
      <div className="content-components">
        <InsuranceOptions />
        <QuoteEstimate />
      </div>
      <div className="tina-image">
        <img  src={TinaPoints} alt="tina.png" />
      </div>
    </div>
  )
}

export default GetQuote