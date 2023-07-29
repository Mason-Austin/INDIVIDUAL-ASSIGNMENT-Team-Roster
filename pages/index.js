/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import TeamCard from '../components/TeamCard';
import { getTeams } from '../api/teamData';
import SearchBar from '../utils/SearchBar';

function Home() {
  document.title = 'Teams';
  const [teams, SetTeams] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const { user } = useAuth();

  const getAllTheTeams = () => {
    getTeams(user.uid).then((allTeams) => {
      SetTeams(allTeams);
      setSearchResults(allTeams);
    });
  };

  useEffect(() => {
    getAllTheTeams();
  }, []);

  return (
    <>
      <SearchBar contents={teams} setSearchResults={setSearchResults} />
      <div className="flex-rw center">
        {searchResults?.map((team) => (
          <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getAllTheTeams} />
        ))}
      </div>
    </>
  );
}

export default Home;
