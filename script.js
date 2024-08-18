let p1 = document.querySelector(".p1")
let p1btn = document.querySelector(".p1btn")
let p2 = document.querySelector(".p2")
let p2btn = document.querySelector(".p2btn")
let showMsg = document.querySelector(".showMsg")
let output = document.querySelector(".output")
let errorShow = document.querySelector(".errorShow")
let player = document.querySelector(".player")

p1btn.addEventListener("click", function () {
    if (p1.value == "") {
        errorShow.classList.remove("d-none")
        errorShow.innerHTML = "put a value"

    }
    else {
        if (!(p1.value - 1 == 0 ? true : p1.value - 1)) {
            errorShow.classList.remove("d-none")
            errorShow.innerHTML = "Enter number only"
        }
        else {
            if (p1.value > 10 || p1.value - 1 < 0) {
                errorShow.classList.remove("d-none")
                errorShow.innerHTML = "The number must be in 1 to 10"
            }
            else {
                errorShow.classList.add("d-none")
                player.innerHTML = "Player 2"
                p2.classList.remove("d-none")
                p2btn.classList.remove("d-none")
                p1.classList.add("d-none")
                p1btn.classList.add("d-none")
            }
        }
    }
})

p2btn.addEventListener("click", function () {
    output.innerHTML = p2.value

    if (p1.value == p2.value) {
        output.innerHTML = "Player two win"
    }
    else {
        output.innerHTML = "Player one win"
    }
})