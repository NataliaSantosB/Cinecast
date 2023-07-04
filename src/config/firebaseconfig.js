import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDozPqQIwQ6-hzIF6MHSgdafCRGlNAvOZA",
  authDomain: "cinecast-cdbf5.firebaseapp.com",
  databaseURL: "https://cinecast-cdbf5-default-rtdb.firebaseio.com",
  projectId: "cinecast-cdbf5",
  storageBucket: "cinecast-cdbf5.appspot.com",
  messagingSenderId: "544321022134",
  appId: "1:544321022134:web:d72b4089766a2a24c0de17",
  measurementId: "G-4VQWKX80H3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
