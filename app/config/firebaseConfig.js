// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyB1qjHzwljOLOVjGV-gtVnjO--4huUnzFI',

  authDomain: 'musicapp-45bac.firebaseapp.com',

  projectId: 'musicapp-45bac',

  storageBucket: 'musicapp-45bac.appspot.com',

  messagingSenderId: '331522850981',

  appId: '1:331522850981:web:01474630cddc558540cd4c',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { storage, firestore };
