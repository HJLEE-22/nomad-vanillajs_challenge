const userNumberForm = document.querySelector("#usernumber-form")
const userNumberInput = document.querySelector("#usernumber-input");
const guessNumberInput = document.querySelector("#guessnumber-input");
const playbutton = document.getElementsByTagName("button");
const guessNumberSpan = document.querySelector("#guessnumber-span");
const resultSpan = document.querySelector(".result");

function guessNumberSaving(event){
    event.preventDefault();
    const userNumber = parseInt(userNumberInput.value);
    if(parseInt(guessNumberInput.value) > parseInt(userNumberInput.value)){
        alert("Please write above the number you generated.");
    }
    const randomNumber = Math.ceil(Math.random() * userNumber);
    guessNumberSpan.innerHTML = `${parseInt(guessNumberInput.value)}, the machine chose: ${randomNumber}`
    if(randomNumber == parseInt(guessNumberInput.value)){
        resultSpan.innerHTML = "You won!!"
    } else{
        resultSpan.innerHTML = "You lost!"
    }

} 

userNumberForm.addEventListener("submit", guessNumberSaving);