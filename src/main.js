import App from './App.svelte';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAMb_q4dmhjuFb5eDiE99nLxn8hy7oDkiY',
  authDomain: 'svelte-poc.firebaseapp.com',
  projectId: 'svelte-poc',
  storageBucket: 'svelte-poc.appspot.com',
  messagingSenderId: '593557555355',
  appId: '1:593557555355:web:e705292c5384af5835de3e',
  measurementId: 'G-7ET2G6NKGY',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const app = new App({
  target: document.body,
});

export default app;
