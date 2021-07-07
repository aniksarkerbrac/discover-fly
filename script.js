function handlePlusMinus(operator, typeOfTicket) {
    const ticketCounter = getInputNumber(typeOfTicket);
    let currentNumber = 0;
    if (operator == 'plus') {
        currentNumber = ticketCounter + 1;
    }
    if (operator == 'minus' && ticketCounter > 0) {
        currentNumber = ticketCounter - 1;
    }
    document.getElementById(typeOfTicket).value = currentNumber;
    calculateTotalfare();
}

function calculateTotalfare() {
    const firstClassCount = getInputNumber('firstClass');
    const economyClassCount = getInputNumber('economyClass');

    const subTotal = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('subTotal').innerText = subTotal;

    const vat = Math.round(subTotal * 0.1);
    document.getElementById('vat').innerText = vat;

    const total = subTotal + vat;
    document.getElementById('total').innerText = total;
}

function getInputNumber(typeOfTicket){
    const classType = document.getElementById(typeOfTicket).value;
    const classCounter = Number(classType);
    return classCounter;
}

function showModal(){
    const firstClassCount = getInputNumber('firstClass');
    const economyClassCount = getInputNumber('economyClass');
    const total = document.getElementById('total').innerText;

    document.getElementById('firstClassModal').innerText = firstClassCount;
    document.getElementById('economyClassModal').innerText = economyClassCount;
    document.getElementById('totalFareModal').innerText = total;
}