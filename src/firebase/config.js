import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyArS11TOSi0G5QSIPGi20AXjJe6ZwS9JXs",
  authDomain: "vue-chat-7ba36.firebaseapp.com",
  projectId: "vue-chat-7ba36",
  storageBucket: "vue-chat-7ba36.appspot.com",
  messagingSenderId: "36377719466",
  appId: "1:36377719466:web:38f125f1a08b917d9ed6d3"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, timestamp, auth }