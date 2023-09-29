import '../styles/GameLog.css';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // <-- Add useParams
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';  // <-- Assume you have this file for Redux store
import { getSingleGame } from '../api';  // <-- Add this import for API function
import Header from '../components/Header';

interface Move {
  x: number;
  y: number;
  color: string;
  player: number;
}

interface GameDetails {
  id: number;
  boardSize: number;
  result: string;
  moves: Move[];
}

const GameLog: React.FC = () => {
  const [gameDetails, setGameDetails] = useState<GameDetails | null>(null);  // <-- Initialize to null
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const token = localStorage.getItem('token');  // Get the token
  const { id } = useParams();  // <-- Get the game ID from the URL
  

  useEffect(() => {
    if (id && currentUser && token) {
      getSingleGame(id)  // <-- Fetch single game details based on id
        .then(response => {
          const gameData = response.data;
          if (gameData) {
            setGameDetails(gameData);  // <-- Set game details
          }
        })
        .catch(error => {
          console.error("Error fetching game:", error);
        });
    }
  }, [id, currentUser, token]);
      
    const renderCell = (x: number, y: number, cellColor: string) => {
        if (!gameDetails) {
            throw new Error("Game details must not be null when rendering cells.");
          }
        const move = gameDetails.moves.find((m: Move) => m.x === x && m.y === y);
            if (move) {
            return (
                <div className={`cell ${move.color}`} key={`${x}-${y}`}>
                <span className="stone-number">{gameDetails.moves.indexOf(move) + 1}</span>
                </div>
            );
            }
            return <div className={`cell ${cellColor}`} key={`${x}-${y}`} />;
        };
    if (!gameDetails) {
        return <div>Play a game first to see the log</div>;
        }
   
    return (
        <div>
            <Header />
           
                 <div className="container">
                     <div className="game-info">Winner: {gameDetails.result}</div>
      
                <div className="board">
                {Array.from({ length: gameDetails.boardSize }).map((_, y) => (
                    <div className="row" key={y}>
                        {Array.from({ length: gameDetails.boardSize }).map((_, x) => (
                            renderCell(x, y, 'empty')
                        ))}
                    </div>
                ))}
                </div>
            </div>
            <div className="container">
                <div className="back-button">
                    <button onClick={() => navigate('/games')}>Back</button>
                </div>
            </div>
         
        </div>
    );
};
export default GameLog;
