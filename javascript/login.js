function validate() {
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  if (username=="user" && password=="12345")
  {
    alert("You Have Logged In Successfully!");
    return true;
  }
  else {
    alert("Login Failed, Please Try Again")
    return false;
  }
}
