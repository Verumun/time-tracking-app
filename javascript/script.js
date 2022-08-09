'use strict'

const billInput = document.getElementById('bill-input');
const personsInput = document.getElementById('people-input');
const customTipInput = document.getElementById('custom-tip');
const buttons = document.querySelectorAll('.button');
const resetButton = document.getElementById('reset');    

// DisplaY
const tipOutput = document.getElementById('tip-display');
const totalOutput = document.getElementById('total-display');


let tip = 0;
let billAmount = 0;
let persons = 1;




const calc = function(){
    if(billAmount >=0 && persons >=1){
        let totalTip = (billAmount * tip)/100;
        let totalAmount = totalTip + billAmount;

        tipOutput.innerHTML = (totalTip / persons).toFixed(3);
        totalOutput.innerHTML = (totalAmount / persons).toFixed(3);
    }
}

// For loop 
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", ()=>{
        tip = buttons[i].value;
        calc()
    })
}

// buttons.forEach(btn =>{
//     btn.addEventListener("click", ()=>{

//         tip = btn.value;
//         calc()
//     })
// })

billInput.addEventListener("input", ()=>{
    billAmount = billInput.value;
    calc()
});

personsInput.addEventListener("input", ()=>{
    persons = personsInput.value;
    calc()
});

customTipInput.addEventListener("input", ()=>{
    tip = customTipInput.value;
    calc()
});




// My initial Approach

// billInput.addEventListener("input", function(){
    
//     if(tip5Percent.addEventListener('click', function(){
//         result = (billInput.value * 0.05).toFixed(2);
//         // tipAmountPerson = result/NoPeople; 
//         console.log(result)

//         tipOutput.innerText = result;
//     }));
// })



