let bday = document.getElementById("bday");
let luckyNo = document.getElementById("luckyNo");
let button = document.getElementById("btn");

let bdayString = bday.value;
let newString = bdayString.replaceAll('-','');




button.addEventListener('click', checkLucky);

function checkLucky(){
    console.log(bdayString)
    console.log(newString)
}