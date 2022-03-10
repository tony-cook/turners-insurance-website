import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';
import './QuoteEstimate.css'

function QuoteEstimate() {
    const [value, setValue] = React.useState(new Date());
    const style = {
        color:{
            background: '#bbcee3', 
            color: "#5481ad"
        },
    }
    
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
      <TextField className="input-field " fullWidth id="outlined-basic" label="Licence Plate" variant="outlined" size="small"/>
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
            <MenuItem value="" style={{background: '#bbcee3', color: "#5481ad"}}>
                Select
            </MenuItem>
            <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={10}>Toyota</MenuItem>
            <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={20}>Mitsubishi</MenuItem>
            <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={30}>Mazda</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth>
    <InputLabel id="make-label">Model</InputLabel>
        <Select className="input-field half-width"
            labelId="model"
            id="model"
            label="model"
            size="small"
        >
            <MenuItem value="" style={{background: '#bbcee3', color: "#5481ad"}}>
                Select
            </MenuItem>
            <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={10}>Camry</MenuItem>
            <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={20}>Prius</MenuItem>
            <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={30}>Model S</MenuItem>
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
                    labelId="Body Style"
                    id="Body Style"
                    label="Body Style"
                    size="small"
                    
                >
                    <MenuItem value="" style={{background: '#bbcee3', color: "#5481ad"}}>
                        Select
                    </MenuItem>
                    <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={10}>Sedan</MenuItem>
                    <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={20}>Hatchback / Wagon</MenuItem>
                    <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={30}>Convertible</MenuItem>
                </Select>
                </FormControl>
                <FormControl fullWidth>
            <InputLabel id="make-label">Engine Size</InputLabel>
                <Select className="input-field half-width"
                    labelId="Engine Size"
                    id="Engine Size"
                    label="Engine Size"
                    size="small"
                    
                >
                    <MenuItem value="" style={{background: '#bbcee3', color: "#5481ad"}}>
                        Select
                    </MenuItem>
                    <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={10}>1.0 Litre</MenuItem>
                    <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={20}>2.0 Litre</MenuItem>
                    <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={30}>2.5 Litre</MenuItem>
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
            <div className="quote-estimate-subheader section-break">Please enter the details of the driver you want to insure</div>
            <Box className="spacing date-container" sx={{display: 'flex'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
            label="Drivers' date of birth"
            value={value}
            minDate={new Date('2017-01-01')}
            onChange={(newValue) => {setValue(newValue);}}
            size="small"
                renderInput={(params) => <TextField size="small" className="date-picker" {...params} />}
                />
            </LocalizationProvider>
            <FormControl fullWidth>
                <InputLabel id="make-label">Driver gender</InputLabel>
                <Select className="input-field half-width"
                    labelId="Driver gender"
                    id="Driver gender"
                    label="Driver gender"
                    size="small"
                >
                    <MenuItem value="" style={{background: '#bbcee3', color: "#5481ad"}}>
                        Select
                    </MenuItem>
                    <MenuItem style={{background: '#bbcee3', color: "#5481ad"}} value={10}>Male</MenuItem>
                    <MenuItem style={{background: '#bbcee3', color: "#5481ad"}}value={20}>Female</MenuItem>
                </Select>
                </FormControl>
        </Box>
        <div className="compare-btn submit-btn">Submit</div>
    </div>
  )
}

export default QuoteEstimate