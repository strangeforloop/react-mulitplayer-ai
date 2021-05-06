import { Button, TextField, ThemeProvider, Typography } from '@material-ui/core';
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

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h3">Enter Board Dimensions</Typography>
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
          error={!isValidInput}
          helperText="Please enter a dimension of either 3 or 4."
          onKeyDown={ event => {
            if (event.key === 'Enter') setNewInstance(false)
          }}
          />
        <br></br>
        <Button disabled={disabled} onClick={() => setNewInstance(false)} color="primary">Play Game</Button>
      </div>
    </ThemeProvider>
  );
};

const withDimensionScreen = (WrappedComponent) => {
  return ({ numberOfPlayers }) => {
    const [newInstance, setNewInstance] = useState(true);
    const [dimension, setDimension] = useState(3);

    if (newInstance) return <StartScreen setNewInstance={setNewInstance} setDimension={setDimension}/>;
    return <WrappedComponent numberOfPlayers={numberOfPlayers} dimension={dimension}/>;
  };
};

export default withDimensionScreen;
