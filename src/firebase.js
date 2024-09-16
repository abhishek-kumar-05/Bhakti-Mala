export const handleFormData = (formData) => {
  const { username, telephone, email, rating, message } = formData;
  postData(username, telephone, email, rating, message);
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseUrl: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function postData(username, telephone, email, rating, message) {
  const databaseRef = push(ref(database, "Review"));
  const userData = {
    username: username,
    contact: telephone,
    email: email,
    rating: rating,
    message: message,
  };
  set(databaseRef, userData)
    .then(() => {
      console.log("data is successfully sent");
    })
    .catch((error) => {
      console.error("Something went wrong :- ", error);
    });
}
