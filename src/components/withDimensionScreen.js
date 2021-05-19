import React from 'react';
import { Box, Button, TextField, ThemeProvider, Typography } from '@material-ui/core';
import { useState } from 'react';
import theme from '../utils/theme';

const StartScreen = ({setNewInstance, setDimension}) => {
  const [disabled, setDisabled] = useState(true);
  const [isValidInput, setIsValidInput] = useState(true);

  const isValidDimension = (userInput) => {
    if (parseInt(userInput, 10) === 3 || parseInt(userInput, 10) === 4) {
      return true;
    }

    return false;
  };

  const classes = {
    cssLabel: {
      color: 'green'
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ 'maxWidth': '900px', 'margin': '3rem auto' }}>
        <Typography variant="h4" style={{ 'marginBottom': '1rem'}}>Let&apos;'s play Tic Tac Toe or Connect Four</Typography>
        {/* <Typography variant="h4" style={{ 'marginBottom': '1rem'}}>Configure your board!</Typography> */}
        <Typography variant="h5" color="primary">Enter board dimensions:</Typography>
        <Box style={{'marginTop': '1rem'}}>
          <TextField
            onInput={(e) => {
              if (isValidDimension(e.target.value)) {
                setIsValidInput(true);
                setDisabled(false);
                const value = parseInt(e.target.value, 10);
                setDimension(value);
              } else {
                setIsValidInput(false);
                setDisabled(true);
              }
            }}
            placeholder="Enter board dimensions"
            helperText="Please enter a dimension of either 3 or 4."
            InputLabelProps={{
              classes: {
                root: classes.cssLabel
              }
            }}
            InputProps={{
              classes: {}
            }}
            error={!isValidInput}
            onKeyDown={ event => {
              if ((event.key === 'Enter') && isValidDimension(event.target.value)) setNewInstance(false)
            }}
            style={{ 'marginBottom': '1rem' }}
          />
          <br></br>
          <Button disabled={disabled} onClick={() => setNewInstance(false)} color="primary">Play Game</Button>
        </Box>
      </div>
    </ThemeProvider>
  );
};

const withDimensionScreen = (WrappedComponent) => {
  return () => {
    const [newInstance, setNewInstance] = useState(true);
    const [dimension, setDimension] = useState(3);

    if (newInstance) return <StartScreen setNewInstance={setNewInstance} setDimension={setDimension}/>;
    return <WrappedComponent dimension={dimension}/>;
  };
};

export {withDimensionScreen};
