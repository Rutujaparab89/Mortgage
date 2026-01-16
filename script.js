document.getElementById("calculateBtn").addEventListener("click", () => {
    let principal = parseFloat(document.getElementById("principal").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let years = parseInt(document.getElementById("years").value);

    // Validation
    if(principal < 2000 || principal > 1000000 || isNaN(principal)) {
        alert("Enter a valid principal (2000 - 1000000)");
        return;
    }
    if(annualRate < 1 || annualRate > 30 || isNaN(annualRate)) {
        alert("Enter a valid annual rate (1 - 30)");
        return;
    }
    if(years < 1 || years > 30 || isNaN(years)) {
        alert("Enter a valid term (1 - 30 years)");
        return;
    }

    // Mortgage Calculation
    let r = (annualRate / 100) / 12;
    let n = years * 12;
    let M = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    // Format currency
    let usd = M.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    let inr = M.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

    // Display results
    document.getElementById("monthlyPayment").innerText = `Monthly Payment: ${M.toFixed(2)}`;
    document.getElementById("currencyUSD").innerText = `In Dollars: ${usd}`;
    document.getElementById("currencyINR").innerText = `In Rupees: ${inr}`;
});
