function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}



//Form handling

const form = document.getElementById("form");

const firstName = document.querySelector("#first");
const firstNameError = document.getElementById("first_name_error");

const lastName = document.querySelector("#last");
const lastNameError = document.getElementById("last_name_error");

const email = document.querySelector("#email");
const emailError = document.getElementById("email_error");

const message = document.querySelector("#message");
const messageError = document.getElementById("message_error");

form.addEventListener("submit", (e) => {
  let errors = [];

  e.preventDefault();

  // Validate the FirstName - Should be > 2 characters
  if (firstName.value.length < 2) {
    errors.push("First name should be 2 characters or more");
    firstNameError.innerHTML = "Your first name should be 2 characters or more";
  } else {
    firstNameError.innerHTML = " ";
  }
  
  //validate that last name is atleast 2 characters
  if (lastName.value.length < 2) {
    errors.push("Last name should be 2 characters or more");
    lastNameError.innerHTML = "Your last name should be 2 characters or more";
  } else {
    lastNameError.innerHTML = " ";
  }
  
  //email address follows format of something@something.something
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailError.innerHTML = "";
  } else {
    errors.push("please enter a valid email address");
    emailError.innerHTML = "please enter a valid email address";
  }

  //validate that message is atleast 5 characters
  if (message.value.length < 5) {
    errors.push("No message written");
    messageError.innerHTML = "Please Write a message";
  } else {
    messageError.innerHTML = " ";
  }

  // To submit or NOT to submit? It depends on the errors!
  if (errors.length > 0) {
    console.log("Incomplete form - not submitted");
    console.log(errors);
    // formStatus.innerHTML = "You have some errors with your form!";
  } else {
    console.log("Complete form - Submit the form successfully.");
    console.log(firstName.value, lastName.value, email.value, message.value);
    // formStatus.innerHTML = " ";
    form.reset();
    closeModal();
    success();
  }

});