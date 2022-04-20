function fncValidate()
{
          var fn=document.form3.fname.value;
          var ln=document.form3.lname.value;
          var patt = /[^a-z]/i;
          var fname = patt.test(fn);
          var lname = patt.test(ln);

  //This allows users to log in with their name

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

//allows new users to fill in their email addresss
var em = document.form3.email.value;
        if(em == "")
          {
            alert('Invalid Email');

            return false;
         }

        //allows new users to fill in their address
var m=document.form3.message.value;
      if(m == "")
      {
        alert('Please enter your querie');
        return false;
      }

      alert('Thank You for your submisssion!');
      document.form1.submit();
    }
