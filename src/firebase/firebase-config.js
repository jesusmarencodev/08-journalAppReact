import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCJCTa_gxo_48_avejkRl6UK-FpsyH0Avg",
    authDomain: "journal-react.firebaseapp.com",
    databaseURL: "https://journal-react.firebaseio.com",
    projectId: "journal-react",
    storageBucket: "journal-react.appspot.com",
    messagingSenderId: "140613572543",
    appId: "1:140613572543:web:d8dfb49859417e4203b30a"
  };
  // Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	
	const db = firebase.firestore();
	const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


	export {
		db,
		googleAuthProvider,
		firebase,
	}