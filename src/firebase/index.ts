import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4G8OEv42OHFkA-Sxqa7q0uqoNOMZwre4',
  authDomain: 'myproject-4370c.firebaseapp.com',
  projectId: 'myproject-4370c',
  storageBucket: 'myproject-4370c.appspot.com',
  messagingSenderId: '554535979803',
  appId: '1:554535979803:web:c78b0408dfd348656da1be',
  measurementId: 'G-T9JT0CFPE6',
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);
