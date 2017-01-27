import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import AppNavigation from '../components/AppNavigation.js';
// import AppNavigationAlt from '../components/AppNavigationAlt.js';

const composer = (props, onData) => onData(null, { hasUser: Meteor.user() });

export default composeWithTracker(composer, {}, {}, { pure: false })(AppNavigation);