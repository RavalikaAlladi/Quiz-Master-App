import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAUsuu8gWmkyAn22Od51ZsxcmSBPNm5rGk",
  authDomain: "quiz-app--vt.firebaseapp.com",
  databaseURL: "https://quiz-app--vt-default-rtdb.firebaseio.com",
  projectId: "quiz-app--vt",
  storageBucket: "quiz-app--vt.appspot.com",
  messagingSenderId: "103004484006",
  appId: "1:103004484006:web:ded8b7c172372de96a5f67"
};


// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);

export default  firebase.database()