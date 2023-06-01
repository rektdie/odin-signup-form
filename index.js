const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password2");
const left = document.querySelector(".left");
const warning = document.createElement("p");
const submitButton = document.querySelector("#create");

warning.textContent = "* Passwords do not match"
warning.style.color = "red";
warning.style.position = "absolute";
warning.style.fontSize = "0.7rem";
warning.style.top = "180px";


function checkPassword(){
    if (password.value != confirmPassword.value) {
        password.classList.add("error");
        confirmPassword.classList.add("error");
        left.appendChild(warning);
        submitButton.type = "button";
    } else {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        left.removeChild(warning);
        submitButton.type = "submit";
    }
}

password.addEventListener("keyup", () => {
    if (confirmPassword.value.length != 0) checkPassword();
});

confirmPassword.addEventListener("keyup", () => {
    if (password.value.length != 0) checkPassword();
});