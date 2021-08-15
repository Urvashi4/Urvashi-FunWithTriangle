let base = document.querySelector('#base');
let height = document.querySelector('#height');
let side1 = document.querySelector('#side1');
let side2 = document.querySelector('#side2');
let side3 = document.querySelector('#side3');
let bs = document.querySelector('#s1');
let perpendicular = document.querySelector('#s2');
let angle = document.querySelector('#angle');
const section1 = document.querySelector('.frst');
const section2 = document.querySelector('.second');
const section3 = document.querySelector('.third');

if (document.getElementById('one').checked) {
    section1.style.display = "block";
    section2.style.display = "none";
    section3.style.display = "none";
}

if (document.getElementById('second').checked) {
    section1.style.display = "none";
    section2.style.display = "block";
    section3.style.display = "none";
}

if (document.getElementById('third').checked) {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "block";
}

