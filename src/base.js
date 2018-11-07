import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAfh-czYme5JT6LlslBgVrU3Wr0MjqXwsc",
  authDomain: "catch-of-the-day-45c19.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-45c19.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebase };

// This is a default export
export default base;
