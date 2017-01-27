import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Settings from '../../api/documents/settings.js';
import Hero from '../components/Hero.js';
// import Loading from '../components/Loading.js';



  const composer = ( { params }, onData) => {
  const subscription = Meteor.subscribe('settings.list');
  console.log(params)
  if (subscription.ready()) {
    const doc  = Settings.findOne();
// console.log(doc)
    onData(null, { doc });
  }
}

export default composeWithTracker(composer)(Hero);
