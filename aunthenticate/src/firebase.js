   import firebase from 'firebase'
   
   var firebaseConfig = {
    apiKey: "AIzaSyBHXBqGikxFM5EuYnB_JzfIvAFQFQp2vNU",
    authDomain: "email-login-c6f33.firebaseapp.com",
    projectId: "email-login-c6f33",
    storageBucket: "email-login-c6f33.appspot.com",
    messagingSenderId: "138873818378",
    appId: "1:138873818378:web:f62dcc6b43341c4b26fef3"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebase.firestore();
  const auth = firebase.auth();
  export {auth};
  export default db;
