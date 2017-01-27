import React from 'react';
import { Grid } from 'react-bootstrap';
import Hero from '../containers/Hero.js';
import FieldsList from '../containers/FieldsList.js';
import SettingsList from '../containers/SettingsList.js';

const Index = () => (

  <div className="Index">
    <Hero />
    <Grid>
      <FieldsList />
    </Grid>
  </div>

);

export default Index;
