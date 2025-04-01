// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { collection, getDocs, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANnoPz_8h4UwLpFpsO9vH9jzNPedDamWs",
  authDomain: "coder-ecommerce-5a3ce.firebaseapp.com",
  projectId: "coder-ecommerce-5a3ce",
  storageBucket: "coder-ecommerce-5a3ce.firebasestorage.app",
  messagingSenderId: "468126883578",
  appId: "1:468126883578:web:1dde5e0237eaf6526d7343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// export const getItems = async () => {
//     const querySnapshot = await getDocs(collection(db, 'items'));
//     querySnapshot.forEach(doc => console.log(`${doc.id} -> ${JSON.stringify(doc.data())}`));
// }