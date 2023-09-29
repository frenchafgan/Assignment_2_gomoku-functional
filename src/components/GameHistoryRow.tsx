import '../styles/GameHistory.css';
import { useNavigate } from 'react-router-dom'; 

interface GameHistoryRowProps {
  id: number;
  dateAndTime: Date;
  winner: 'Black' | 'White' | null;
}

const GameHistoryRow: React.FC<GameHistoryRowProps> = ({ id, dateAndTime, winner }) => {
  const navigate = useNavigate();

  const viewGameLog = () => {
    navigate(`/game-log/${id}`);
  };

    console.log("Game ID of Winner:", id, winner);
  // console.log("Winner data for this row:", saveGameDetails.winner);


  return (
    <div className="game-history-row">
      <span>Game #{id}</span>
      <span>@{new Date().toLocaleDateString()}</span>
      <span>{winner ? `Winner: ${winner}` : 'Game is a draw'}</span>
      <div className="game-history-row-divider">
        <button onClick={viewGameLog}>View game log</button>
      </div>
    </div>  
    
  );
};

export default GameHistoryRow;