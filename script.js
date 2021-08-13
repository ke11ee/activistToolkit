// fact list//
var factList = [
  " Lower class families are more likely to be financially illiterate than the upper class.", /*1*/
  "80% of Americans are in debt in some way, shape, or form", /*2*/
  "78% of Adults are living paycheck to paycheck", /*3*/
  "3 in 5 adults don't keep a budget", /*4*/
  "Only 24% of Millennials demonstrate basic financial literacy", /*5*/
  "Only 17% of students were required to take at least one semester of personal finance in high school"]; /*6*/



// variables//
var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;
myButton:addEventListener("click", displayFact);



function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
