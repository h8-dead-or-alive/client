// const admin = require("firebase-admin");
// let serviceAccount = require("../serviceAccountKey.json");

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAqvsj89rzaPm6bGMtl8mhx3YgVeJVL0rw",
  authDomain: "h8-dead-or-alive.firebaseapp.com",
  databaseURL: "https://h8-dead-or-alive.firebaseio.com",
  projectId: "h8-dead-or-alive",
  storageBucket: "h8-dead-or-alive.appspot.com",
  messagingSenderId: "990506209939",
  appId: "1:990506209939:web:8db8c3eba52f460ca4f366",
  measurementId: "G-CX4ZDV6LNG"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// let db = admin.firestore();

module.exports = db;
