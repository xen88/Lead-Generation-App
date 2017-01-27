import React from 'react';
// import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';

// const renderNavigation = hasUser => (hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />);

const AppNavigationAlt = ({ hasUser }) => (

  <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
              <div className="navbar-header">
                  <div id="mobile-menu">
                      <div className="left-nav-toggle">
                          <a href="#">
                              <i className="stroke-hamburgermenu"></i>
                          </a>
                      </div>
                  </div>
                  <a className="navbar-brand" href="index.html">
                      LUNA
                  </a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                  <div className="left-nav-toggle">
                      <a href="">
                          <i className="stroke-hamburgermenu"></i>
                      </a>
                  </div>

                  <ul className="nav navbar-nav navbar-right">
                      <li className="dropdown">
                          <a href="versions.html">Versions
                              <span className="label label-warning pull-right">2</span>
                          </a>
                      </li>
                      <li className=" profil-link">
                          <a href="login.html">
                              <span className="profile-address">luna@company.io</span>
                              <img src="images/profile.jpg" className="img-circle" alt="" />
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>

);

AppNavigationAlt.propTypes = {
  hasUser: React.PropTypes.object,
};

export default AppNavigationAlt;
