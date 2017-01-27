import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import PetitionFieldsList from '../containers/PetitionFieldsList.js';

const PetitionFields = () => (
  <Grid>
  <div className="PetitionFields">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left pageTitle"><span className="robot bold opacity50 ">Petition Fields</span></h4>
          <Link to="/fields/new">
            <Button className="btn btn-primary btn-rounded pull-right">
              Add Field
            </Button>
          </Link>
        </div>
        <PetitionFieldsList />
      </Col>
    </Row>
  </div>
</Grid>
);

export default PetitionFields;
