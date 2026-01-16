document.getElementById("calculateBtn").addEventListener("click", () => {
    let principal = parseFloat(document.getElementById("principal").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let years = parseInt(document.getElementById("years").value);

    // Validation
    let errors=[];
    if(principal < 2000 || principal > 100000000 || isNaN(principal)) {
        errors.push("Enter a valid principal (2000 - 1000000)");
    }
    if(annualRate < 1 || annualRate > 30 || isNaN(annualRate)) {
        errors.push("Enter a valid annual rate (1 - 30)");
    }
    if(years < 1 || years > 30 || isNaN(years)) {
        errors.push("Enter a valid term (1 - 30 years)");
    }

    if(errors.length>0){
        alert(errors.join("\n"));
        return;
    }

    // Mortgage Calculation
    let r = (annualRate / 100) / 12;
    let n = years * 12;
    let M = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    // Format currency
    const INR_to_USD=90;
    let inrAmount=M;
    let usdAmount=inrAmount/INR_to_USD;

    let currencyINR = inrAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    let currencyUSD = usdAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    // Display results
    document.getElementById("months").innerText=`Loan duration: ${n} months`;
    document.getElementById("monthlyPayment").innerText = `Monthly Payment: ${currencyINR}`;
    document.getElementById("currencyINR").innerText = `In Rupees: ${currencyINR}`;
    document.getElementById("currencyUSD").innerText = `In Dollars: ${currencyUSD}`;
});
