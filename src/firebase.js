import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB-oP-6IegaHASGXqWuNPuIm58TBJZOseg",
    authDomain: "card-trail.firebaseapp.com",
    databaseURL: "https://card-trail.firebaseio.com",
    projectId: "card-trail",
    storageBucket: "",
    messagingSenderId: "710203414011"
  };
  firebase.initializeApp(config);

  export default firebase;