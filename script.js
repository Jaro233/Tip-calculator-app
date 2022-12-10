

let numberOfPeople = document.querySelector(".number-of-people-input")
let billInput = document.querySelector(".bill-input")
let billValue;
let tipValue;
let numberOfPeopleValue;
let resetBtn = document.querySelector(".reset-btn")

//billInputs

billInput.addEventListener("input", () => {
    billValue = billInput.value
    resetBtn.style.opacity = "1"
    document.querySelector(".reset").style.cursor = "pointer"
    console.log('billValue', billValue)

    //setting red border and text
    if(billValue == 0) {
        document.querySelector(".bill-div").classList.add("hidden")
        // billInput.style.outline="0.125rem solid red;"
        document.querySelector(".red-div").classList.remove("hidden")
        billInput.classList.add("red-outline")
        billInput.classList.remove("input")
        document.querySelector(".tip-value").innerHTML = "$0.00"
        document.querySelector(".total-value").innerHTML = "$0.00"
    } else {
        document.querySelector(".bill-div").classList.remove("hidden")
        // billInput.style.outline="0.125rem solid red;"
        document.querySelector(".red-div").classList.add("hidden")
        billInput.classList.remove("red-outline")
        billInput.classList.add("input")
    }

    //setting the output
    if(numberOfPeople.value > 0) {
        let tipAmount = (tipValue / 100) * billValue / numberOfPeopleValue;
        let totalAmount = billValue / numberOfPeopleValue + tipAmount;
        
        console.log('tipAmount', tipAmount)
        document.querySelector(".tip-value").innerHTML = `$${tipAmount.toFixed(2)}`;
        document.querySelector(".total-value").innerHTML = `$${totalAmount.toFixed(2)}`;
        resetBtn.style.opacity = "1"
        document.querySelector(".reset").style.cursor = "pointer"
    }
})

console.log('tips', document.querySelectorAll(".tip"))

//tip btns

document.querySelectorAll(".tip").forEach((tip) => {
    tip.addEventListener("click", () => {
        resetBtn.style.opacity = "1"
        document.querySelector(".reset").style.cursor = "pointer"
        let otherBtns = [...document.querySelectorAll(".tip")].filter(btn => { return btn != tip })
        console.log('otherBtns', otherBtns)
        otherBtns.forEach((btn) => {
            if(btn.classList.contains("focus")) {
                btn.classList.remove("focus")
                customInput.value = ""
            } else {
                tip.classList.add("focus")
            }
        })
      
        tipValue = tip.innerHTML
        console.log('tipValue', tipValue)
        if(tipValue == "5%") {
            tipValue = 5

            //setting the output
            if(numberOfPeople.value > 0 && billInput.value > 0) {
                let tipAmount = (tipValue / 100) * billValue / numberOfPeopleValue;
                let totalAmount = billValue / numberOfPeopleValue + tipAmount;
                
                console.log('tipAmount', tipAmount)
                document.querySelector(".tip-value").innerHTML = `$${tipAmount.toFixed(2)}`;
                document.querySelector(".total-value").innerHTML = `$${totalAmount.toFixed(2)}`;
                resetBtn.style.opacity = "1"
                document.querySelector(".reset").style.cursor = "pointer"
            }
        }
        if(tipValue == "10%") {
            tipValue = 10

            //setting the output
            if(numberOfPeople.value > 0 && billInput.value > 0) {
                let tipAmount = (tipValue / 100) * billValue / numberOfPeopleValue;
                let totalAmount = billValue / numberOfPeopleValue + tipAmount;
                
                console.log('tipAmount', tipAmount)
                document.querySelector(".tip-value").innerHTML = `$${tipAmount.toFixed(2)}`;
            document.querySelector(".total-value").innerHTML = `$${totalAmount.toFixed(2)}`;
                resetBtn.style.opacity = "1"
                document.querySelector(".reset").style.cursor = "pointer"
            }
        }
        if(tipValue == "15%") {
            tipValue = 15

            //setting the output
            if(numberOfPeople.value > 0 && billInput.value > 0) {
                let tipAmount = (tipValue / 100) * billValue / numberOfPeopleValue;
                let totalAmount = billValue / numberOfPeopleValue + tipAmount;
                
                console.log('tipAmount', tipAmount)
                document.querySelector(".tip-value").innerHTML = `$${tipAmount.toFixed(2)}`;
                 document.querySelector(".total-value").innerHTML = `$${totalAmount.toFixed(2)}`;
                resetBtn.style.opacity = "1"
                document.querySelector(".reset").style.cursor = "pointer"
            }
        }
        if(tipValue == "25%") {
            tipValue = 25

            //setting the output
            if(numberOfPeople.value > 0 && billInput.value > 0) {
                let tipAmount = (tipValue / 100) * billValue / numberOfPeopleValue;
                let totalAmount = billValue / numberOfPeopleValue + tipAmount;
                
                console.log('tipAmount', tipAmount)
                document.querySelector(".tip-value").innerHTML = `$${tipAmount.toFixed(2)}`;
                document.querySelector(".total-value").innerHTML = `$${totalAmount.toFixed(2)}`;
                resetBtn.style.opacity = "1"
                document.querySelector(".reset").style.cursor = "pointer"
            }
        }
        if(tipValue == "50%") {
            tipValue = 50

            //setting the output
            if(numberOfPeople.value > 0 && billInput.value > 0) {
                let tipAmount = (tipValue / 100) * billValue / numberOfPeopleValue;
                let totalAmount = billValue / numberOfPeopleValue + tipAmount;
                
                console.log('tipAmount', tipAmount)
                document.querySelector(".tip-value").innerHTML = `$${tipAmount.toFixed(2)}`;
                document.querySelector(".total-value").innerHTML = `$${totalAmount.toFixed(2)}`;
                resetBtn.style.opacity = "1"
                document.querySelector(".reset").style.cursor = "pointer"
            }
        }
        console.log('tipValue', tipValue)
    })
})


//cunstomInput

let customInput = document.querySelector(".custom-input")
customInput.addEventListener("input", () => {
    tipValue = customInput.value
    resetBtn.style.opacity = "1"
    document.querySelector(".reset").style.cursor = "pointer"
    console.log('tipValue', tipValue)

    //setting the output
    if(numberOfPeople.value > 0 && billInput.value > 0) {
        let tipAmount = (tipValue / 100) * billValue / numberOfPeopleValue;
        let totalAmount = billValue / numberOfPeopleValue + tipAmount;
        
        console.log('tipAmount', tipAmount)
        document.querySelector(".tip-value").innerHTML = `$${tipAmount.toFixed(2)}`;
         document.querySelector(".total-value").innerHTML = `$${totalAmount.toFixed(2)}`;
        resetBtn.style.opacity = "1"
        document.querySelector(".reset").style.cursor = "pointer"
    }
})




console.log('tipValue', tipValue)

//numberOfPeople input nad finall output

numberOfPeople.addEventListener("input", () => {
    //setting the output
    numberOfPeopleValue = numberOfPeople.value
    console.log('numberOfPeopleValue', numberOfPeopleValue)
    let tipAmount = (tipValue / 100) * billValue / numberOfPeopleValue;
    let totalAmount = billValue / numberOfPeopleValue + tipAmount;
    
    console.log('tipAmount', tipAmount)
    document.querySelector(".tip-value").innerHTML = `$${tipAmount.toFixed(2)}`;
    document.querySelector(".total-value").innerHTML = `$${totalAmount.toFixed(2)}`;
    resetBtn.style.opacity = "1"
    document.querySelector(".reset").style.cursor = "pointer"

    //setting red border and text
    if(numberOfPeopleValue == 0) {
        document.querySelector(".number-of-people-div").classList.add("hidden")
        // billInput.style.outline="0.125rem solid red;"
        document.querySelector(".red-div-2").classList.remove("hidden")
        numberOfPeople.classList.add("red-outline")
        numberOfPeople.classList.remove("input")
        // numberOfPeople.style.outline="0.125rem solid red"
        document.querySelector(".tip-value").innerHTML = "$0.00"
        document.querySelector(".total-value").innerHTML = "$0.00"
    } else {
        document.querySelector(".number-of-people-div").classList.remove("hidden")
        // billInput.style.outline="0.125rem solid red;"
        document.querySelector(".red-div-2").classList.add("hidden")
        // numberOfPeople.style.outline="0.125rem solid hsl(172deg, 67%, 45%)"
        billInput.classList.remove("red-outline")
        numberOfPeople.classList.add("input")
    }
})

//reset btn


resetBtn.addEventListener("click", () => {
    billInput.value = ""
    numberOfPeople.value = ""
    
    document.querySelectorAll(".tip").forEach((tip) => {
        tip.classList.remove("focus")
    })

    customInput.value = ""

    //not clickable after reset
    document.querySelector(".tip-value").innerHTML = "$0.00"
    document.querySelector(".total-value").innerHTML = "$0.00"
    resetBtn.style.opacity = "0.2"
    document.querySelector(".reset").style.cursor = "not-allowed"

    //no red border on first input
    document.querySelector(".bill-div").classList.remove("hidden")
    document.querySelector(".red-div").classList.add("hidden")
    // billInput.style.outline="none"
    billInput.classList.remove("red-outline")
    billInput.classList.add("input")
    
    //no red border on second input
    document.querySelector(".number-of-people-div").classList.remove("hidden")
    document.querySelector(".red-div-2").classList.add("hidden")
    // numberOfPeople.style.outline="none"
    numberOfPeople.classList.remove("red-outline")
    numberOfPeople.classList.add("input")
})


//input not clickable on refresh or when everything is default
if ( billInput.value == "" 
&& numberOfPeople.value == "" 
&& !document.querySelectorAll(".tip")[0].classList.contains("focus")
&& !document.querySelectorAll(".tip")[1].classList.contains("focus")
&& !document.querySelectorAll(".tip")[2].classList.contains("focus")
&& !document.querySelectorAll(".tip")[3].classList.contains("focus")
&& !document.querySelectorAll(".tip")[4].classList.contains("focus")
&& !document.querySelectorAll(".tip")[5].classList.contains("focus")
&& customInput.value == "" 
&& document.querySelector(".tip-value").innerHTML == "$0.00" 
&& document.querySelector(".total-value").innerHTML == "$0.00"
) {
    console.log('working')
    resetBtn.style.opacity = "0.2"
    // document.querySelector(".reset").disabled = "true";
    document.querySelector(".reset").style.cursor = "not-allowed"
} else {
    resetBtn.style.opacity = "1"
    document.querySelector(".reset").style.cursor = "pointer"
}

 

