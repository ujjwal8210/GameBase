
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDN5mHBOiWuEvvv09zI2MC5DyRXV1cmACs",
    authDomain: "signupnow-df4a1.firebaseapp.com",
    projectId: "signupnow-df4a1",
    storageBucket: "signupnow-df4a1.appspot.com",
    messagingSenderId: "693364337320",
    appId: "1:693364337320:web:5f9242f61c71cb7e2f709d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const auth=firebase.auth();
function signUp(){
    var email = document.getElementsByClassName("input-box");
    var password = document.getElementsByClassName("input-box");
    const promise = auth.createUserWithEmailAndPassword(email.nodeValue.password.value);
    promise.catch(e => alert(e.message))
    alert("Signed In");

}