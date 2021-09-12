import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCwsjuPGpdTiOJ_k9xSO1q_no2E-BoFhA8",
    authDomain: "newsletter-704fc.firebaseapp.com",
    databaseURL: "https://newsletter-704fc-default-rtdb.firebaseio.com",
    projectId: "newsletter-704fc",
    storageBucket: "newsletter-704fc.appspot.com",
    messagingSenderId: "454145640190",
    appId: "1:454145640190:web:84afa7ebcff4e6541947af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();