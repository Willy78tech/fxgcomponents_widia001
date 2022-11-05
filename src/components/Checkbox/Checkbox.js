"Use strict";
import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ColorCheckboxes({checked, color, size, disabled}) {
  return (

    <div >
      <Checkbox {...label} defaultChecked checked={checked} color={color} size={size} disabled={disabled}/>
      <Checkbox {...label} defaultChecked color="secondary" checked={checked} size={size} disabled={disabled}/>
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox {...label} defaultChecked sx={{color: pink[800],'&.Mui-checked': {color: pink[600],}, }} checked={checked} size={size} disabled={disabled}/>
    </div>


  );
}

ColorCheckboxes.PropTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool
}