import React from 'react';
import PetitionFieldEditor from '../components/PetitionFieldEditor.js';
import { Grid } from 'react-bootstrap';

const EditPetitionField = ({ doc }) => (
  <Grid>
    <div className="EditPetitionField">
      <h4 className="page-header">Editing "{ doc.title }"</h4>
      <PetitionFieldEditor doc={ doc } />
    </div>
  </Grid>
);

EditPetitionField.propTypes = {
  doc: React.PropTypes.object,
};

export default EditPetitionField;
