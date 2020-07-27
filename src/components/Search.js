import React from 'react';
import { Button, Form, FormControl, InputGroup, Container } from 'react-bootstrap'

function Search({ handleSearchChange }) {
  return (
    <>
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            id="search"
            placeholder="Search by first or last name..."
            aria-label="Search by first or last name..."
            onChange={event => handleSearchChange(event)}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </>
  );
}

export default Search;