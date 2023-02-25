import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyATKj5W_XQyOPqrNinCyb4seSQei8L4RoI",
  authDomain: "iccreators-347d7.firebaseapp.com",
  projectId: "iccreators-347d7",
  storageBucket: "iccreators-347d7.appspot.com",
  messagingSenderId: "684452617625",
  appId: "1:684452617625:web:587ef273887d66506b4708",
  measurementId: "G-GT5X49729E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
export { app,auth,storage };