import { ITeam } from "../../types/Team";
import Loader from "../Loader/Loader";
import "./Table.scss";

interface TeamBlockProps {
  team: ITeam;
  isLoading: boolean;
}

const TeamBlock: React.FC<TeamBlockProps> = ({ team, isLoading }) => {
  return (
    <div className="table__block">
      <div className="table__team">
        <div className="table__logo-container">
          {isLoading ? (
            <Loader />
          ) : (
            <img src={team.team.logo} alt={`Team ${team.team.name}`} />
          )}
        </div>
      </div>
      <h2 className="table__name">{isLoading ? 'Loading...' : team.team.name}</h2>
    </div>
  );
};

interface TableProps {
  match: ITeam[];
  isLoading: boolean;
}

const Table: React.FC<TableProps> = ({ match, isLoading }) => {
  return (
    <div className="table">
      <TeamBlock team={match[0]} isLoading={isLoading} />
      <div className="table__vs">VS</div>
      <TeamBlock team={match[1]} isLoading={isLoading} />
    </div>
  );
};

export default Table;
