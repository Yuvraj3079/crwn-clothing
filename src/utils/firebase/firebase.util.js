import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP3fdAwRk6ZcRZ2x8A-8TQN1vU2KTfUDU",
  authDomain: "crwn-clothing-6e18f.firebaseapp.com",
  projectId: "crwn-clothing-6e18f",
  storageBucket: "crwn-clothing-6e18f.appspot.com",
  messagingSenderId: "295742965122",
  appId: "1:295742965122:web:adbc89013c6976989e3b9b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInwithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

/**
 * Storing data after Authentication into FireStore
 */
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  //Checks if the instance resides with the databse
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error while creating user", error.message);
    }
  }
  return userDocRef;
};
