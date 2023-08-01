const firebase = require('firebase');
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB5qSnJZKfH01hxgJYSpqOxUxBmUQ5-zj4",
  authDomain: "backend-sd.firebaseapp.com",
  databaseURL: "https://backend-sd-default-rtdb.firebaseio.com",
  projectId: "backend-sd",
  storageBucket: "backend-sd.appspot.com",
  messagingSenderId: "506770496538",
  appId: "1:506770496538:web:4b2736677164ff297345a3",
  measurementId: "G-4NZLWLJ6E9"
};
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//const storage = firebase.storage();

module.exports.db = db;
//module.exports.storage = storage;
