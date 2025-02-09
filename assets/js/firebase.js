
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'
import { firebaseConfig } from "./credenciales.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 