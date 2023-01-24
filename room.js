var firebaseConfig = {
    apiKey: "AIzaSyCujmuqsuIQa-O8njfjmaQMM4iIwXzj_tE",
    authDomain: "kwitter-893d7.firebaseapp.com",
    databaseURL: "https://kwitter-893d7-default-rtdb.firebaseio.com",
    projectId: "kwitter-893d7",
    storageBucket: "kwitter-893d7.appspot.com",
    messagingSenderId: "265693091425",
    appId: "1:265693091425:web:6b6a2db648d188217d3c20"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();