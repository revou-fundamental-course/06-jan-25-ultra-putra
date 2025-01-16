let person = prompt("Please enter your name", "");

if (person != null) {
  document.getElementById("greeting").innerHTML =
    "Hai " + person.toUpperCase() + " ! How are you today?";
}
