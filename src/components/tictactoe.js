import { useEffect, useState } from "react";
import Board from "./Board";
import GameState from "./GameState";
import PlayAgain from "./PlayAgain";

const PLAYER_X = "X";
const PLAYER_O = "O";
const possibility = [
  //row wins
  { combo: [0, 1, 2], strike: "row-1-strike" },
  { combo: [3, 4, 5], strike: "row-2-strike" },
  { combo: [6, 7, 8], strike: "row-3-strike" },
  //column wins
  { combo: [0, 3, 6], strike: "column-1-strike" },
  { combo: [1, 4, 7], strike: "column-2-strike" },
  { combo: [2, 5, 8], strike: "column-3-strike" },
  //diagonal wins
  { combo: [0, 4, 8], strike: "diagonal-1-strike" },
  { combo: [2, 4, 6], strike: "diagonal-2-strike" },
];

function Tictactoe() {
  const [value, setValue] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strike, setStrike] = useState();
  const [gameState, setGameState] = useState('In Progress');

  useEffect(() => {
    for (let options of possibility) {
      if (
        value[options.combo[0]] !== null &&
        value[options.combo[0]] === value[options.combo[1]] &&
        value[options.combo[1]] === value[options.combo[2]]
      ) {
        setStrike(options.strike);
        if(playerTurn === PLAYER_O){
            setGameState(`Player ${PLAYER_X} is the winner`);
        }
        else{
            setGameState(`Player ${PLAYER_O} is the winner`);
        }
      }
    }
    if(!value.includes(null) && gameState === 'In Progress'){
        setGameState('The Game is Draw');
    }
  }, [value, playerTurn, gameState]);

  const handleClick = (index) => {
    if (value[index] !== null || gameState !== 'In Progress') {
      return;
    }
    const newValue = [...value];
    newValue[index] = playerTurn;
    setValue(newValue);
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  const handleClick2 = () => {
    setValue(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrike(undefined);
    setGameState("In Progress");
  }
  return (
    <div className="tictactoe">
      <h1>Tic Tac Toe</h1>
      <Board
        value={value}
        click={handleClick}
        playerTurn={playerTurn}
        strikeValue={strike}
        state={gameState}
      /><br/><br/>
      <GameState state={gameState}/><br/>
      <PlayAgain click={handleClick2}/>
    </div>
  );
}

export default Tictactoe;
