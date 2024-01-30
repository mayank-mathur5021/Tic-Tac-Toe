import Strike from "./Strike";
import Tile from "./tiles";

function Board({value, click, playerTurn, strikeValue, state}){
    return(
        <div className="board">
        <Tile className="right-border bottom-border" value={value[0]} onClick={()=> click(0)} turn={playerTurn} gameState={state}/>
        <Tile className="right-border bottom-border" value={value[1]} onClick={()=> click(1)} turn={playerTurn} gameState={state}/>
        <Tile className="bottom-border" value={value[2]} onClick={()=> click(2)} turn={playerTurn}  gameState={state}/>
        <Tile className="right-border bottom-border" value={value[3]} onClick={()=> click(3)} turn={playerTurn}  gameState={state}/>
        <Tile className="right-border bottom-border" value={value[4]} onClick={()=> click(4)} turn={playerTurn}  gameState={state}/>
        <Tile className="bottom-border" value={value[5]} onClick={()=> click(5)} turn={playerTurn}  gameState={state}/>
        <Tile className="right-border" value={value[6]} onClick={()=> click(6)} turn={playerTurn}  gameState={state}/>
        <Tile className="right-border" value={value[7]} onClick={()=> click(7)} turn={playerTurn}  gameState={state}/>
        <Tile value={value[8]} onClick={()=> click(8)} turn={playerTurn}  gameState={state}/>
        <Strike strike={strikeValue}/>
        </div>
    )
}

export default Board;