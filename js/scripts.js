//Business Logic

function beepBoop(num) {
      let outputArr = [];
      for (let i = 0; i <= num; i++) {
        const element = i.toString();
        if (element.includes("3")) {
          outputArr.push("Won't you be my neighbor?"); 
        } else if (element.includes("2")) {
          outputArr.push("Boop!");
        }  else if (element.includes("1")) {
          outputArr.push("Beep!");
        } else {
          outputArr.push(element);
        }
      }
      return outputArr.join(", ");
    } 


//UI Logic
function handleFormSubmission() {
  event.preventDefault();
  document.querySelector("div#output").innerText = null;
  const userInput = parseInt(document.getElementById("number").value);
  const neighbor = beepBoop(userInput);
  document.querySelector("div#output").append(neighbor);
}

window.addEventListener("load", function() {
  document.querySelector("form#neighborhood").addEventListener("submit", handleFormSubmission);
});