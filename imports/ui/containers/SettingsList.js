import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Settings from '../../api/documents/settings.js';
import SettingsList from '../components/SettingsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('settings.list');
  if (subscription.ready()) {
    const settings = Settings.find().fetch();
    onData(null, { settings });
  }
};

export default composeWithTracker(composer, Loading)(SettingsList);
