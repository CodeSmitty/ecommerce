import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAuwSWsDSrP7JHOLc0pQP0f76Tmkcikf4Q",
    authDomain: "crown-project-895de.firebaseapp.com",
    databaseURL: "https://crown-project-895de.firebaseio.com",
    projectId: "crown-project-895de",
    storageBucket: "crown-project-895de.appspot.com",
    messagingSenderId: "425305308652",
    appId: "1:425305308652:web:559bdaf36f52f6d5bc14c9",
    measurementId: "G-0V2RWJF2YF"
  };

  export const createUserProfileDocument= async (userAuth, additionalData) => {
    if(!userAuth)return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

 

    return userRef;
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({promt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;