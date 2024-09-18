const input = document.querySelector(".input");
const numberOfPeople = document.querySelector(".number-of-people");
const generateBtn = document.querySelector(".generate-bill-btn");
const total = document.querySelector(".total span");
const tipAmountOutput = document.querySelector(".tip-amount span");
const eachPersonBill = document.querySelector(".each-person-bill span");
const resetBtn = document.querySelector(".reset-btn");
const customTip = document.querySelector(".custom-tip");
const tipContainer = document.querySelector(".tip-container");
const perTip = document.querySelector(".tip")

let inputValue = 0;
let peopleNumbers = 0;
let tip = 0;

generateBtn.addEventListener('click',() => { 
    inputValue = parseFloat(input.value);
    peopleNumbers = parseInt(numberOfPeople.value);
    let tipAmount;
    if (tip !== 0) {

        tipAmount = inputValue / 100;
    }
    tipAmount = (inputValue * tip) / 100;
    
    const totalBill = inputValue + tipAmount;

    const calculateValue = totalBill / peopleNumbers;
    total.innerText = `₹ ${totalBill}`;
    tipAmountOutput.innerText = `₹ ${tipAmount}`;
    eachPersonBill.innerText = `₹ ${calculateValue}`;
    if (inputValue <= 0) {
        alert("Number of people should be greater than 0");
        return;
    }
    if (peopleNumbers <= 0) {
        alert("Number of people should be greater than 0");
        return;
    }
    resetBtn.disabled = false;
 })

tipContainer.addEventListener('click',(e) => { 
    // console.log(e.target,tipContainer);
    if(e.target !== tipContainer) {
        // console.log(e.target.innerText);
        tip = parseInt(e.target.innerText);
        customTip.value = '';
        [...tipContainer.children].forEach((tip) => { tip.classList.remove("selected") });
        e.target.classList.add("selected");
        console.log(tip);
        if(numberOfPeople.value && tip) {
            generateBtn.disabled = false;
        }else {
            generateBtn.disabled = true;
        }
    }
 })

 customTip.addEventListener('input',() => { 
    [...tipContainer.children].forEach((tip) => { tip.classList.remove("selected") });
    tip = parseInt(customTip.value);
    if(numberOfPeople.value && tip) {
        generateBtn.disabled = false;
    }else {
        generateBtn.disabled = true;
    }
  })

resetBtn.addEventListener('click',() => { 
    total.innerText = '';
    tipAmountOutput.innerText = '';
    eachPersonBill.innerText = '';
    customTip.value = '';
    input.value = '';
    numberOfPeople.value = '';
    [...tipContainer.children].forEach((tip) => { tip.classList.remove("selected") })
    resetBtn.disabled = true
    customTip.disabled = true
        numberOfPeople.disabled = true
        generateBtn.disabled = true;
    [...tipContainer.children].forEach(element => {
        element.classList.add("disable")
    });
 })

 input.addEventListener('input',() => { 
    if(input.value) {
        customTip.disabled = false
        numberOfPeople.disabled = false;
        [...tipContainer.children].forEach(element => {
            element.classList.remove("disable")
        });
    }
  })

  numberOfPeople.addEventListener('input',() => { 
    if(numberOfPeople.value && tip) {
        generateBtn.disabled = false;
    }else {
        generateBtn.disabled = true;
    }
   })

//   console.log(perTip);


