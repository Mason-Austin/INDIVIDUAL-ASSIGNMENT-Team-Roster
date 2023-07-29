/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function SearchBar({ contents, setSearchResults }) {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => setInput(e.target.value.toLowerCase());

  useEffect(() => {
    if (!contents) {
      setSearchResults(contents);
    }
    console.warn('SearchBar Contents', contents);
    const resultsArray = contents.filter((content) => content.name?.toLowerCase().includes(input) || content.game?.toLowerCase().includes(input));
    setSearchResults(resultsArray);
  }, [input]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="search" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            onKeyUp={handleSearchChange}
            placeholder="Search here"
          />
        </Form.Group>
      </Form>
    </>
  );
}

SearchBar.propTypes = {
  data: PropTypes.array,
  setSearchResults: PropTypes.func,
}.isRequired;
