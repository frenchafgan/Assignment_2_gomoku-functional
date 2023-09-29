import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import GameHistoryRow from '../components/GameHistoryRow';
import '../styles/GameHistory.css';
import { getGamesList } from '../api';
import { parseJwt } from '../redux/auth/authSlice';


export const GameHistory: React.FC = () => {
  const [userGameLogs, setUserGameLogs] = useState<[]>([]);
  const token = localStorage.getItem('token');
  let blob = parseJwt(token || '');
  
  

    useEffect(() => {
    const username = blob.username;
    if (username) {
      getGamesList(username)
        .then(response => {
          setUserGameLogs(response.data);
        })
        .catch(error => {
          console.error("Error fetching games:", error);
        });
    }
  }, [blob.username, blob._id, blob.result, blob.date, blob.winner]); 
  return (
    <div> 
      <Header />
      <main className='game-history-container'> 
        {userGameLogs.map((game: any, index) => (
          <GameHistoryRow 
            key={index+1}    
            id={index+1}
            dateAndTime={game.date}
            winner={game.winner}
          />
        ))}
        {userGameLogs.length === 0 && <p>No game logs found.</p>}
      </main>
    </div>
  );
}
export default GameHistory;