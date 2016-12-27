'use strict';
  var userName = prompt('Hello there! What\'s your name?');

  alert('Hello there '+ userName + ', welcome to the random guessing game. The first 5 questions are yes or no. Please respond either with Yes/Y or No/N. After that the 6th question asks for a number and the last question is about fruit. Good luck!');

  var answerTally = 0;

  function answer1 (){
    var response1 = prompt('Is Darcy allergic to cats?').toLowerCase();

    if (response1 === 'yes' || response1 === 'y') {
      alert('Correct!');
      answerTally += 1;
    }else if (response1 === 'no' || response1 === 'n'){
      alert('Sorry to inform you, but Darcy is most definitely allergic.');
    }else{
      alert('You fail to understand yes/no quesions so that is as good as a hill of beans during a tornado. YOU LOSE!');
    }

  }
  answer1();

  function answer2 (){
    var response2 = prompt('Is Darcy a millenial?').toLowerCase();

    if (response2 === 'yes' || response2 === 'y') {
      alert('Correct!');
      answerTally += 1;


    }else if (response2 === 'no' || response2 === 'n'){
      alert('Sorry she\'s not a baby boomer.');
    }else{
      alert('Try answering with either a Yes or No.');
    }
  }
  answer2();

  function answer3() {
    var response3 = prompt('Was she born in the land of Microsoft?').toLowerCase();

    if (response3 === 'yes' || response3 === 'y') {
      alert('Alright!');
      answerTally +=1;
    }
    else if (response3 === 'no' || response3 === 'n'){
    alert('Sorry, please try again.');
  }
  else{
    alert('Try answering with either a Yes or No.');
  }
}
answer3();

function answer4() {
  var response4 = prompt('Can Darcy eat wheat?').toLowerCase();

  if (response4 === 'no' || response4 === 'n') {
    alert('Correct o mundo!');
        answerTally += 1;
  }else if (response4 === 'yes' || response4 === 'y'){
    alert('Are you out of your mind? Why not give her some broken glass to eat while you\'re at it?!');
  }else{
    alert('It\'s either a yes or a no. Nothing has changed here.');
  }
}
  answer4();

  function answer5(){
    var response5 = prompt('Is she weird?').toLowerCase();

    if (response5 === 'yes' || response5 === 'y') {
      alert('Is she white? Is she promised to the night?');
      answerTally += 1;
    }else if (response5 === 'no' || response5 === 'n'){
      alert('Have you met her?');
    }else{
      alert('You might want to consider making an eye appointment with your doctor.');
    }
  }
  answer5();


function answer6() {
  var hats = 3;

  for (var i = 0; i < 4; i++) {
    var response6 = parseInt(prompt('How many hats do I own?'));
    if (response6 < hats) {
      alert('Too low! Please try again.');
    } else if (response6 > hats) {
      alert('Too high!');
    }else if (isNaN (hats)) {
      alert('Stop playing around! Please enter in a number.');
    } else{
      alert('Contragulations! You are correct.');
      answerTally += 1;
      break;
    }
  }
}
answer6();

 function question7(){
  var favFruit = ['cantaloupe', 'watermelon' , 'strawberries' , 'mangos' , 'lychees', 'tomatoes' , 'apples', 'grapes', 'raspberries', 'grapefruit'];
  var counter = 0;
  var favFruitGuess = false;
  var favFruitAnswer;

  while (counter < 6 && favFruitGuess === false) {

    var guess = prompt('Can you name any of my favorite fruits?').toLowerCase();

    for (var i = 0; i < favFruit.length; i++) {
      if (guess === favFruit[i]) {
        alert('You are right! I like to eat ' + favFruit);
        answerTally += 1;
        counter = 6;
        favFruitGuess = true;
        favFruitAnswer = favFruit[i];
      }
    }
    if (guess !== favFruitAnswer) {
      alert('Sorry, that is not correct!');
      counter += 1;
    }
    if (counter > 5 && favFruitGuess === false) {
      alert('Sorry, you ran out of guesses. My favorite foods are ' + favFruit);
    }
  }
}
question7();


  function totalRight() {
    if(answerTally >= 7){
      alert('Hot Diggity! ' + userName + ' got ' + answerTally + ' out of 7 correct! You are the 1%!! Buy Darcy a drink, why don\'t \'cha?!');
    }else if(answerTally >=5){
      alert('Not bad, ' + userName +'. You scored' + answerTally+ ' out of 7. Better luck next time!');
    }else{
      alert('Really?! ' + username +', you only scored ' + answerTally + ' out of 7? Have you ever even met Darcy?!');
    }

  }

  totalRight();
