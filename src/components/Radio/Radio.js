
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';

export default function FormControlLabelPlacement({labelPlacement, Disabled, label}) {
  return (
    <FormControl>
      <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="top"
          control={<Radio />}
          label={label}
          labelPlacement={labelPlacement} disabled={Disabled}
           
        />
        <FormControlLabel
          value="Start"
          control={<Radio />}
          label={label}
          labelPlacement={labelPlacement} disabled={Disabled}
        />
        <FormControlLabel
          value="Bottom"
          control={<Radio />}
          label={label}
          labelPlacement={labelPlacement} disabled={Disabled}
        />
       <FormControlLabel value="End" control={<Radio />} label={label} labelPlacement={labelPlacement}  disabled={Disabled}/>
      </RadioGroup>
    </FormControl>
  );
}

FormControlLabelPlacement.PropTypes = {
  labelPlacement: PropTypes.string,
  Disabled: PropTypes.bool,
  label: PropTypes.string
}
