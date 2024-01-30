function Tile({ className, value, onClick, turn, gameState }) {
  let hoverValue = null;
  if (value === null && gameState === 'In Progress') {
    hoverValue = `${turn.toLowerCase()}-hover`;
  }

  return (
    <div className={`tile ${className} ${hoverValue}`} onClick={onClick}>
      {value}
    </div>
  );
}

export default Tile;
