import React, { useState } from 'react';
import { Box, Button, Grid, Link, ThemeProvider, Typography } from '@material-ui/core';
import theme from '../utils/theme';
import '../App.css';

const ChoosePlayerNumberScreen = ({ setNumberOfPlayers, setPlayerNumberWasChosen }) => {
  return(
    <ThemeProvider theme={theme}>
      <div style={{ 'margin': '3rem'}}>
        <Typography variant="h4" style={{ 'marginBottom': '1rem'}}>Let's play Tic Tac Toe or Connect Four</Typography>
        <Typography variant="h5" color="primary">First, choose the number of players:</Typography>
        <Grid container style={{ 'maxWidth': '900px', 'margin': 'auto' }}>
          <Grid item sm={6} style={{ 'width' : '100%', 'marginTop': '1rem' }}>
            <Button
              style={{ 'width': '50%'}}
              variant="contained" onClick={() => {
                setNumberOfPlayers(1);
                setPlayerNumberWasChosen(true);
              }}
              color="primary">
                1 Player
            </Button>
            <Box px={3} paddingTop={2}>
              <Typography variant="body1" style={{'marginBottom': '1rem' }}>1 Player mode pits you against an AI player that uses the Minimax algorithm, a game theory strategy, to choose the best move to make.</Typography>
              <Link href="https://en.wikipedia.org/wiki/Minimax" color="textSecondary" target="_blank" rel="noopener">Click to read more about the AI logic!</Link>
            </Box>
          </Grid>
          <Grid item sm={6} style={{ 'width' : '100%', 'marginTop': '1rem'}}>
            <Button
              style={{ 'width': '50%'}}
              variant="contained" onClick={() => {
                setNumberOfPlayers(2);
                setPlayerNumberWasChosen(true);
              }}
              color="primary">
                2 Players
            </Button>
            <Box px={3} paddingTop={2}>
              <Typography variant="body1">2 Player mode pits you against a real person.</Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

const withInstructionScreen = (WrappedComponent) => {
  return () => {
    const [playerNumberWasChosen, setPlayerNumberWasChosen] = useState(false);
    const [numberOfPlayers, setNumberOfPlayers] = useState(1);

      if (!playerNumberWasChosen) return <ChoosePlayerNumberScreen setNumberOfPlayers={setNumberOfPlayers}  setPlayerNumberWasChosen={setPlayerNumberWasChosen}/>;
      return <WrappedComponent numberOfPlayers={numberOfPlayers}/>;
  };
};

export default withInstructionScreen;
