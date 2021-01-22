import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth";
const config= firebase.initializeApp({
    apiKey: "AIzaSyCd7mBcWH4QE6U2fiABeIN0fUwJOpKvIYE",
    authDomain: "proyecto-25b7d.firebaseapp.com",
    databaseURL: "https://proyecto-25b7d.firebaseio.com",
    projectId: "proyecto-25b7d",
    storageBucket: "proyecto-25b7d.appspot.com",
    messagingSenderId: "131092150999",
    appId: "1:131092150999:web:eb05d2b615102ea7778e92",
    measurementId: "G-1EB1RCJWSY"
})
// firebase.initializeApp(config);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const db = config.firestore()

var usuario = db.collection("user")
export {googleAuthProvider,facebookAuthProvider,config,usuario};