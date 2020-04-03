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
  measurementId: "G-DXZJ61D4VG"
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
