
//* lets voor img*//
let bob = document.querySelector('#bobHond')
bobHond.src = "img/Bob-proogrammeren.png"
let bobNormal = false

//* lets voor sounds, tamara heeft me hierbij geholpen*//
let audio = new Audio("sounds/eating.mp3")
let audio2 = new Audio("sounds/funny.mp3")

//* lets voor invoerveld, uit de les slides gehaald*//
let userName;
let namen = ['Diego','Javier', 'Tamara', 'Demi', 'Chanel', 'Bobby']

//* constanten voor main knoppen *//
const btnvoerBob = document.getElementById("button5");
const btnmaakSchoon = document.getElementById("button1");
const btnaaiBob = document.getElementById("button2");
const voerNu = document.querySelector('#voerNu');
const schoon = document.querySelector('#schoon');
const aai = document.querySelector('#aai');

//* constanten voor invoerveld*//
const nameInput = document.getElementById("nameInput");
const button3 = document.getElementById("button3");
const h2 = document.querySelector("h2");
const button4 = document.getElementById("button4");

//* functions voor invoerveld *//
function logInput() {
    userName = nameInput.value;
    h2.textContent = "Dit is " + userName;
}

function randomName() {
    nameInput.value = namen[Math.ceil(Math.random() * 5)]
}

//* functions voor main knoppen, hulp gekregen van Javier *//
function voerBob() {
    console.log("lekker eten!");
    voerNu.textContent = "Nom Nom, Dankuu"
    setTimeout(hideHint, 3000)
    if(bobNormal == true){
        bobHond.src = "img/Bobvoer-proogrammeren-2.png"
        bobNormal = false
        audio.play()
    } else {
        bobHond.src = "img/Bob-proogrammeren.png"
        bobNormal = true
    }
}

if (bobNormal == true){
    bobHond.src = "img/Bobvoer-proogrammeren-2.png"
    bobNormal = false
} else {
    bobHond.src = "img/Bob-proogrammeren.png"
    bobNormal = true
}

function hideHint() {
    voerNu.textContent = ""
    bobHond.src = "img/Bob-proogrammeren.png"
}

function maakSchoon() {
    console.log("dankjewel! nu ben ik schoon");
    schoon.textContent = "dankjewel! nu ben ik lekker schoon!"
    setTimeout(hideHint1, 3000)
    if(bobNormal == true){
        bobHond.src = "img/Bob-proogrammeren-3.png"
        bobNormal = false
        audio2.play()
    } else {
        bobHond.src = "img/Bob-proogrammeren.png"
        bobNormal = true
    }
}

if (bobNormal == true){
    bobHond.src = "img/Bob-proogrammeren-3.png"
    bobNormal = false
} else {
    bobHond.src = "img/Bob-proogrammeren.png"
    bobNormal = true
}

function hideHint1() {
    schoon.textContent = ""
    bobHond.src = "img/Bob-proogrammeren.png"

}

function aaiBob() {
    console.log("mmmhhhhh");
    aai.textContent = "mmhhhhhmmm"
    setTimeout(hideHint2, 3000)
}

function hideHint2() {
    aai.textContent = ""
}

//* eventlisteners voor main knoppen *//
btnvoerBob.addEventListener('click',voerBob);
btnmaakSchoon.addEventListener('click',maakSchoon);
btnaaiBob.addEventListener('click',aaiBob);

//* eventlisteners voor invoerveld *//
button3.addEventListener("click", logInput);
button4.addEventListener("click", randomName);


