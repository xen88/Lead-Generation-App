/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { Grid, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import petitionfieldEditor from '../../modules/petitionfield-editor.js';

export default class PetitionFieldEditor extends React.Component {
  componentDidMount() {
    petitionfieldEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (

      <form
      ref={ form => (this.petitionfieldEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ doc && doc.title }
          placeholder="Field Name"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Description</ControlLabel>
        <FormControl
          type="text"
          name="fielddescription"
          defaultValue={ doc && doc.fielddescription }
          placeholder="Field Description"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Type</ControlLabel>
        <FormControl
          type="text"
          name="fieldtype"
          defaultValue={ doc && doc.fieldtype }
          placeholder="Select a field type"
        />
      </FormGroup>

      <Button type="submit" className="btn btn-primary btn-block btn-xxl fixed-bottom ">
        <span className="roboto white bold uppercase">
        { doc && doc._id ? 'Save Changes' : 'Add Field' }
        <i className="mrx mrx-arrow-right"></i>
        </span>
      </Button>

    </form>

  );
  }
}

PetitionFieldEditor.propTypes = {
  doc: React.PropTypes.object,
};
