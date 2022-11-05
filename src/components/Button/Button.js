
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';


export default function ButtonSizes({width, text, color, variant,height}) {
  
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
      }}
    >
      <Button variant={variant} color={color} sx={{width: width}} height={height}>
        {text}
      </Button>
    </Box>
  );
}

ButtonSizes.PropTypes = {
  width: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  height: PropTypes.string
} 