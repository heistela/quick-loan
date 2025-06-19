document.getElementById("loanForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const term = parseInt(document.getElementById("term").value);
  const rate = parseFloat(document.getElementById("rate").value);

  const interest = (amount * rate * term) / (100 * 12);
  const total = amount + interest;
  const monthly = total / term;

  document.getElementById("summaryContent").innerHTML = `
    <p><strong>Loan Amount:</strong> $${amount.toFixed(2)}</p>
    <p><strong>Term:</strong> ${term} months</p>
    <p><strong>Interest Rate:</strong> ${rate.toFixed(2)}%</p>
    <p><strong>Total Repayment:</strong> $${total.toFixed(2)}</p>
    <p><strong>Monthly Payment:</strong> $${monthly.toFixed(2)}</p>
  `;
  document.getElementById("summary").classList.remove("hidden");
});