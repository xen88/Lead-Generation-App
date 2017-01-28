import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';
import Hero from '../containers/Hero.js';

const Documents = () => (
  <div>
  <Hero />
  <Grid fluid>
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left pageTitle">Documents</h4>
          <Link to="/documents/new">
            <Button className="btn btn-primary btn-rounded pull-right">
              New Document
            </Button>
          </Link>
        </div>
        <DocumentsList />
      </Col>
    </Row>
  </div>
</Grid>
</div>
);

export default Documents;
