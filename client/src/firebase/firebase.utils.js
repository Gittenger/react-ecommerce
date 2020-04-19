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

firebase.initializeApp(config);
firebase.analytics();

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  //use batch to set many docs and only succeed if each succeeds
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    //create new docRef pointing at empty doc in specified collection w/ unique id
    //can pass own specified id in as param, if empty, generates random unique id
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  //commit batch, returns promise
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      //will resolve with either auth user or null
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
