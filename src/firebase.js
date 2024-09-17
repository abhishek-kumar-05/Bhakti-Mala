// Importing firebase module for intializing the app and interacting the realtime Database
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Firebase configuration variable importing from .env file
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseUrl: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// initializing the app and get refer to the database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// handle the form data submisssion and sending the data to realtime database
export const handleFormData = (username, telephone, email, rating, message) => {
  const databaseRef = push(ref(database, "Review")); //creating new reference in "Review" node 
  const userData = {
    username: username,
    contact: telephone,
    email: email,
    rating: rating,
    message: message,
  };
  // sending data to database and returning true if it's successfull or otherwise false
  return set(databaseRef, userData)
    .then(() => {
      console.log("Data Sent Successfully"); //log success message 
      return true;
    })
    .catch((error) => {
      console.log("Something went wrong :- ", error); //log the error
      return false;
    });
};
