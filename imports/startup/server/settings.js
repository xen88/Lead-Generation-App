import { Meteor } from 'meteor/meteor';
import '../../api/documents/server/publications.js';
import Settings from '../../api/documents/settings.js';

if (!Meteor.isProduction) {

  const settings = [
    {
      type: 'General',
      app_name: 'LeadPro',
      app_logo: '#',
      app_title: 'Lead Generation App',
      app_subtitle: 'Mobile friendly, easy to use lead capturing for your business.'
    }
  ]

  settings.forEach(({ type, app_name, app_logo, app_title, app_subtitle }) => {

    const settingsExists = Settings.findOne();

    if (!settingsExists) {

      Settings.insert({ type, app_name, app_logo, app_title, app_subtitle })

    }



  });
}
