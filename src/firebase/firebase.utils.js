import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyBYcdaOC9wDZjeldT_PELq-4eGcKcHfbcE",
  authDomain: "andrei-ecommerce.firebaseapp.com",
  databaseURL: "https://andrei-ecommerce.firebaseio.com",
  projectId: "andrei-ecommerce",
  storageBucket: "andrei-ecommerce.appspot.com",
  messagingSenderId: "946101353923",
  appId: "1:946101353923:web:80f56c848704ec1a345176",
  measurementId: "G-DXZJ61D4VG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //firestore.doc() returns docRef object, pass in auth user from firebase
  // use docRef object to perform queries and do CRUD operations
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //snapshotRef object is like the result of query
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
