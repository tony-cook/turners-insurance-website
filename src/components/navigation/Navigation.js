import React from 'react'
import './Navigation.css'
import SearchIcon from '../../assets/images/search_icon.png'
import DropDownIcon from '../../assets/images/drop_down_icon.png'

function Navigation() {

    const turnersURL = "https://www.turners.co.nz/Cars/Used-Cars-for-Sale/?sortorder=7&pagesize=20&pageno=1"

  return (
    <div className="navbar-container">
        <a className="navbar-nav" href={turnersURL}>
            <img className="search-icon" src={SearchIcon} alt="icon.png" />
            Find A Car
        </a>
        <div className="navbar-nav">
            How to Buy
            <img className="drop-down-icon" src={DropDownIcon} alt="icon.png" />
        </div>
        <div className="navbar-nav">
            Sell your Car
            <img className="drop-down-icon" src={DropDownIcon} alt="icon.png" />
        </div>
        <div className="navbar-nav nav-selected">
            Insurance
            
        </div>
        <div className="navbar-nav">
            Careers
            <img className="drop-down-icon" src={DropDownIcon} alt="icon.png" />
        </div>
        <div className="navbar-nav nav-spacing">
            Auctions and Events
            <img className="drop-down-icon" src={DropDownIcon} alt="icon.png" />
        </div>
        <div className="navbar-nav">
            Services and Information
            <img className="drop-down-icon" src={DropDownIcon} alt="icon.png" />
        </div>

    </div>
  )
}

export default Navigation