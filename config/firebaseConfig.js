import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize firebase config
const config = {
  apiKey: "AIzaSyASv79xD1U8kJTwoijbnLrHcHj_BWQ-_Ck",
  authDomain: "music-choise.firebaseapp.com",
  databaseURL: "https://music-choise.firebaseio.com",
  projectId: "music-choise",
  storageBucket: "music-choise.appspot.com",
  messagingSenderId: "653082631704"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;