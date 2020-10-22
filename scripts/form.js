let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let form = document.getElementById("form");
let message = document.getElementById("errorMessage");

form.addEventListener("submit", function (e) {
  let msgArray = [];
  const emailReference = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (
    fname.value === "" ||
    fname.value == null ||
    lname.value === "" ||
    lname.value == null
  ) {
    msgArray.push("The name fields must not be empty");
  }
  if (emailReference.test(email) === true) {
    msgArray.push("Please Enter a valid Email");
  }
  if (pass.value.length < 5) {
    msgArray.push("Your password is too weak");
  }

  if (msgArray.length > 0) {
    e.preventDefault();
    message.style.display = "block";
    message.innerText = msgArray.join(" , ");
  }
});