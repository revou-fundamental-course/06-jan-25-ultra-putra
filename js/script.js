// let person = prompt("Please enter your name", "");

// if (person != null) {
//   document.getElementById("greeting").innerHTML =
//     "Hai " + person.toUpperCase() + " ! How are you today?";
// }

let indexBanner = 0;

changeBackground();

function nextBanner() {
  indexBanner = indexBanner + 1;
  changeBackground();
}

// Function to change background banner
function changeBackground() {
  let bannerList = document.getElementsByClassName("banner");

  if (indexBanner > bannerList.length - 1) {
    // Reset indexBanner
    indexBanner = 0;
  }

  // Looping to change background
  for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = "none";
  }

  bannerList[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);
