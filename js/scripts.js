//Business Logic

function beepBoop(n) {
  const outputArr = [];
  for (let i = 0; i <= n; i++) {
    if (i === 1)
      outputArr.push("Beep!");
  }
return outputArr
};

  














//UI Logic

function handleFormSubmission() {
  event.preventDefault();
}

window.addEventListener("load", function() {
  this.document.querySelector("form#neighborhood").addEventListener("submit", handleFormSubmission);
});