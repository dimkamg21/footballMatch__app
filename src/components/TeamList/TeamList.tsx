import { ITeam } from "../../types/Team";
import FootballPitch from "../FootballPitch/FootballPitch";
import TeamItem from "../TeamItem/TeamItem";
import "./TeamList.scss";

interface FieldProps {
  matchInfo: ITeam[];
}

const TeamList: React.FC<FieldProps> = ({ matchInfo }) => {
  return (
    <div className="teamList">
      <div className="teamList__pitch">
        <FootballPitch />
      </div>
      <div className="teamList__teams">
        {matchInfo.map((team, index) => (
          <TeamItem 
            key={team.team.id} 
            team={team} 
            isLeft={index === 0} 
          />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
