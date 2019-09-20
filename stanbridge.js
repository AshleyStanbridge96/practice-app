const calcTotal = (total, tipAmt, taxAmt) => {
    const grandTotal = total + tipAmt + taxAmt;
    return grandTotal;
}

const calcTip = (total, rate) => {
    return total * (rate/100);
}

const calcTax = (total) => {
    return total * (5.5/100);
}


document.querySelector("#calc-button").addEventListener("click", () => {
    const total = parseFloat(document.querySelector("#total").value);
    const rate = parseFloat(document.querySelector("#rate").value);
    const tip = parseFloat(document.querySelector("#tip").value);
    const tax = 5.50;

    const tipTotal = calcTip(total, rate);
    const taxTotal = calcTax(total);
    const result = calcTotal(total, tipTotal, taxTotal);

    document.querySelector("#rate").innerHTML = rate;
    document.querySelector("#tip").innerHTML = tipTotal;
    document.querySelector("#tax").innerHTML = tax;

    document.querySelector("#grand-total").innerHTML = result;
    
});
    


    




