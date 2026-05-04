// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhRtC8YU4pJ5g9KZ07cKXDqr4lLOCnNOs",
    authDomain: "argus-17702.firebaseapp.com",
    projectId: "argus-17702",
    storageBucket: "argus-17702.firebasestorage.app",
    messagingSenderId: "178416740087",
    appId: "1:178416740087:web:bc4127e0e8e4d3de2a55f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);