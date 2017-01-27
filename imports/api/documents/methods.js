import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Documents from './documents';
import Settings from './settings';
import PetitionFields from './petitionfields';
import Petitions from './petitions';
import rateLimit from '../../modules/rate-limit.js';

export const upsertDocument = new ValidatedMethod({
  name: 'documents.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
  }).validator(),
  run(document) {
    return Documents.upsert({ _id: document._id }, { $set: document });
  },
});
export const upsertPetition = new ValidatedMethod({
  name: 'petitions.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
  }).validator(),
  run(document) {
    return Documents.upsert({ _id: document._id }, { $set: document });
  },
});

export const removeDocument = new ValidatedMethod({
  name: 'documents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Documents.remove(_id);
  },
});
export const upsertSettings = new ValidatedMethod({
  name: 'settings.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    app_name: { type: String, optional: true },
    app_title: { type: String, optional: true },
    app_subtitle: { type: String, optional: true },
    app_logo: { type: String, optional: true },
  }).validator(),
  run(setting) {
    console.log('Settings Upsert Triggered')
    console.log(setting)
    return Settings.upsert({ _id: setting._id }, { $set: setting });
  },
});

export const removeSettings = new ValidatedMethod({
  name: 'settings.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Settings.remove(_id);
  },
});

export const upsertPetitionField = new ValidatedMethod({
  name: 'petitionfields.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: false },
    fielddescription: { type: String, optional: false },
    fieldtype: { type: String, optional: false }
  }).validator(),
  run(petitionfield) {
    return PetitionFields.upsert({ _id: petitionfield._id }, { $set: petitionfield });
  },
});

export const removePetitionField = new ValidatedMethod({
  name: 'petitionfields.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    PetitionFields.remove(_id);
  },
});


rateLimit({
  methods: [
    upsertDocument,
    removeDocument,
    upsertPetitionField,
    removePetitionField,
  ],
  limit: 5,
  timeRange: 1000,
});
