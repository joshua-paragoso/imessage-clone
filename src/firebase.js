import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-JHqV9NZnUBCY1wCamALrSvngSWa0LS0",
    authDomain: "imessage-clone-8a209.firebaseapp.com",
    databaseURL: "https://imessage-clone-8a209.firebaseio.com",
    projectId: "imessage-clone-8a209",
    storageBucket: "imessage-clone-8a209.appspot.com",
    messagingSenderId: "785453929325",
    appId: "1:785453929325:web:b8f7cdc901f0333f32c064",
    measurementId: "G-22HG7QWDTF"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;