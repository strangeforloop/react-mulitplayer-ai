import React, { useState } from 'react';
import { Instructions } from './Instructions';
import { Button } from '@material-ui/core';

const ChoosePlayerNumberScreen = ({ setNumberOfPlayers, setPlayerNumberWasChosen }) => {
  return(
    <>
      <h1>Let's play Tic Tac Toe or Connect Four</h1>
      <h3>First, choose the number of players</h3>
      <Button
        variant="contained" onClick={() => {
          setNumberOfPlayers(1);
          setPlayerNumberWasChosen(true);
        }}
        color="primary">
          1 Player
        </Button>
      <Button
        variant="contained" onClick={() => {
          setNumberOfPlayers(1);
          setPlayerNumberWasChosen(true);
        }}
        color="primary">
          2 Players
        </Button>
      <Instructions />
    </>
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
