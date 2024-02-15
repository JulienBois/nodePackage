const axios = require('axios');
const { log } = require('console');
const readline = require('readline');

async function getRandomChuckNorrisJoke() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        const joke = response.data.value;
        log(joke);
        return joke ; // Added return statement
    } catch (error) {
        console.error('Error:', error.message);
    }
}
async function getRandomChuckNorrisJokeFromCategory(categorie) {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        const joke = response.data.value;
        console.log(joke);
        return joke; // Added return statement
    } catch (error) {
        console.error('Error:', error.message);
    }
}
// New code below the cursor

function askForJoke() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Do you want a joke? (yes/no) ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            getRandomChuckNorrisJoke();
        } else {
            console.log('Okay, no joke for you!');
        }
        rl.close();
    });
}

askForJoke();


module.exports = askForJoke;

