import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';
import { Grid } from 'react-bootstrap';

const EditDocument = ({ doc }) => (
  <Grid>
      <div className="EditDocument">
          <h4 className="page-header">Editing "{ doc.title }"</h4>
          <DocumentEditor doc={ doc } />
      </div>
  </Grid>
);

EditDocument.propTypes = {
  doc: React.PropTypes.object,
};

export default EditDocument;
