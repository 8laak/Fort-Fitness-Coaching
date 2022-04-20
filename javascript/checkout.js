function fncValidate()
{
          var on=document.form2.oname.value;
          var patt = /[^a-z]/i;
          var oname = patt.test(on);

  //This allows users to log in with their name

        if(on == "")
        {
          alert('Please enter your owners name');

          return false;
        }

        if(on == null || oname == true)
        {
          alert('Please enter Alphabet for owner name');

          return false;
        }

  //This allows users to fill in their cvc number with 3 digits only

  var c=document.form2.cvc.value;
        if(isNaN (c))
          {
            alert('Enter numbers only');
        return false;
          }
        if(c == "")
          {
            alert('Enter CVC number');
        return false;
          }

        if(c.length>3)
          {
            alert('Enter CVC number must be 3 digits');
        return false;
          }
        if(c.length<3)
          {
            alert('Enter CVC number must be 3 digits');
        return false;
          }

//This allows users to fill in their card number with 16 digits only

var c=document.form2.cnumber.value;
        if(isNaN (c))
          {
            alert('Enter numbers only');
        return false;
          }
        if(c == "")
          {
            alert('Enter Card number');
        return false;
          }

        if(c.length>16)
          {
            alert('Enter Card number must be 16 digits');
        return false;
          }
        if(c.length<16)
          {
            alert('Enter Card number must be 16 digits');
        return false;
          }

//This allows users to select the year and month of their cards expiry date

var m = document.getElementById('months')
          if(m.value == null || m.value == "")
            {
              alert('Please select your cards expiry month');
          return false;
            }

var y = document.getElementById('years')
          if(y.value == null || y.value == "")
              {
              alert('Please select your expiry year');
          return false;
              }


//If purchase is successfull they will get an alert

      alert('Your purchase was successful!');
      document.form2.submit();
    }
