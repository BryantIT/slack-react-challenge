import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARkzb2xTfZqsWt-e8S6Kl3PpbAVpPmgjw",
  authDomain: "slack-clone-1efe2.firebaseapp.com",
  projectId: "slack-clone-1efe2",
  storageBucket: "slack-clone-1efe2.appspot.com",
  messagingSenderId: "277112012377",
  appId: "1:277112012377:web:d6bdf56c3fe12629327b48",
  measurementId: "G-3SDN33239Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
