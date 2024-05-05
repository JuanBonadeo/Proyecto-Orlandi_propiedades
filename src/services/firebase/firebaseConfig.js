import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGoUet4erGUAB6Am-nL_wazVisQhLF7m0",
  authDomain: "orlandi-propiedades.firebaseapp.com",
  projectId: "orlandi-propiedades",
  storageBucket: "orlandi-propiedades.appspot.com",
  messagingSenderId: "191128302129",
  appId: "1:191128302129:web:f5aa71e8856c8c715f5b10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreInstance = () => {
  return getFirestore(app);
};
export const storage = getStorage(app);
//Initialize Firestore
export const db = getFirestore(app)