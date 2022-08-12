'use strict'

const billInput = document.getElementById('bill-input');
const personsInput = document.getElementById('people-input');
const customTipInput = document.getElementById('custom-tip');
const buttons = document.querySelectorAll('.button');
const resetButton = document.getElementById('reset');   
const errorText2 = document.querySelector('.error-text2'); 
const errorText1 = document.querySelector('.error-text1'); 

// DisplaY
const tipOutput = document.getElementById('tip-display');
const totalOutput = document.getElementById('total-display');


let tip = 0;
let billAmount = 0;
let persons = 0;



/* 
    Step 1. declare tip, billAmount, persons
    step 2. create a calculate function
    step 3. loop through the buttons
*/

const calc = function(){
    if(billAmount >=0 && persons >=1){
        let totalTip = (billAmount * tip)/100;
        let totalAmount = totalTip + billAmount;

        tipOutput.innerHTML = (totalTip / persons).toFixed(2);
        totalOutput.innerHTML = (totalAmount / persons).toFixed(2);
    }else{
        totalOutput.innerHTML = '0.00';
        tipOutput.innerHTML = '0.00';
    }
}

const init = function(){
    tip = 0;
    billAmount = 0;
    persons = 0;
    billInput.value = '';
    personsInput.value = '';
    customTipInput.value = '';
    totalOutput.innerText = '0.00';
    tipOutput.innerText = '0.00';
    // buttons[i].value = '';
 

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

    if(billAmount <=0 && billAmount != ""){
        billInput.classList.add("error");
        errorText1.style.visibility = "visible";
    }else{
        billInput.classList.remove("error");
        errorText1.style.visibility = "hidden";
        // calc();        
    }

    
});

personsInput.addEventListener("input", ()=>{
    persons = personsInput.value;

    // if(persons >= 1){
    //     errorText.classList.toggle('show', persons)
    //     // personsInput.classList.add('error')
    //     console.log(persons)
    // }

        if(persons <=0 && persons != ""){
            personsInput.classList.add("error");
            errorText2.style.visibility = "visible";
        }else{
            personsInput.classList.remove("error");
            errorText2.style.visibility = "hidden";
            // calc();        
        }
    
    

    
});

customTipInput.addEventListener("input", ()=>{
    tip = customTipInput.value;
    calc()
});


resetButton.addEventListener('click', ()=>{
    init()
})

    // My initial Approach

// billInput.addEventListener("input", function(){
    
//     if(tip5Percent.addEventListener('click', function(){
//         result = (billInput.value * 0.05).toFixed(2);
//         // tipAmountPerson = result/NoPeople; 
//         console.log(result)

//         tipOutput.innerText = result;
//     }));
// })



