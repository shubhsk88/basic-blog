import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB6vv3SBelDNSYAerRdjsy72AOGoXNxkMI',
  authDomain: 'think-piece-blogg.firebaseapp.com',
  databaseURL: 'https://think-piece-blogg.firebaseio.com',
  projectId: 'think-piece-blogg',
  storageBucket: 'think-piece-blogg.appspot.com',
  messagingSenderId: '476796458498',
  appId: '1:476796458498:web:2ffdb0e8252d486dde791b',
  measurementId: 'G-8BB0WC7147'
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

window.firebase = firebase;

export default firebase;
