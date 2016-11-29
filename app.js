

// The questions in the guessing game must require a mix of yes/no answers,
 // and user input must accept either y/n or yes/no responses, with either .toUpperCase()
 // or .toLowerCase() used to validate the user input and accommodate users entering all-caps
 // Y/N or YES/NO answers, too.

var question1 = prompt('Is Darcy allergic to cats?').toLowerCase();

// if (condition is ture)  {
// do something;
//}else{
//do this other thing;
// and maybe yet another thing
//>



if (question1 === 'yes' || question1 === 'y') {
  alert('Correct!');
}else if (question1 === 'no' || question1 === 'n'){
  alert('Sorry to inform you, but Darcy is most definitely allergic.')
}else{
  alert('You fail to understand yes/no quesions so that is as good as a hill of beans during a tornado. YOU LOSE!')
}
