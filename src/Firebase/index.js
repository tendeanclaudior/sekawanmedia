// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDbahT283ASZR7Elstf9v2yh4XkAndGlrc',
  authDomain: 'sekawanmediaintern.firebaseapp.com',
  databaseURL: 'https://sekawanmediaintern-default-rtdb.firebaseio.com',
  projectId: 'sekawanmediaintern',
  storageBucket: 'sekawanmediaintern.appspot.com',
  messagingSenderId: '454356265428',
  appId: '1:454356265428:web:5fa3e877f7e8276571ce41',
  measurementId: 'G-P1J7W3ZS1E',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
