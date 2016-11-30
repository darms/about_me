

// The questions in the guessing game must require a mix of yes/no answers,
 // and user input must accept either y/n or yes/no responses, with either .toUpperCase()
 // or .toLowerCase() used to validate the user input and accommodate users entering all-caps
 // Y/N or YES/NO answers, too.

var response1 = prompt('Is Darcy allergic to cats?').toLowerCase();

// if (condition is ture)  {
// do something;
//}else{
//do this other thing;
// and maybe yet another thing
//

if (response1 === 'yes' || response1 === 'y') {
  alert('Correct!');
}else if (response1 === 'no' || response1 === 'n'){
  alert('Sorry to inform you, but Darcy is most definitely allergic.')
}else{
  alert('You fail to understand yes/no quesions so that is as good as a hill of beans during a tornado. YOU LOSE!')
}

var response2 = prompt('Is Darcy a millenial?').toLowerCase();

if (response2 === 'yes' || response2 === 'y') {
  alert('Correct!');
}else if (response2 === 'no' || response2 === 'n'){
  alert('Sorry she\'s not a baby boomer.')
}else{
  alert('Try answering with either a Yes or No.')
}

var response3 = prompt('Was she born in the land of Microsoft?').toLowerCase();

if (response3 === 'yes' || response3 === 'y') {
  alert('Alright!');
}else if (response3 === 'no' || response3 === 'n'){
  alert('Sorry, please try again.')
}else{
  alert('Try answering with either a Yes or No.')
}

var response4 = prompt('Can Darcy eat wheat?').toLowerCase();

if (response4 === 'no' || resonse4 === "n") {
  alert('Correct-a-mundo!');
}else if (response4 === 'yes' || response4 === 'y'){
  alert('Are you out of your mind? Why not give her some broken glass to eat while you\'re at it?!')
}else{
  alert('It\'s either a yes or a no. Nothing has changed here.')
}
