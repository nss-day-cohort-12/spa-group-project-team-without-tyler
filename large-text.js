// need feature to add and remove large text class

var largeText = document.getElementById("large-text");

largeText.addEventListener("click", function(){
console.log(event.target);
});

console.log("large selected", largeText);

// var toggleTheme = function () {

// }








// This function should determine which conversion should
// happen based on which radio button is selected.
// function determineConverter (clickEvent) {
//   if(fahrenheitRadioButton.checked){
//     toFahrenheit();
//   }
//   if(celsiusRadioButton.checked){
//     toCelsius();
//   }
//   console.log("event", clickEvent);
// }

// // To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
// function toFahrenheit () {
//   var convertedToFahrenheit;
//     convertedToFahrenheit = ((input.value*1.8)+32);
//     console.log("convertedToFahrenheit", convertedToFahrenheit);
// }