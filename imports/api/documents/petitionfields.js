import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const PetitionFields = new Mongo.Collection('PetitionFields');
export default PetitionFields;

PetitionFields.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

PetitionFields.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

PetitionFields.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'Form field name.',
  },
  fielddescription: {
    type: String,
    label: 'Field description.',
  },
  fieldtype: {
    type: String,
    label: 'Form field input type.',
  },
});

PetitionFields.attachSchema(PetitionFields.schema);

Factory.define('petitionfield', PetitionFields, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
});
