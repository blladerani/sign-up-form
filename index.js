const form = document.querySelector("#signup-form")
const errorMessage = document.querySelector(".error-message")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    pass = document.querySelector("#password");
    passRepeat = document.querySelector("#password-repeat");
  
    if (pass.value != passRepeat.value) {
        errorMessage.style.display = "inline"
        pass.classList.add("error")
        passRepeat.classList.add("error")
    } else {
        if (errorMessage.style.display == "inline") {
            errorMessage.style.display = "none";  
            pass.classList.remove("error")
            passRepeat.classList.remove("error")
        }
    }
    

})