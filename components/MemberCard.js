/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteMember } from '../api/memberData';
import { getSingleTeam } from '../api/teamData';

function MemberCard({ memberObj, teamDetails, onUpdate }) {
  const [teamGame, SetTeamGame] = useState();

  const getMembersTeam = () => {
    getSingleTeam(memberObj.team_id).then((obj) => (SetTeamGame(obj.game)));
  };

  useEffect(() => {
    if (!teamDetails) {
      getMembersTeam();
    }
  }, []);

  const deleteThisMember = () => {
    if (window.confirm(`Delete ${memberObj.name}`)) {
      deleteMember(memberObj.firebaseKey).then(() => onUpdate());
    }
  };

  if (teamDetails) {
    return (
      <Card className="member-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={memberObj.image} />
        <Card.Body>
          <Card.Title>
            <h1>{teamGame}</h1>
            <h2>{memberObj.name}</h2>
            <h3>{memberObj.role}</h3>
          </Card.Title>
          <Link href={`/member/edit/${memberObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
  return (
    <Card className="member-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={memberObj.image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <h1>{teamGame}</h1>
          <h2>{memberObj.name}</h2>
          <h3>{memberObj.role}</h3>
        </Card.Title>
        <div className="mt-auto">
          <Link href={`/member/edit/${memberObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisMember}>Delete</Button>
        </div>
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

MemberCard.defaultProps = {
  teamDetails: false,
};
