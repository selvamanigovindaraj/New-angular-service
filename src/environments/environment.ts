// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyDQOJbfNAVZK2w2x3dB2C6rQ5Z06Qh3Y-0',
    authDomain: 'first-pwa-angular.firebaseapp.com',
    databaseURL: 'https://first-pwa-angular.firebaseio.com',
    projectId: 'first-pwa-angular',
    storageBucket: 'first-pwa-angular.appspot.com',
    messagingSenderId: '982706522059'
  }
};
