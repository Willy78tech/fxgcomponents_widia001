
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export default function HalfRating({precision}) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={1} precision={precision} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
  );
}

HalfRating.PropTypes = {
  precision: PropTypes.number
}