let btn = document.getElementById("btn");
let input = document.getElementById("input");
let chancesEle = document.getElementById("chances")
let note = document.getElementById("note");

let randomNum = Math.floor(Math.random() * 100);
let chances = +chancesEle.textContent;

btn.addEventListener("click", ()=>{
    if (btn.textContent == "Replay") {
        window.location.reload();
        btn.removeEventListener(this);
    }

    chances--;
    chancesEle.textContent = chances;

    if (input.value == randomNum) {
        note.textContent = "Congratulation!";
        note.style.color = "green";
        input.style.borderColor = "green";
        input.disabled = true;
        btn.textContent = "Replay";
    } else if (input.value > randomNum && input.value < 100) {
        note.textContent = "Your number is high";
        note.style.color = "rgb(223, 212, 0)";
        input.style.borderColor = "rgb(223, 212, 0)";
    } else if (input.value < randomNum && input.value > 1) {
        note.textContent = "Your number is low";
        input.style.borderColor = "rgb(223, 212, 0)";
        note.style.color = "rgb(223, 212, 0)";
    } else {
        note.textContent = "Input is invalid!";
        note.style.color = "red";
        input.style.borderColor = "red";
    }

    if (chances == 0) {
        note.textContent = "You Lose The Game!";
        note.style.color = "red";
        input.style.borderColor = "red";
        input.disabled = true;
        btn.textContent = "Replay";
    }
})