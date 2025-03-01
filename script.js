const cardButton = document.querySelectorAll(".card-button");
const cardTitle = document.querySelectorAll(".card-title");
const cardNumberText = document.getElementById("card-number");
let cardNumber = parseInt(cardNumberText.innerText);
const totalNumberText = document.getElementById("total-number");
let totalNumber = parseInt(totalNumberText.innerText);

for (let i = 0; i < cardButton.length; i++) {
  cardButton[i].addEventListener("click", function () {
    const titles = cardTitle[i].innerText;
    const addedCard = document.getElementById("card-add");
    const createElement = document.createElement("p");
    createElement.innerText = titles;
    addedCard.appendChild(createElement);
    alert("code successful");
    cardButton[i].disabled = true;

    // dashboard card number decrement
    cardNumber = cardNumber - 1;
    cardNumberText.innerText = cardNumber;
    console.log(cardNumber);
    //Total Card Number Decrement
    totalNumber = totalNumber - 1;
    totalNumberText.innerText = totalNumber;
  });
}

// const click = document.getElementById("handleClick");
// click.addEventListener("click", function () {
//   const cardTitle = document.getElementById("card-title").innerText;
// const addedCard = document.getElementById("card-add");
// const createElement = document.createElement("p");
// createElement.innerText = cardTitle;
// addedCard.appendChild(createElement);
// document.getElementById("handleClick").disabled = true;

// alert("code successful");
// // });

// Change Color

function changeColor() {
  const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  document.getElementById("bgColor").style.backgroundColor = randomColor;
}
