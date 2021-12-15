/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
//  import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyDtD1nfToTRoYTIJS8W53ygbOdtlnEUQu8",
  authDomain: "friendlychat-d1649.firebaseapp.com",
  projectId: "friendlychat-d1649",
  storageBucket: "friendlychat-d1649.appspot.com",
  messagingSenderId: "207186312185",
  appId: "1:207186312185:web:cb7d4fbe664e8ffb711b28"
};

// const app = initializeApp(config);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}