//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBEFBRr9LoIKa0n9_WjMZe4BcWc7WbpiJM",
    authDomain: "let-s-chat-web-app-3ee81.firebaseapp.com",
    projectId: "let-s-chat-web-app-3ee81",
    storageBucket: "let-s-chat-web-app-3ee81.appspot.com",
    messagingSenderId: "211492660817",
    appId: "1:211492660817:web:9029121cc89e7994017a70",
    measurementId: "G-000TDPR43G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("username");
document.getElementById("name_loggedIn").innerHTML = "Welcome " + user_name + "!";

function create_room() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("roomname", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "room_name"
    });
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            row = "<div class='roomName' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'> #"+Room_names+" </div> <hr>";
            document.getElementById("other_roomNames").innerHTML += row;
            //End code
        });
    });
}
getData();
function redirectToRoomName() {
    localStorage.setItem("roomname", room_name);
    window.location = "kwitter_page.html";
}