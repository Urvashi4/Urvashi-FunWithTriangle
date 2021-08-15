let angle1 = document.querySelector('#inp1');
let angle2 = document.querySelector('#inp2');
let angle3 = document.querySelector('#inp3');
let result = document.querySelector('.output');

function refreshOutput() {
    result.innerText = "";
}

document.querySelector('.submitBtn').addEventListener("click", (e) => {
    e.preventDefault();
    let sum = 0;
    refreshOutput();
    let A1 = Number(angle1.value);
    let A2 = Number(angle2.value);
    let A3 = Number(angle3.value);
    sum = A1 + A2 + A3;
    if (sum === 180) {
        result.innerText = "Yey! these angles can make a triangle";
    } else {
        result.innerText = "Oops! these angles can not make a triangle";
    }

});