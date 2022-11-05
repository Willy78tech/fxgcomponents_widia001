
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 150,
  lineHeight: '60px',
  textTransform: 'UpperCase'
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation({lvl1,lvl2, text}) {
  return (
    <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[lvl1, lvl2].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {text}= {elevation}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}

Elevation.PropTypes = {
  lvl1: PropTypes.number,
  lvl2: PropTypes.number,
  text: PropTypes.string
}

