const counter = document.querySelector(".count");
const reset = document.querySelector(".btn-reset");

reset.addEventListener("click", generateNumber);
function generateNumber(){
    const randomNumber = Math.floor( Math.random() * 1000 + 1);
    counter.innerHTML = randomNumber;
}