import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app"; // Importe a função initializeApp
import "./global.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Cast from "./Pages/Cast";

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
initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cast/:id" element={<Cast />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/details/id" element={<Details />} />
//     </Routes>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
