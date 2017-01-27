import React from 'react';
import { browserHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const AuthenticatedNavigation = () => (
  <div>
    <style>
      {
        `
          span.white {
            color: white
          }
          span.roboto {
            font-family: 'Roboto', sans-serif;
          }
          span.montserrat {
            font-family: 'Montserrat', sans-serif;
          }
          span.bold {
            font-weight: bold;
          }
          span.light {
            font-weight: light;
          }
          NavDropdown {
            color: white;
            font-family: 'Roboto', sans-serif;
            font-weight: light;
          }

        `
      }
    </style>

    <Nav>

      <LinkContainer to="/settings">
        <NavItem eventKey={ 5 } href="/settings"><span className="white roboto bold">Settings</span></NavItem>
      </LinkContainer>

      <LinkContainer to="/documents">
        <NavItem eventKey={ 2 } href="/documents"><span className="white roboto bold">Documents</span></NavItem>
      </LinkContainer>

      <LinkContainer to="/fields">
        <NavItem eventKey={ 4 } href="/fields"><span className="white roboto bold">Fields</span></NavItem>
      </LinkContainer>

    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 3.1 } onClick={ handleLogout }><span className="roboto">Logout</span></MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

export default AuthenticatedNavigation;
