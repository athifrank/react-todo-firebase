import Rebase from 're-base';
import * as firebase from 'firebase';

const DB_CONFIG= {
    apiKey: "AIzaSyAVth46JqkBbbU4rc-VqJRshvXMQv9sdhc",
    authDomain: "react-firebase-be90d.firebaseapp.com",
    databaseURL: "https://react-firebase-be90d.firebaseio.com/",
    projectId: "react-firebase-be90d",
    storageBucket: "react-firebase-be90d.appspot.com",
    messagingSenderId: "77405078078"
  };

const app = firebase.initializeApp(DB_CONFIG)
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider();


export { app, base, facebookProvider,googleProvider }  