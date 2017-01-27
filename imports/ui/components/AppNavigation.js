import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />);

const AppNavigation = ({ hasUser }) => (

  <Navbar bsClass="noMargin altStyle navbar">
    <style type="text/css">{`
    .noMargin {
        margin-bottom: 0px;
    }
    .altStyle {
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: rgba(255, 255, 255, 0.14);
    border-radius: 0;
    color: #FFF;
    background: #3076E8;
}

    `}</style>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><span className="white montserrat bold uppercase opacity50">Petition App</span></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      { renderNavigation(hasUser) }
    </Navbar.Collapse>
  </Navbar>

);

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};

export default AppNavigation;
