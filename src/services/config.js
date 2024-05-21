import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTOv91wgaREVOF11_S1509Fmg-Aa5x6II",
    authDomain: "bil490-libapp.firebaseapp.com",
    projectId: "bil490-libapp",
    storageBucket: "bil490-libapp.appspot.com",
    messagingSenderId: "739735510848",
    appId: "1:739735510848:web:22e657d3d85e4208ad64a5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
