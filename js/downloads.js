firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    /*document.getElementById("user_div").style.display = "block";
    document.getElementById("signUp-div").style.display = "none";
    document.getElementById("login_div").style.display = "none";
    */
    var user = firebase.auth().currentUser;

    if(user != null){
    
    }

  } else {
    // No user is signed in.
      window.open("login.html",'_top');


  }
});


function logout(){
  firebase.auth().signOut();
  window.alert("You have been logged out");
  window.open("login.html",'_top');


}
