const cardButton = document.querySelectorAll(".card-button");
const cardTitle = document.querySelectorAll(".card-title");
const cardNumberText = document.getElementById("card-number");
let cardNumber = parseInt(cardNumberText.innerText);
const totalNumberText = document.getElementById("total-number");
let totalNumber = parseInt(totalNumberText.innerText);
let historyCard = document.getElementById("card-add");
const deleteButton = document.getElementById("delete-button");

for (let i = 0; i < cardButton.length; i++) {
  cardButton[i].addEventListener("click", function () {
    // Current Time
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    // Convert to 12-hour format
    hours = hours % 12 || 12;
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    const titles = cardTitle[i].innerText;
    const addedCard = document.getElementById("card-add");
    const createElement = document.createElement("p");
    createElement.innerText =
      "You have Completed the task" +
      " " +
      titles +
      " " +
      "at" +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds +
      " " +
      ampm;
    createElement.classList.add(
      "bg-[#F4F7FF]",
      "font-bold",
      "p-4",
      "rounded-xl",
      "mt-2"
    );
    addedCard.appendChild(createElement);
    alert("Task Updated Successful");
    cardButton[i].disabled = true;

    // dashboard card number decrement
    cardNumber = cardNumber - 1;
    cardNumberText.innerText = cardNumber;
    console.log(cardNumber);
    //Total Card Number Decrement
    totalNumber = totalNumber + 1;
    totalNumberText.innerText = totalNumber;

    if (cardNumber === 0) {
      alert("all card click");
    }
  });
}
// Delete History
deleteButton.addEventListener("click", function () {
  alert("Delete All Successful ");
  historyCard.innerText = "";
});

// Change Color
function changeBgColor() {
  const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  document.getElementById("bgColor").style.backgroundColor = randomColor;
}
