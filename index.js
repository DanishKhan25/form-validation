function validation() {
  const userName = document.getElementById("username").value;
  const userPass = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const zip = document.getElementById("zip").value;
  const area = document.getElementById("Area").value;
  const address = document.getElementById("address").value;
  const contactNumber = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const photo = document.getElementById("photo").value;
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("Age").value;
  //  validation message var
  const erruname = document.getElementById("uname");
  const errpass = document.getElementById("pass");
  const errname = document.getElementById("ename");
  const errzip = document.getElementById("errzip");
  const errarea = document.getElementById("errarea");
  const errnum = document.getElementById("errnum");

  if (userName.length > 20) {
    erruname.innerHTML =
      " ** Desired user name should not more than 20 character";
    return false;
  } else {
    erruname.innerHTML = "";
  }
  if (userName.match(/([!,@,#,$,%])/)) {
    erruname.innerHTML =
      " ** Desired user name will not contain any special caharater";
    return false;
  }
  //password validation
  if (userPass.length < 8 || userPass.length > 20) {
    errpass.innerHTML =
      " * Your password should have atleast 8 characters and not more than 20 characters";
    return false;
  } else if (!userPass.match(/([A-Z])/)) {
    errpass.innerHTML =
      " * Your password should have atleast one upper case character (A-Z)";
    return false;
  } else if (!userPass.match(/([a-z])/)) {
    errpass.innerHTML =
      " * Your password should have atleast one lower case character (a-z)";
    return false;
  } else if (!userPass.match(/([0-9])/)) {
    errpass.innerHTML = " * Your password should have atleast one number (0-9)";
    return false;
  } else if (!userPass.match(/([! @ # $ ^ & * ~])/)) {
    errpass.innerHTML =
      " * Your password should have atleast one special characters (! @ # $ ^ & * ~)";
    return false;
  } else {
    errpass.innerHTML = " ";
  }

  // Name validation

  if (!name.match(/[a-z, ,A-Z]/)) {
    errname.innerHTML = " * Your name should have a-z & A-Z with space";
    return false;
  } else {
    errname.innerHTML = "";
  }

  // pincode validation
  let regex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
  if (!regex.test(zip) == true) {
    errzip.innerHTML = "** Invalid zip code. it should have 6 digits";
    return false;
  } else {
    errzip.innerHTML = "";
  }
  // Area validation
  if (area.match(/([!,@,#,$,%])/)) {
    errarea.innerHTML =
      " ** This field should not cintain any special charater";
    return false;
  } else {
    errarea.innerHTML = "";
  }

  //contact validation
  const numberRegex = new RegExp(/^[0-9]*^[()-]*$/);
  if (isNaN(contactNumber)) {
    errnum.innerHTML = " ** Invalid number ";
    return false;
  } else if (contactNumber.length < 10) {
    errnum.innerHTML = " **Please enter 10 digit number";
    return false;
  } else {
    errnum.innerHTML = "";
  }
}
