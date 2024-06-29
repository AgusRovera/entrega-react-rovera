import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use


const firebaseConfig = {
    apiKey: "AIzaSyBu9ZYwXABBxKQU9o_RTE2x1eD6dtFPM0U",
    authDomain: "tienda-volkswagen.firebaseapp.com",
    projectId: "tienda-volkswagen",
    storageBucket: "tienda-volkswagen.appspot.com",
    messagingSenderId: "1063178361716",
    appId: "1:1063178361716:web:0694cd826d49c363efaa21",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
