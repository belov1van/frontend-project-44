import readlineSync from 'readline-sync'
console.log('Welcome to the Brain Games!');
export function getUserName() {
  // Use the `question` function to prompt the user for input
  const name = readlineSync.question("What is your name? ")

  console.log("Hello, " + name + "!");
}



