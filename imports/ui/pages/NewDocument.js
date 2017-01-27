import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';
import { Grid } from 'react-bootstrap';

const NewDocument = () => (
  <Grid>
    <div className="NewDocument">
      <h4 className="page-header">New Document</h4>
      <DocumentEditor />
    </div>
  </Grid>
);

export default NewDocument;
