// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDacMllGg9hozttqR202_nVgH7Rgt4Rkfc",
  authDomain: "react-dragon-news-5be75.firebaseapp.com",
  projectId: "react-dragon-news-5be75",
  storageBucket: "react-dragon-news-5be75.appspot.com",
  messagingSenderId: "869287599359",
  appId: "1:869287599359:web:5c1507347b092d6150c0ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
