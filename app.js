//
//
// // The questions in the guessing game must require a mix of yes/no answers,
//  // and user input must accept either y/n or yes/no responses, with either .toUpperCase()
//  // or .toLowerCase() used to validate the user input and accommodate users entering all-caps
//  // Y/N or YES/NO answers, too.
'use strict';
//
// alert('All questions are yes or no. Please respond either with Yes/Y or No/N');
//
// // if (condition is ture)  {
// // do something;
// //}else{
// //do this other thing;
// // and maybe yet another thing
// //
//
//
// function answer1 (){
//   var response1 = prompt('Is Darcy allergic to cats?').toLowerCase();
//
//   if (response1 === 'yes' || response1 === 'y') {
//     alert('Correct!');
//   }else if (response1 === 'no' || response1 === 'n'){
//     alert('Sorry to inform you, but Darcy is most definitely allergic.');
//   }else{
//     alert('You fail to understand yes/no quesions so that is as good as a hill of beans during a tornado. YOU LOSE!');
//   }
//   console.log('Response1 = Yes, she is allergic to cats.');
// }
// answer1();
//
// function answer2 (){
//   var response2 = prompt('Is Darcy a millenial?').toLowerCase();
//
//   if (response2 === 'yes' || response2 === 'y') {
//     alert('Correct!');
//     console.log('Oh boy!');
//
//   }else if (response2 === 'no' || response2 === 'n'){
//     alert('Sorry she\'s not a baby boomer.');
//   }else{
//     alert('Try answering with either a Yes or No.');
//   }
// }
// answer2();
//
// function answer3() {
//   var response3 = prompt('Was she born in the land of Microsoft?').toLowerCase();
//
//   if (response3 === 'yes' || response3 === 'y') {
//     alert('Alright!');
//     console.log('We have a live one here!');
//   }
//   else if (response3 === 'no' || response3 === 'n'){
//     alert('Sorry, please try again.');
//   }
//   else{
//     alert('Try answering with either a Yes or No.');
//   }
// }
// answer3();
//
// function answer4() {
//   var response4 = prompt('Can Darcy eat wheat?').toLowerCase();
//
//   if (response4 === 'no' || response4 === 'n') {
//     alert('Correct o mundo!');
//     console.log('Let\'s get the party started!');
//   }else if (response4 === 'yes' || response4 === 'y'){
//     alert('Are you out of your mind? Why not give her some broken glass to eat while you\'re at it?!');
//   }else{
//     alert('It\'s either a yes or a no. Nothing has changed here.');
//   }
// }
// answer4();
//
// function answer5(){
//   var response5 = prompt('Is she weird?').toLowerCase();
//
//   if (response5 === 'yes' || response5 === 'y') {
//     alert('Is she white? Is she promised to the night?');
//     console.log('Pixies = life!');
//   }else if (response5 === 'no' || response5 === 'n'){
//     alert('Have you met her?');
//   }else{
//     alert('You might want to consider making an eye appointment with your doctor.');
//   }
// }
// answer5();

function answer6(){
//incomplete logic and code for question 6
  for(var i = 0; i < 4; i++){
    var guess = prompt('How many letters are in my middle name?');
    if(guess === 0){
      alert('PERFECT!!');
      break;
    }
    if(guess > 0){
      alert('Too high!');
    }
  }

}
answer6();

  //for (i = 4; i > 5; i--);

  //Logic for question 7 will go below

// var response7 = prompt('What are my favorite foods?');
