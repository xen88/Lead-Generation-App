import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import PetitionFields from '../../api/documents/petitionfields.js';
import FieldsList from '../components/FieldsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('petitionfields.list');
  if (subscription.ready()) {
    const petitionfields = PetitionFields.find().fetch();
    onData(null, { petitionfields });
  }
};

export default composeWithTracker(composer, Loading)(FieldsList);
