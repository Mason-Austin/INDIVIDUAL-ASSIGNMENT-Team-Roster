/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getMembers } from '../api/memberData';
import MemberCard from '../components/MemberCard';
import SearchBar from '../utils/SearchBar';

function ViewMember() {
  const [members, SetMembers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const { user } = useAuth();

  const getAllMembers = () => {
    getMembers(user.uid).then((allMembers) => {
      SetMembers(allMembers);
      setSearchResults(allMembers);
    });
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <>
      <SearchBar contents={members} setSearchResults={setSearchResults} />
      <div className="flex-rw">
        {searchResults?.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
        ))}
      </div>
    </>
  );
}

export default ViewMember;
