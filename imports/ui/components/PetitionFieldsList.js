import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  browserHistory.push(`/fields/${_id}`);
}

const PetitionFieldsList = ({ petitionfields }) => (
  petitionfields.length > 0 ? <ListGroup className="PetitionFieldsList">
    {petitionfields.map(({ _id, title }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
        <span className="roboto bold listItem">{ title }</span>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No fields yet.</Alert>
);

PetitionFieldsList.propTypes = {
  documents: React.PropTypes.array,
};

export default PetitionFieldsList;
