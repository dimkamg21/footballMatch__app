import { useEffect, useState } from "react";
import TeamList from "./components/TeamList/TeamList";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Table from "./components/Table/Table";
import logo from './assets/premierLogo.png';
import { IMatchData } from "./types/MatchData";
import { fetchTeam } from "./helpers/fetchTeam";
import "./App.scss";

function App() {
  const [currentMatch, setCurrentMatch] = useState<IMatchData | null>(null);
  const [matchId, setMatchId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const matches = [1, 2, 3];

  function handleMatchChange(newMatchId: number) {
    if (newMatchId !== matchId) {
      // setIsLoading(true);
      setMatchId(newMatchId);
    }
  }

  useEffect(() => {
    setIsLoading(true); 

    fetchTeam(matchId)
      .then((matchData) => {
        setCurrentMatch(matchData);
      })
      .finally(() => setIsLoading(false));
  }, [matchId]);

  return (
    <div className="app">
      <header className="header">
        <div className="header__title">
          <h1 className="header__text">Premier League</h1>
          <img className="header__img"src={logo} />
        </div>

        {currentMatch && (
          <>
           <Table match={currentMatch.response} isLoading={isLoading} />

           <div className="team-buttons">
             {matches.map((matchesNum) => (
               <Button
                 key={matchesNum}
                 matchNum={matchesNum}
                 isActive={matchId === matchesNum}
                 handleClick={handleMatchChange}
               />
             ))}
            </div>
           </>
        )}
       
      </header>

      {currentMatch && !isLoading && (
        <TeamList matchInfo={currentMatch?.response} />
      )}

      {isLoading && <Loader />}
    </div>
  );
}

export default App;
