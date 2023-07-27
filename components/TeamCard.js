/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteTeamandMembers } from '../api/mergedData';

function TeamCard({ teamObj, onUpdate }) {
  const deleteThisTeamAndMembers = () => {
    if (window.confirm(`Delete ${teamObj.name} team?`)) {
      deleteTeamandMembers(teamObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '40%' }}>
      <Card.Body>
        <h1>{teamObj.name}</h1>
        <h2>{teamObj.game}</h2>
        <Link href={`/team/${teamObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/team/edit/${teamObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisTeamAndMembers} className="m-2">
          DELETE
        </Button>
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
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func,
}.isRequired;
