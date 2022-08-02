var elFormConvert = document.querySelector(".form-convert");
var elConvertDay = document.querySelector(".convert-day");
var elConvertMonth = document.querySelector(".convert-month");

var elResult = document.querySelector(".result-convert");

elFormConvert.addEventListener("submit", function(evt) {
  evt.preventDefault();

 var convertDay = elConvertDay.value;
 var convertMonth = elConvertMonth.value;

var resultConvert = convertDay + ", " + convertMonth;

elResult.textContent = resultConvert;

});