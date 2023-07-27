/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getMembers } from '../api/memberData';
import MemberCard from '../components/MemberCard';

function ViewMember() {
  const [members, SetMembers] = useState([]);

  const { user } = useAuth();

  const getAllMembers = () => {
    getMembers(user.uid).then(SetMembers);
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <div className="flex-rw">
      {members.map((member) => (
        <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
      ))}
    </div>
  );
}

export default ViewMember;
