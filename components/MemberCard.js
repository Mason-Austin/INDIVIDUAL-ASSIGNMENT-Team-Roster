import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteMember } from '../api/memberData';

function MemberCard({ memberObj, onUpdate }) {
  const deleteThisMember = () => {
    if (window.confirm(`Delete ${memberObj.name}`)) {
      deleteMember(memberObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={memberObj.image} />
      <Card.Body>
        <Card.Title>
          <h1>{memberObj.team_name}</h1>
          <h2>{memberObj.name}</h2>
          <h3>{memberObj.role}</h3>
        </Card.Title>
        <Button variant="danger" onClick={deleteThisMember}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default MemberCard;

MemberCard.propTypes = {
  memberObjObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    team_name: PropTypes.string,
    team_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func,
}.isRequired;