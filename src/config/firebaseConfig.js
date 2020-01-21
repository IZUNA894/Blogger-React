 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBSm-L_Eoh718dtHBtq1vwiTxlrkP9j_5E",
    authDomain: "blogger-react-442aa.firebaseapp.com",
    databaseURL: "https://blogger-react-442aa.firebaseio.com",
    projectId: "blogger-react-442aa",
    storageBucket: "blogger-react-442aa.appspot.com",
    messagingSenderId: "637308045477",
    appId: "1:637308045477:web:dd6d3560f5b3c2661ae54c",
    measurementId: "G-3XV9F20EG1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase