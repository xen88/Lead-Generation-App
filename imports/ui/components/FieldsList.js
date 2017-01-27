import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, FormGroup, ControlLabel, FormControl, Alert, Button } from 'react-bootstrap';

const FieldsList = ({ petitionfields }) => (


  petitionfields.length > 0 ? <form
    ref={ form => (this.fieldsEditorForm = form) }
    onSubmit={ event => event.preventDefault() }
  ><ListGroup className="PetitionFieldsList">
    {petitionfields.map(({ _id, title, fielddescription, fieldtype }) => (


        <FormGroup key={ _id }>
          <ControlLabel>{title}</ControlLabel>
          <FormControl
            type={fieldtype}
            name={title}
            placeholder={fielddescription}
          />
        </FormGroup>

    ))}
    <Button type="submit" className="btn btn-primary btn-block btn-xxl fixed-bottom ">
      <span className="roboto white bold uppercase">
      Submit Petition <i className="mrx mrx-arrow-right"></i>
      </span>
    </Button>
</ListGroup></form>
:
  <Alert bsStyle="warning">No fields yet.</Alert>
);


FieldsList.propTypes = {
  petitionfields: React.PropTypes.array,
};

export default FieldsList;
