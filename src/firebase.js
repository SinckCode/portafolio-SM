import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDTZ-uQyVkGC-nxWGlPYlwa8D3otlE2E_U",
  authDomain: "sinck-portafolio-ee893.firebaseapp.com",
  projectId: "sinck-portafolio-ee893",
  storageBucket: "sinck-portafolio-ee893.appspot.com",
  messagingSenderId: "529060820336",
  appId: "1:529060820336:web:c2d3424df3be58e384cbb5",
  measurementId: "G-6CVWPF55KY"
};

  const firebaseApp = firebase.initializaApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};