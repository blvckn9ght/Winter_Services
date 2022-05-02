var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      window.open("downloads.html",'_top');
    }

  } else {
    // No user is signed in.


    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";




  }
});

function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;


  if (userEmail.length == 0 && userPass.length == 0){
    window.alert("Email address & Password are blank!");
    return false;
  }



  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  window.alert("You have been logged out");
  window.open("login.html",'_top');


}

function signUp(){

  document.getElementById("user_div").style.display = "none";
  document.getElementById("login_div").style.display = "none";
  document.getElementById("signUp-div").style.display = "block";

}

function createAccount(){
  var userFname = document.getElementById("signUp_fullname_field").value;
  var userEmail = document.getElementById("signUp_email_field").value;
  var userPass = document.getElementById("signUp_password_field").value;
  var userPhone = document.getElementById("signUp_phone_field").value;

  if(userEmail.length == 0){

    window.alert("All fields are mandatory");

    return 0;

  }

  db.collection("Users").add({
      emailadd: userEmail,
      fname: userFname,
      phonenum: userPhone,
      passw: userPass,
      usertype: "basic"
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });


  firebase.auth().createUserWithEmailAndPassword(userEmail,userPass).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

  });
}

function storeData(){

  db.collection("Users").add({
      emailadd: "Ada",
      fname: "Lovelace",
      passw: 1815
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });

}

function mousehandler(e) {
        var myevent = (isNS) ? e : event;
        var eventbutton = (isNS) ? myevent.which : myevent.button;
        if ((eventbutton == 2) || (eventbutton == 3)) return false;
    }
    document.oncontextmenu = mischandler;
    document.onmousedown = mousehandler;
    document.onmouseup = mousehandler;
    function disableCtrlKeyCombination(e) {
        var forbiddenKeys = new Array("a", "s", "c", "x","u");
        var key;
        var isCtrl;
        if (window.event) {
            key = window.event.keyCode;
            //IE
            if (window.event.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        else {
            key = e.which;
            //firefox
            if (e.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        if (isCtrl) {
            for (i = 0; i < forbiddenKeys.length; i++) {
                //case-insensitive comparation
                if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    }
