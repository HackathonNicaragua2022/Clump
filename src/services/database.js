import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPpA67bFnI2000zZn7p2s7ELAaMYSTpOY",
  authDomain: "class-clump.firebaseapp.com",
  databaseURL: "https://class-clump-default-rtdb.firebaseio.com",
  projectId: "class-clump",
  storageBucket: "class-clump.appspot.com",
  messagingSenderId: "1095993938073",
  appId: "1:1095993938073:web:454bbe8b4f6fb6de17a808"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;