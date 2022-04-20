function fncValidate()
{
            var fn=document.form1.fname.value;
            var ln=document.form1.lname.value;
            var pass1=document.form1.password.value;
            var pass2=document.form1.Conpassword.value;
            var patt = /[^a-z]/i;
            var fname = patt.test(fn);
            var lname = patt.test(ln);

      if(fn == "")
      {
        alert('Please enter your First name');

        return false;
      }

      if(fn == null || fname == true)
      {
        alert('Please enter Alphabet for First name');

        return false;
      }

      if(ln == "")
      {
        alert('Please enter your last name');

        return false;
      }

      if(ln == null || lname == true)
      {
        alert('Please enter Alphabet for last name');

        return false;
      }

var m =document.getElementById('male');
var f =document.getElementById('female');

    if ( (m.checked == false ) && (f.checked == false ) )
    {
    alert('Please enter your gender');
      document.getElementById('gen').style.border = "2px solid red";
    return false;
    }

    else {
      document.getElementById('gen').style.border = "";
    }

var add=document.form1.address.value;
    if(add == "")
    {
      alert('Please enter your address');
      return false;
    }


var c = document.getElementById('country')
    if(c.value == null || c.value == "")
    {
      alert('Please select your province');
      return false;
    }

var p=document.form1.phone.value;
    if(isNaN (p))
    {
      alert('Enter numbers only');
      return false;
    }
    if(p=="")
    {
      alert('Enter 10 digits');
      return false;
    }

    if(p.length>10)
    {
      alert('Enter 10 digits');
      return false;
    }
    if(p.length<10)
    {
      alert('Enter 10 digits');
      return false;
    }

var em = document.form1.email.value;
    if(em == "")
    {
      alert('Invalid Email');
      return false;
    }

  if(pass1 == "")
  {
    alert('Please enter a password');
    return false;
  }

  if(pass1.length< 4)
  {
    alert('Password should be not less than 4 characters');
    return false;
  }

  if(pass2 == "")
  {
    alert('Please confirm password');
    return false;
  }

  if(pass1 != pass2)
  {
    alert('Confirm not a match');
    return false;
  }

  alert('You are successfully signed up!');
  document.form1.submit();
}
