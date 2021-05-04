const input = document.getElementById("input")
const button = document.getElementById("submitButton")
const warning = document.getElementById("warning")

function ValidateEmail()
{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value))
    {
        return true
    }

    return false
}

button.addEventListener('click', (event) => {
    console.log("hello there")
    const bool = ValidateEmail()
    if(!bool){
        warning.style.animation = "fade-in 0.3s forwards"
    } else {
        warning.style.animation = "fade-out 0.3s forwards"
    }
})