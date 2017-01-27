/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';

import Documents from '../../ui/pages/Documents.js';
import Settings from '../../ui/pages/Settings.js';
import PetitionFields from '../../ui/pages/PetitionFields.js';

import NewDocument from '../../ui/pages/NewDocument.js';
import NewPetitionField from '../../ui/pages/NewPetitionField.js';

import EditDocument from '../../ui/containers/EditDocument.js';
import EditSettings from '../../ui/containers/EditSettings.js';
import EditPetitionField from '../../ui/containers/EditPetitionField.js';

import ViewDocument from '../../ui/containers/ViewDocument.js';
import ViewSettings from '../../ui/containers/ViewSettings.js';
import ViewPetitionField from '../../ui/containers/ViewPetitionField.js';

import Index from '../../ui/pages/Index.js';
import Login from '../../ui/pages/Login.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import Signup from '../../ui/pages/Signup.js';

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="settings" path="/settings" component={ Settings } onEnter={ authenticate } />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ authenticate } />
        <Route name="fields" path="/fields" component={ PetitionFields } onEnter={ authenticate } />

        <Route name="newDocument" path="/documents/new" component={ NewDocument } onEnter={ authenticate } />
        <Route name="newPetitionField" path="/fields/new" component={ NewPetitionField } onEnter={ authenticate } />

        <Route name="editDocument" path="/documents/:_id/edit" component={ EditDocument } onEnter={ authenticate } />
        <Route name="editSettings" path="/settings/:_id/edit" component={ EditSettings } onEnter={ authenticate } />
        <Route name="editPetitionField" path="/fields/:_id/edit" component={ EditPetitionField } onEnter={ authenticate } />

        <Route name="viewDocument" path="/documents/:_id" component={ ViewDocument } onEnter={ authenticate } />
        <Route name="viewSettings" path="/settings/:_id" component={ ViewSettings } onEnter={ authenticate } />
        <Route name="viewPetitionField" path="/fields/:_id" component={ ViewPetitionField } onEnter={ authenticate } />

        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
