// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {//parameter 1 is an array and 2 is a callback
  return callback(stringList[0])//returns array 1st item (index 0) using callback function
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * Q1. What is the difference between counter1 and counter2?
 * 
 * A1. Counter1 has a global scope while counter 2 has a function scope.
 * 
 * Q2. Which of the two uses a closure? How can you tell?
 * 
 * A2. Counter1 because there is another function nested inside of it. It has the parent child relationship.
 * 
 * Q3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * A3. Counter 1 would be preferable if it is needed where a score or amount is kept without being reset, like for a game. Counter2 would be good for a callback that would see how many times an item is in the index of an array.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
//make a variable to store value
  let score = Math.random() * 2;
  score = Math.round(score);
  return(score);
}
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, number){
  //make an empty Object
  let homeTeam = [];
  let awayTeam = [];
  const totalScore = {home: 0, away: 0};
  for (let i = 1; i<= number; i++){
    let home = 0;
    let away = 0;
    home = inning();
    away = inning();
   homeTeam.push(home); //push home into homeTEam array
   awayTeam.push(away);//push away into awayTeam array
  }
  let homeScore = homeTeam.reduce((totalHome, score )=> { //totalHOme is running total and score = running total
    return totalHome + score;
   }, 0);
  let awayScore = awayTeam.reduce((totalAway,score) => {
     return totalAway + score;
   }, 0);
   totalScore.home = homeScore;
   totalScore.away = awayScore;
   return totalScore;
  }
   console.log(finalScore(inning, 9));
 
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


