import { initializeApp } from "firebase/app";
import { where, getFirestore, query, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
export const auth = getAuth(app);
export default db;

export const getUserData = async (user) => {
  const uid = user.uid;
  const q = query(collection(db, "users"), where("userId", "==", uid.toString()));
  const result = await getDocs(q);
  
  const first = result.docs.at(0);
  if (!first) {
    return null;
  }

  const data = first.data()

  if (data) {
    return {
      displayName: user.displayName,
      ...data
    };
  } else {
    return null;
  }
};