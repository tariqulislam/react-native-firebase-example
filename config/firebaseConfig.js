 import firebase from 'firebase/app'
 import 'firebase/firestore'
 // Initialize firebase config
 const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);
  firebase.firestore();
  
  export default firebase;