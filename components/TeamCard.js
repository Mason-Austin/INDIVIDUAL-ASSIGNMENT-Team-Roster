/* eslint-disable react/forbid-prop-types */
import Card from 'react-bootstrap/Card';
import { propTypes } from 'react-bootstrap/esm/Image';

function TeamCard({ teamObj }) {
  return (
    <Card>
      <Card.Body>
        <h2>{teamObj.name} {teamObj.game}</h2>
        {teamObj.members.map((member) => (
          <h3>{member}</h3>
        ))}
      </Card.Body>
    </Card>
  );
}

export default TeamCard;

TeamCard.propTypes = {
  teamObj: propTypes.shape({
    game: propTypes.sring,
    name: propTypes.sring,
    members: propTypes.array,
  }).isRequired,
};
