import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth";
const config= firebase.initializeApp({
    apiKey: "*******************",
    authDomain: "*******************",
    databaseURL: "*******************",
    projectId: "*******************",
    storageBucket: "************",
    messagingSenderId: "************",
    appId: "************",
    measurementId: "************"
})
// firebase.initializeApp(config);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const db = config.firestore()

var usuario = db.collection("user")
export {googleAuthProvider,facebookAuthProvider,config,usuario};
// const databaseRef = 
