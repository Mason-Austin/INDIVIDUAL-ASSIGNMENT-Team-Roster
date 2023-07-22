/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { getTeamMembers } from '../api/teamData';

function TeamCard({ teamObj }) {
  // const [teamMembers, SetTeamMembers] = useState([]);

  // useEffect(() => {
  //   const memberArry = [];
  //   teamObj.members?.map((member) => {
  //     getTeamMembers(member).then((memberInfo) => {
  //       memberArry.push(memberInfo);
  //     });
  //   });
  //   SetTeamMembers(memberArry);
  //   console.warn(teamMembers);
  // }, []);

  return (
    <Card style={{ width: '40%' }}>
      <Card.Body>
        <h1>{teamObj.name}</h1>
        <h2>{teamObj.game}</h2>
      </Card.Body>
    </Card>
  );
}

export default TeamCard;

TeamCard.propTypes = {
  teamObj: PropTypes.shape({
    game: PropTypes.string,
    name: PropTypes.string,
    members: PropTypes.array,
  }).isRequired,
};
