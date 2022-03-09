import React, {useState} from 'react'
import './InsuranceOptions.css'

import DropDownIconBlue from '../../../../assets/images/drop_down_icon_blue.png'
import DropDownIconBlueUp from '../../../../assets/images/drop_down_icon_blue_up.png'

function InsuranceOptions() {
    const placeHolder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

    const [insuranceOption1, setinsuranceOption1] = useState(false);
    const [insuranceOption2, setinsuranceOption2] = useState(false);
    const [insuranceOption3, setinsuranceOption3] = useState(false);
    const [insuranceOption4, setinsuranceOption4] = useState(false);

  return (
    <>
        
        <div className="insurance-options-container">
        <div className="insurance-options-header">Your Insurance Options</div>
            <div className="insurance-option" onMouseEnter={() => setinsuranceOption1(true)} onMouseLeave={() => setinsuranceOption1(false)}>
                <div className="insurance-option-title" >
                    <div className="line1">Comprehensive Every Day</div>
                    <div className="line2">Full Cover including glass replacement and Roadside Assist</div>
                    <img className="expand-icon" src={insuranceOption1 ? DropDownIconBlueUp : DropDownIconBlue} alt="drop_down.png"/>
                </div>
                {insuranceOption1 && <div className="insurance-option-content" >{placeHolder}</div>}
            </div>
            <div className="insurance-option" onMouseEnter={() => setinsuranceOption2(true)} onMouseLeave={() => setinsuranceOption2(false)}>
                <div className="insurance-option-title" >
                    <div className="line1">Mechanical Breakdown</div>
                    <div className="line2">Full Cover including glass replacement and Roadside Assist</div>
                    <img className="expand-icon" src={insuranceOption2 ? DropDownIconBlueUp : DropDownIconBlue} alt="drop_down.png"/>
                </div>
                {insuranceOption2 && <div className="insurance-option-content" >{placeHolder}</div>}
            </div>
            <div className="insurance-option" onMouseEnter={() => setinsuranceOption3(true)} onMouseLeave={() => setinsuranceOption3(false)}>
                <div className="insurance-option-title" >
                    <div className="line1">Third Party Fire and Theft</div>
                    <div className="line2">Full Cover including glass replacement and Roadside Assist</div>
                    <img className="expand-icon" src={insuranceOption3 ? DropDownIconBlueUp : DropDownIconBlue} alt="drop_down.png"/>
                </div>
                {insuranceOption3 && <div className="insurance-option-content" >{placeHolder}</div>}
            </div>
            <div className="insurance-option" onMouseEnter={() => setinsuranceOption4(true)} onMouseLeave={() => setinsuranceOption4(false)}>
                <div className="insurance-option-title" >
                    <div className="line1">Third Party Property Damage</div>
                    <div className="line2">Full Cover including glass replacement and Roadside Assist</div>
                    <img className="expand-icon" src={insuranceOption4 ? DropDownIconBlueUp : DropDownIconBlue} alt="drop_down.png"/>
                </div>
                {insuranceOption4 && <div className="insurance-option-content" >{placeHolder}</div>}
            </div>

            <div className="compare-btn">Click to compare options</div>
        </div>
        
    </>
  )
}

export default InsuranceOptions