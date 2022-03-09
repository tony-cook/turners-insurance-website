import React from 'react'
import './Header.css'
import TurnersLogo from '../../assets/images/turners_cars_logo.png'
import RedCar from '../../assets/images/red_car_1.png'
import LocationIcon from '../../assets/images/location_icon.png'
import Translate from '../../assets/images/translate_webpage.png'

function Header() {
  return (
    <div>
        <div className="flexbox-container">
            <div className="header-container-1">
                <img  className="turners-cars-logo" src={TurnersLogo} alt="logo.png" />
                <br />
                <p className="heading3 call-us-text"> Call 0800 887 637</p>
            </div>
            <div className="header-container-2">
                <p className="heading1 banner-text">Insure your car now!</p>
            </div>
            <div className="header-container-3">
                <img  className="red-car-image" src={RedCar} alt="logo.png" />
                <div className="login-links-container">
                    <img  className="location-icon" src={LocationIcon} alt="logo.png" />
                    <span className="login-links-text">
                        Find Us
                    </span>
                    <img  className="translate-image" src={Translate} alt="logo.png" />
                    <span className="login-links-text"> 
                        Login or Register
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header