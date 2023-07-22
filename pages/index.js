import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import TeamCard from '../components/TeamCard';
import getTeams from '../api/teamData';

function Home() {
  const [teams, SetTeams] = useState([]);

  const { user } = useAuth();

  const getAllTheTeams = () => {
    getTeams(user.uid).then(SetTeams);
  };

  useEffect(() => {
    getAllTheTeams();
  });

  return (
    <div>
      {teams.map((team) => (
        <TeamCard key={team.firebaseKey} bookObj={team} />
      ))}
    </div>
  );
}

export default Home;
