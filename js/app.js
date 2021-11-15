const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const points = document.querySelector('.points');
const distribute = document.querySelector('.distribute');

let i = 3;

document.addEventListener('DOMContentLoaded', function() {
    points.textContent = i;
})
add.addEventListener('click', function () {
    i++
    points.textContent = i;
})
subtract.addEventListener('click', function () {
    i--
    points.textContent = i;
})
distribute.addEventListener('click', function () {
    i = i + 2;
    points.textContent = i;
})