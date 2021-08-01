import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//we need to somehow seed the data base

const config = {
  apiKey: 'AIzaSyCVRLxUdXu5cltkqymw6iQq2RKnaGo3RUs',
  authDomain: 'netflix-271d0.firebaseapp.com',
  projectId: 'netflix-271d0',
  storageBucket: 'netflix-271d0.appspot.com',
  messagingSenderId: '481948069968',
  appId: '1:481948069968:web:e7924e2e81a0f34a6de155',
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
