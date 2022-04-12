// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAkMDTZ0HrXl-s4nUMyhum7AC1Kho-CopE",
      authDomain: "kwitter-ac6bf.firebaseapp.com",
      databaseURL: "https://kwitter-ac6bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-ac6bf",
      storageBucket: "kwitter-ac6bf.appspot.com",
      messagingSenderId: "117230222046",
      appId: "1:117230222046:web:aa07979821af023265604f"
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

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDqTqyS9Tjw-9f3Y7hRbnGBGN1P7MbiMFw",
      authDomain: "kwitter-room-b7ea3.firebaseapp.com",
      databaseURL: "https://kwitter-room-b7ea3-default-rtdb.firebaseio.com",
      projectId: "kwitter-room-b7ea3",
      storageBucket: "kwitter-room-b7ea3.appspot.com",
      messagingSenderId: "562849800753",
      appId: "1:562849800753:web:d69b1006740e5a7dc9ab10"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);

}