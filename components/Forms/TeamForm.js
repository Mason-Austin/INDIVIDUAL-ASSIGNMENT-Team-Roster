// import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  game: '',
  name: '',
};

function TeamForm({ obj }) {
  // const [formInput, SetFormInput] = useState(initialState);
  // const router = useRouter();
  const { user } = useAuth;

  useEffect(() => {
    // if (obj.firebaseKey) SetFormInput(obj);
  }, [obj, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Label>Team Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Team Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Label>Game Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Game Name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TeamForm;

TeamForm.propTypes = {
  obj: PropTypes.shape({
    game: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

TeamForm.defaultProps = {
  obj: initialState,
};
