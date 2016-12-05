//
//
// // The questions in the guessing game must require a mix of yes/no answers,
//  // and user input must accept either y/n or yes/no responses, with either .toUpperCase()
//  // or .toLowerCase() used to validate the user input and accommodate users entering all-caps
//  // Y/N or YES/NO answers, too.
// 'use strict';
  var userName = prompt('Hello there! What\'s your name?');
  //
  alert('Hello there '+ userName + ', welcome to the random guessing game. The first 5 questions are yes or no. Please respond either with Yes/Y or No/N. After that the 6th question asks for a number and the last question is about movies. Good luck!');

  var answerTally = 0;
// //
// // // if (condition is ture)  {
// // // do something;
// // //}else{
// // //do this other thing;
// // // and maybe yet another thing
// // ////
// //
  function answer1 (){
    var response1 = prompt('Is Darcy allergic to cats?').toLowerCase();

    if (response1 === 'yes' || response1 === 'y') {
      alert('Correct!');
    }else if (response1 === 'no' || response1 === 'n'){
      alert('Sorry to inform you, but Darcy is most definitely allergic.');
    }else{
      alert('You fail to understand yes/no quesions so that is as good as a hill of beans during a tornado. YOU LOSE!');
    }
    console.log('Response1 = Yes, she is allergic to cats.');
  }
  answer1();
//
  function answer2 (){
    var response2 = prompt('Is Darcy a millenial?').toLowerCase();
//
    if (response2 === 'yes' || response2 === 'y') {
      alert('Correct!');
      console.log('Oh boy!');

    }else if (response2 === 'no' || response2 === 'n'){
      alert('Sorry she\'s not a baby boomer.');
    }else{
      alert('Try answering with either a Yes or No.');
    }
  }
  answer2();
//
  function answer3() {
    var response3 = prompt('Was she born in the land of Microsoft?').toLowerCase();

    if (response3 === 'yes' || response3 === 'y') {
      alert('Alright!');
      answerTally +=1;
      console.log('We have a live one here!');
    }
    else if (response3 === 'no' || response3 === 'n'){
    alert('Sorry, please try again.');
  }
  else{
    alert('Try answering with either a Yes or No.');
  }
}
answer3();
//
function answer4() {
  var response4 = prompt('Can Darcy eat wheat?').toLowerCase();

  if (response4 === 'no' || response4 === 'n') {
    alert('Correct o mundo!');
        answerTally += 1;
    console.log('Let\'s get the party started!');
  }else if (response4 === 'yes' || response4 === 'y'){
    alert('Are you out of your mind? Why not give her some broken glass to eat while you\'re at it?!');
  }else{
    alert('It\'s either a yes or a no. Nothing has changed here.');
  }
}
  answer4();
//
  function answer5(){
    var response5 = prompt('Is she weird?').toLowerCase();

    if (response5 === 'yes' || response5 === 'y') {
      alert('Is she white? Is she promised to the night?');
      console.log('Pixies = life!');
      answerTally += 1;
    }else if (response5 === 'no' || response5 === 'n'){
      alert('Have you met her?');
    }else{
      alert('You might want to consider making an eye appointment with your doctor.');
    }
  }
  answer5();
//

function answer6() {
  var hats = 3;

  for (var i = 0; i < 4; i++){
    var response6 = parseInt(prompt('How many hats do I own?'));
    if (response6 === hats) {
      alert('Contragulations! You have guessed correctly!');
      console.log('Way to get ths party started!');
    answerTally += 1;
  } else if (response6 > hats) {
    alert('Too high!');
  } else if (response6 < hats) {
    alert('Too low!');
  } else {
    alert('Stop playing around. Enter in a number');
    break;
  }
}
  console.log('Keep warm this winter!');
}

  answer6();

  // for (i = 4; i > 5; i--);
  //
  // function question7 () {
  // var tries = 0;
  // var favMovies = ['The Crow', 'Pulp Fiction' , 'Kill Bill' , 'Inglorious Basterds', 'Amadeus', 'Fiddler on the Roof' ,'Blade Runner' , 'Whale Rider' , 'Tracks' , 'Interview with the Vampire'];
  // var favMoviesCorrect = false;
  // var favMoviesAnswer;
  //
  // while (tries < 6 && favMoviesCorrect === false) {
  //   var favMoviesGuess = prompt('Can you guess any of my favorite movies?').toLowerCase();
  //
  //   for (var i = 0; i < favMovies.length; i++) {
  //   if (favMoviesguess === favMovies[i]) {
  //     alert('Amazing! You are correct. My favorite movies are ' + favMovies);
  //     answerTally +=1;
  //     tries = 6;
  //     favMoviesCorrect = true;
  //     favMoviesGuess[i];
  //   }
  // }else if (favMoviesGuess !== favMoviesAnswer) {
  //     alert('Sorry! Here's a hint- she's a Tarantino fan.');
  //     tries += 1;
  //   }else if (tries > 5 && favMoviesCorrect === false) {
  //     alert('Sorry! You either have horrible taste in movies that you were projecting on me or you are not familiar with any Tarantino films. Here are my favorite Movies ' + favMovies);
  //     }
  //   }
  //
  //
  // }

  // question7()
  //
  //
  function totalRight() {
    if(answerTally >= 7){
      alert('Hot Diggity!' + userName + 'got ' + answerTally + ' out of 7 correct! You are the 1%! Buy Darcy a drink, why don\'t \'cha?!');
    }else if(answerTally >=5){
      alert('Not bad, ' + userName +'. You scored' + answerTally+ ' out of 7. Better luck next time!');
    }else{
      alert('Really?!' + username +', you only scored ' + answerTally + 'out of 7? Have you ever even met Darcy?!');
    }
    console.log('This is the end. Da dee dum...')
  }

  totalRight()

  //
