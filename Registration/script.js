form = document.getElementById("myform");
function validateform(event) {
  event.preventDefault();
  var userName = document.myform.uname.value;
  var email = document.myform.email.value;
  var password = document.myform.psw.value;
  var country = document.myform.country.value;
  var gender = document.myform.gender;
  var address = document.myform.address.value;
  var lang = document.getElementsByName("checkbox");
  var atposition = email.indexOf("@");
  var dotpostion = email.lastIndexOf(".");
  var data = new Object();
  var i;

  var langArray = new Array();
  for (i = 0; i < lang.length; i++) {
    if (lang[i].checked) {
      langArray.push(lang[i].value);
    }
  }
  if (userName == null || userName == "") {
    alert("Name can't be blank");
    return false;
  } else if (
    atposition < 1 ||
    dotpostion < atposition + 2 ||
    dotpostion + 2 >= email.length
  ) {
    alert("Please enter a valid e-mail address:");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  } else if (country == "select") {
    alert("Please Select Country.");
    return false;
  } else if (gender.value == "") {
    alert("Please Select Gender.");
    return false;
  } else if (langArray.length == 0) {
    alert("Please select language");
    return false;
  } else if (address == "") {
    alert("Please Provide Address.");
    return false;
  }
  data.userName = userName;
  data.email = email;
  data.password = password;
  data.country = country;
  data.gender = gender.value;
  data.lang = langArray;
  data.address = address;
  console.log(data);
}
form.addEventListener("submit", validateform);
