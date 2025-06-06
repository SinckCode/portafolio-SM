import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl8YJrir_POfjgtjQoEOJeHficO7aG0h0",
  authDomain: "optistock-3e8c4.firebaseapp.com",
  projectId: "optistock-3e8c4",
  storageBucket: "optistock-3e8c4.appspot.com",
  messagingSenderId: "153853253923",
  appId: "1:153853253923:web:dfcce9740be75790509496",
  measurementId: "G-MRCJMVQSGC"
};

  const firebaseApp = firebase.initializaApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};