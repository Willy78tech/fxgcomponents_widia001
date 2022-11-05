
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider({step}) {
  return (
    <Box sx={{ width: 300 }}>
     <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> 
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={step}
        marks
        min={10}
        max={110}
      />
      
    </Box>
  );
}

DiscreteSlider.PropTypes = {
  step: PropTypes.number
}