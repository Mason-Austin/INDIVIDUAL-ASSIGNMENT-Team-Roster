import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import TeamCard from '../components/TeamCard';
import getTeams from '../api/teamData';

function Home() {
  const [teams, SetTeams] = useState([]);

  const { user } = useAuth();

  const getAllTheTeams = () => {
    getTeams(user.uid).then(SetTeams);
    console.warn(SetTeams);
  };

  useEffect(() => {
    getAllTheTeams();
  });

  return (
    <div>
      {teams.map((team) => (
        <TeamCard key={team.firebaseKey} teamObj={team} />
      ))}
    </div>
  );
}

export default Home;
