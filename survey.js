const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ansArr = [];
function survey (n = 0, questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"]) {
  if (n <= questions.length - 1) {
    rl.question( `${questions[n]}? ` , (answer) => {
      ansArr.push(answer);
      survey(n + 1, questions);
    });
  } else {
    rl.close();
    console.log('');
    console.log(`${ansArr[0]} loves listening to ${ansArr[2]} while ${ansArr[1]}, devouring ${ansArr[4]} for ${ansArr[3]}, prefers ${ansArr[5]} over any other sport, and is amazing at ${ansArr[6]}.`);
    console.log('');
  }
}
survey();