// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKxVX-AM-7w2neKoxdo7GkJjjCMnqsM18",
  authDomain: "project-101-c69ae.firebaseapp.com",
  projectId: "project-101-c69ae",
  storageBucket: "project-101-c69ae.appspot.com",
  messagingSenderId: "405943347937",
  appId: "1:405943347937:web:82c528d52b85d2cea9e5a0"
};

// Initialize Firebase
firbase.initializeApp(firebaseConfig);

function getData() {
  firebaseConfig.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
        //End code
      });
    });
}
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}