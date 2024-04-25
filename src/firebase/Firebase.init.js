// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgVoOvbGVb8fWOJwdMRV9zoSmtPzC42qA',
  authDomain: 'assignment-10-7b306.firebaseapp.com',
  projectId: 'assignment-10-7b306',
  storageBucket: 'assignment-10-7b306.appspot.com',
  messagingSenderId: '378728419094',
  appId: '1:378728419094:web:8a658622a419cdbf274a37',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
