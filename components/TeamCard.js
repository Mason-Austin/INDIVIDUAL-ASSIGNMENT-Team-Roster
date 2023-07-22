/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function TeamCard({ teamObj }) {
  return (
    <Card>
      <Card.Body>
        <h2>{teamObj.name} {teamObj.game}</h2>
        {teamObj.members?.map((member) => (
          <h3>{member}</h3>
        ))}
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
