import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './QuoteEstimate.css'

function QuoteEstimate() {

  return (
    <div className="quote-estimate-container">
        <div className="quote-estimate-header">
            Get your quote now
        </div>
        <div className="quote-estimate-subheader">
            Please enter the details of the vehicle you want to insure
        </div>
        <Box
      component="form"
      sx={{
        width: 500,
        maxWidth: '90%',
      }}
        >
      <TextField className="input-field" fullWidth id="outlined-basic" label="Licence Plate" variant="outlined" size="small" margin="narrow"/>
      </Box>
      <Box className="spacing"
      sx={{
        display: 'flex'
      }}
        >
      <FormControl fullWidth>
    <InputLabel id="make-label">Make</InputLabel>
        <Select className="input-field half-width"
            labelId="make"
            id="make"
            label="make"
            size="small"
        >
            <MenuItem value="">
                Non selected
            </MenuItem>
            <MenuItem value={10}>Toyota</MenuItem>
            <MenuItem value={20}>Mitsubishi</MenuItem>
            <MenuItem value={30}>Mazda</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth>
    <InputLabel id="make-label">Model</InputLabel>
        <Select className="input-field half-width"
            labelId="make"
            id="make"
            label="make"
            size="small"
        >
            <MenuItem value="">
                Non selected
            </MenuItem>
            <MenuItem value={10}>Camry</MenuItem>
            <MenuItem value={20}>Prius</MenuItem>
            <MenuItem value={30}>Model S</MenuItem>
        </Select>
        </FormControl>
        </Box>
        <Box className="spacing"
            sx={{
                display: 'flex',
            }}
                >
            <FormControl fullWidth>
            <InputLabel id="make-label">Body Style</InputLabel>
                <Select className="input-field half-width"
                    labelId="make"
                    id="make"
                    label="make"
                    size="small"
                    
                >
                    <MenuItem value="">
                        Non selected
                    </MenuItem>
                    <MenuItem value={10}>Sedan</MenuItem>
                    <MenuItem value={20}>Hatchback / Wagon</MenuItem>
                    <MenuItem value={30}>Convertible</MenuItem>
                </Select>
                </FormControl>
                <FormControl fullWidth>
            <InputLabel id="make-label">Engine Size</InputLabel>
                <Select className="input-field half-width"
                    labelId="make"
                    id="make"
                    label="make"
                    size="small"
                    
                >
                    <MenuItem value="">
                        Non selected
                    </MenuItem>
                    <MenuItem value={10}>1.0 Litre</MenuItem>
                    <MenuItem value={20}>2.0 Litre</MenuItem>
                    <MenuItem value={30}>2.5 Litre</MenuItem>
                </Select>
                </FormControl>
            </Box>
            <Box className="spacing"
                component="form"
                sx={{
                    width: 500,
                    maxWidth: '90%',
                }}
                    >
                <TextField className="input-field" fullWidth id="outlined-basic" label="Address" variant="outlined" size="small" margin="narrow"/>
            </Box>
            <div className="quote-estimate-subheader section-break">Does the car have any of the following features?</div>

            <div className="question-container">
                <div className="question-text-container">
                    <div className="question-text">An Immobiliser</div>
                    <div className="question-text-description">[Security system that stops car from being driven when activated]</div>
                </div>
                <div className="btn btn-group1 no-button">NO</div>
                <div className="btn yes-button">YES</div>
            </div>
           
            <div className="question-container">
                <div className="question-text-container">
                    <div className="question-text">Non factory modifications:</div>
                    <div className="question-text-description">[See list of non insurable modifications below]</div>
                </div >
                <div className="btn btn-group2 no-button">NO</div>
                <div className="btn yes-button">YES</div>
            </div>
            <div className="quote-estimate-subheader section-break">Please enter the details of the driver you want to ensure</div>
    </div>
  )
}

export default QuoteEstimate