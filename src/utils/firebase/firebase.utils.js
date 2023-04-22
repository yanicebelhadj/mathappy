// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc 
} from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTHoiGrapICo6AFuRc9UDHh7A1gxfdB20",
  authDomain: "mathappy-web-app.firebaseapp.com",
  projectId: "mathappy-web-app",
  storageBucket: "mathappy-web-app.appspot.com",
  messagingSenderId: "433972058113",
  appId: "1:433972058113:web:0a7bac18ae776dff6a8800",
  measurementId: "G-Z60TRPZC5H"
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ 
    prompt: 'select_account' 
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    const userDocSnap = await getDoc(userDocRef);
    if(!userDocSnap.exists()) {
        const { email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.error(error);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth); //video 108

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);