// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  writeBatch,
  query,
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0
const firebaseConfig = {
  apiKey: "AIzaSyAkSYLb1Ty4k8_hao3SVOx2Xou-oxibU-E",
  authDomain: "crwn-clothing-556e4.firebaseapp.com",
  projectId: "crwn-clothing-556e4",
  storageBucket: "crwn-clothing-556e4.appspot.com",
  messagingSenderId: "733543982091",
  appId: "1:733543982091:web:3355b79839a2b7bad2930e",
  measurementId: "G-M23WLMV1BS",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const signInWithEmail = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmail = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const signOutUser = () => signOut(auth);

// Firebase Firestore
const firestore = getFirestore(firebaseApp);

export const addProfileDocumentToFirestore = async (authUser, otherData) => {
  if (!authUser) return;

  const userDocRef = doc(firestore, `users/${authUser.uid}`);
  const snapShot = await getDoc(userDocRef);

  if (!snapShot.exists()) {
    const { displayName, uid: id, email } = authUser;
    const createdDate = new Date();

    try {
      await setDoc(userDocRef, {
        id,
        displayName,
        email,
        createdDate,
        ...otherData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userDocRef;
};

export const addShopToFireStore = async (collectionKey, sectionsToAdd) => {
  const collectionRef = collection(firestore, collectionKey);

  const batch = writeBatch(firestore);

  sectionsToAdd.forEach((section) => {
    const { title, items } = section;
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, { title: title, items: items });
  });

  return await batch.commit();
};

export const convertQuerySnapShotToMap = (snapShot) => {
  const sectionsMap = snapShot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      title,
      items,
      id: doc.id,
    };
  });

  //Converting array to map(object)
  return sectionsMap.reduce((accumulator, section) => {
    accumulator[section.title.toLowerCase()] = section;
    return accumulator;
  }, {});
};

export const getSectionsFromFirestore = async () => {
  const sectionsColRef = collection(firestore, "sections");

  return await getDocs(query(sectionsColRef))
    .then((snapShot) => {
      const sectionsMap = convertQuerySnapShotToMap(snapShot);
      return sectionsMap;
    })
    .catch((err) => console.log(err));
};
