const pass1 = document.getElementById("password");
const pass2 = document.getElementById("pass_confirm");
const confirm = document.getElementById("confirm");
const myForm = document.getElementById("myform");

function verifyPassword() {
    let passt1 = pass1.value;
    let passt2 = pass2.value;
    let match = true;
    if (passt1 != passt2) {
        pass1.classList.add("wrong");
        pass2.classList.add("wrong");
        match = false;
    }
    else if(pass1.value !== "" || pass2.value !== "") {
        pass1.classList.remove("wrong");
        pass2.classList.remove("wrong");
    }
    return match;
}

myForm.onsubmit = verifyPassword;
