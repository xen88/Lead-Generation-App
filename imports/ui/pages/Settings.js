import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import SettingsList from '../containers/SettingsList.js';

const Settings = () => (
  <Grid>
  <div className="Settings">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left pageTitle">Settings</h4>

        </div>
        <SettingsList />
      </Col>
    </Row>
  </div>
</Grid>
);

export default Settings;
