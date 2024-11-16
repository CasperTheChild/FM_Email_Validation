var first_button = document.getElementById("button_first");
var second_button = document.getElementById("button_second");
const email = document.getElementById("email");

var first_page = document.getElementById("first_page");
var success_page = document.getElementById("success_page");

var email_address = document.getElementById("email_address");
var error_message = document.getElementById("error_message");

success_page.style.display = "none";
error_message.style.display = "none";

first_button.addEventListener("click", Func_first);

second_button.addEventListener("click", Func_second);

function Func_first() { 
    if (email.checkValidity()) {
        success_page.style.display = "flex";
        first_page.style.display = "none";
        email_address.innerHTML = email.value;
    }
    else {
        error_message.style.display = "block";
    }
}

function Func_second() { 
    success_page.style.display = "none";
    first_page.style.display = "flex";
}