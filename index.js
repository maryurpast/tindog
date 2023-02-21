import dogsData from "/data.js";
import Dog from "/Dog.js";
let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);
let isWaiting = false;
render();

document.getElementById("like").addEventListener("click", yes);
document.getElementById("reject").addEventListener("click", nope);

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
  document.getElementById("card").style.background =
    currentDog.getDogBackground();
  document.getElementById("card").style.backgroundSize = `cover`;
}

function getNewDog() {
  if (currentDogIndex < dogsData.length - 1) {
    currentDogIndex += 1;
  } else {
    currentDogIndex = 0;
  }
  currentDog = new Dog(dogsData[currentDogIndex]);
  render();
}

function yes() {
  currentDog.setMatchStatus(true);
  handleBadge();
}

function nope() {
  currentDog.setMatchStatus(false);
  handleBadge();
}

function handleBadge() {
  if (!isWaiting) {
    isWaiting = true;
    renderBadge();
    setTimeout(() => {
      getNewDog();
    }, 1000);

    setTimeout(() => {
      isWaiting = false;
    }, 1500);
  }
}

function renderBadge() {
  document.getElementById(
    "card"
  ).innerHTML = `${currentDog.getBadgeHtml()} ${currentDog.getDogHtml()}`;
}
