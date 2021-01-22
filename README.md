# Authenticated App with firebase and typescript


## Set up your app

- git clone https://github.com/oal2727/appfirebase.git

### Install Package

- npm install


### Config App
 - On file src/config/ApiKey.js , put your data here...
 ```
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
 ```

### Start you App

- npm start
 