var firebaseConfig = {
      apiKey: "AIzaSyB__Uk9u7ZjnGS82L3s1mEQ2rtBWg4eRzM",
      authDomain: "kwitter-692ef.firebaseapp.com",
      databaseURL: "https://kwitter-692ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-692ef",
      storageBucket: "kwitter-692ef.appspot.com",
      messagingSenderId: "660535255018",
      appId: "1:660535255018:web:b4a456d3e32d53fe385c93"
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
