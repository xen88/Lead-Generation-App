import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Hero = ({ doc }) => (
  
  <Jumbotron className="text-center bgBlue br0 ">
    <h2><span className="roboto bold white">{ doc && doc.app_title }</span></h2>
    <p><span className="roboto light white">{ doc && doc.app_subtitle }</span></p>
  </Jumbotron>

);

Hero.propTypes = {
  doc: React.PropTypes.object,
};

export default Hero;
