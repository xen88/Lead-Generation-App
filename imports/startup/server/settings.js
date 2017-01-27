import { Meteor } from 'meteor/meteor';
import '../../api/documents/server/publications.js';
import Settings from '../../api/documents/settings.js';

if (!Meteor.isProduction) {
  // const users = [{
  //   email: 'cghurrell@gmail.com',
  //   password: 'password',
  //   profile: {
  //     name: { first: 'Chris', last: 'Hurrell' },
  //   },
  //   roles: ['admin'],
  // }];
  const settings = [
    {
      type: 'General',
      app_name: 'Petition App',
      app_logo: '#',
      app_title: 'Petition App',
      app_subtitle: 'Petition app'
    }
  ]

  settings.forEach(({ type, app_name, app_logo, app_title, app_subtitle }) => {


    // const settings = Settings.findOne();
    // console.log(settings);
    const settingsExists = Settings.findOne();

    if (!settingsExists) {

      Settings.insert({ type, app_name, app_logo, app_title, app_subtitle })

    }



  });
}
