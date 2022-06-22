import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB-yzsmnDm-yFvnrppVa_aqBXpSaf9Geyc",
    authDomain: "finalproject-8166e.firebaseapp.com",
    projectId: "finalproject-8166e",
    storageBucket: "finalproject-8166e.appspot.com",
    messagingSenderId: "1051136298946",
    appId: "1:1051136298946:web:df15ed66aa05f9b17d905b"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;