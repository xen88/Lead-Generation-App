/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertPetitionField } from '../api/documents/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Document updated!' : 'Document added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    fielddescription: document.querySelector('[name="fielddescription"]').value.trim(),
    fieldtype: document.querySelector('[name="fieldtype"]').value.trim()
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertPetitionField.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.petitionfieldEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/fields/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.petitionfieldEditorForm).validate({
    rules: {
      title: {
        required: true,
      },
      fielddescription: {
        required: true,
      },
      fieldtype: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Please enter a field name.',
      },
      fielddescription: {
        required: 'Please enter a field description.',
      },
      fieldtype: {
        required: 'Please select a field type.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function petitionfieldEditor(options) {
  component = options.component;
  validate();
}
