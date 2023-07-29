/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MemberCard from '../../components/MemberCard';
import { viewTeamDetails } from '../../api/mergedData';

export default function ViewTeam() {
  const [teamDetails, SetTeamDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const getTeamDetails = () => {
    viewTeamDetails(firebaseKey).then(SetTeamDetails);
  };

  useEffect(() => {
    getTeamDetails();
  }, [firebaseKey]);
  console.warn(teamDetails);
  return (
    <>
      <>
        <h1>{teamDetails.name}</h1>
        <h2>{teamDetails.game}</h2>
      </>
      <div className="flex-rw">
        {teamDetails.members?.map((member) => (
          <MemberCard key={member.firebaseKey} teamDetails={true} memberObj={member} onUpdate={getTeamDetails} />
        ))}
      </div>
    </>
  );
}
