let bday = document.getElementById("bday");
let luckyNo = document.getElementById("luckyNo");
let button = document.getElementById("btn");
let msg = document.getElementById("luckyMsg");

// let replacedString = bday.value.replaceAll('-','');

button.addEventListener('click', checkLucky);

function checkLucky(){
    let sum = 0;
    for(let i = 0; i< bday.value.replaceAll('-','').length; i++){
        let num = Number(bday.value.replaceAll('-','')[i]);
        sum+= num;
    }
    
    if(bday.value === '' || luckyNo.value === ''){
        msg.innerHTML = "please enter both the fields to proceed 🚫";
    }

    else if(sum % luckyNo.value === 0){
        msg.innerHTML = "yayy! your birthday is lucky 🥳"
        msg.style.color = "green"
    }

    else{
        msg.innerHTML = "not lucky this time 😢";
        msg.style.color = "red";

    }
}

