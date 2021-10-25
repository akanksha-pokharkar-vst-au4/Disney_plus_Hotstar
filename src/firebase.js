import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage'
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmzrQcGvVO1En4eBMrBn1_uydmiTGJw7g",
    authDomain: "hotstar-react-clone.firebaseapp.com",
    projectId: "hotstar-react-clone",
    storageBucket: "hotstar-react-clone.appspot.com",
    messagingSenderId: "674281472568",
    appId: "1:674281472568:web:ead4fb891b220140c45ccd",
    measurementId: "G-ZE3RRZCDEN"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //Setting firebase firestore as database
  const db = firebaseApp.firestore();

  //Setting firebase for authentication
  const auth = firebase.auth();

  //Setting google authentication with firebase
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;
 