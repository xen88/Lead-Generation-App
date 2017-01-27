import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import PetitionFields from '../../api/documents/petitionfields.js';
import EditPetitionField from '../pages/EditPetitionField.js';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('petitionfields.view', params._id);

  if (subscription.ready()) {
    const doc = PetitionFields.findOne();
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(EditPetitionField);
