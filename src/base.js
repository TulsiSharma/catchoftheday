import Rebase from "re-base";
import Firebase from "firebase";

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyDgY21CHYbnWoWtlMB7_3tsUE47xpfjvnw",
    authDomain: "catch-of-the-day-1c157.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-1c157.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//this is an named export.
export {firebaseApp};

export default base;
