import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from 'firebase/functions';
import { getStorage } from "firebase/storage";


import { firebaseConfig } from "./firebaseConfig"



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const functions = getFunctions(firebaseApp);
const storage = getStorage();


//Emulation
import { connectFunctionsEmulator } from "firebase/functions";
import { connectFirestoreEmulator } from "firebase/firestore";


const ENABLE_EMULATOR = true;

import { emulateFirebaseFirestore, emulateFirebaseFunctions } from "../dev";


if (import.meta.env.DEV && emulateFirebaseFirestore) {
  connectFirestoreEmulator(db, '127.0.0.1', 50005);
}

if (import.meta.env.DEV && emulateFirebaseFunctions) {
  connectFunctionsEmulator(functions, "localhost", 50004);
}




export {
  firebaseApp,
  db,
  auth,
  functions,
  storage
}
