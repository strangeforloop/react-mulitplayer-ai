import { Button, Input, ThemeProvider, Typography } from '@material-ui/core';
import { useState } from 'react';
import theme from '../utils/theme';

const StartScreen = ({setNewInstance, setDimension}) => {
  const [disabled, setDisabled] = useState(true);

  const isValidDimension = (userInput) => {
    if (parseInt(userInput, 10) < 3 || parseInt(userInput, 10) > 4) {
      return false;
    }

    return true;
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h1">Tic Tac Toe</Typography>
        <Input
          onInput={(e) => {
            if (isValidDimension(e.target.value)) {
              setDisabled(false);
              const value = parseInt(e.target.value, 10);
              setDimension(value);
            } else {
              console.log('Please enter either a 3 dimensional board or a 4 dimensional board.');
            }
          }}
          placeholder="Enter board dimensions">
        </Input>
        <br></br>
        <Button disabled={disabled} onClick={() => setNewInstance(false)} color="primary">Play Game</Button>
      </div>
    </ThemeProvider>
  );
};

const withSplashScreen = (WrappedComponent) => {
  return () => {
    const [newInstance, setNewInstance] = useState(true);
    const [dimension, setDimension] = useState(3);

    if (newInstance) return <StartScreen setNewInstance={setNewInstance} setDimension={setDimension}/>;
    return <WrappedComponent dimension={dimension}/>;
  };
};

export default withSplashScreen;
