import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';
import PetitionFields from '../petitionfields';
import Settings from '../settings';

Meteor.publish('documents.list', () => Documents.find());
Meteor.publish('petitionfields.list', () => PetitionFields.find());
Meteor.publish('settings.list', () => Settings.find());

Meteor.publish('documents.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});

Meteor.publish('petitionfields.view', (_id) => {
  check(_id, String);
  return PetitionFields.find(_id);
});

Meteor.publish('settings.view', (_id) => {
  check(_id, String);
  return Settings.find(_id);
});
