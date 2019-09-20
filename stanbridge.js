const calcTotal = (total, tip, tax) => {
    const tipAmt = total * rate;
    const grandTotal = total + tipAmt + tax;
    return grandTotal;
}

const calcTip = (total, rate) => {
    return total * (rate/100);
}


document.querySelector("#calc-button").addEventListener("click", () => {
    const total = parseFloat(document.querySelector("#total").value);
    const rate = parseFloat(document.querySelector("#rate").value);
    const tip = parseFloat(document.querySelector("#tip").value);
    const tax = 5.50;

    const tipTotal = calcTip(total, rate);
    const result = calcTotal(total, tipTotal, tax);

    document.querySelector("#rate").innerHTML = rate;
    document.querySelector("#tip").innerHTML = tipTotal;
    document.querySelector("#tax").innerHTML = tax;

    document.querySelector("#grand-total").innerHTML = result;
    
});
    


    




