const axios = require('axios');

async function getRandomChuckNorrisJoke() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        const joke = response.data.value;
        console.log(joke);
        return joke; // Added return statement
    } catch (error) {
        console.error('Error:', error.message);
    }
}

module.exports = getRandomChuckNorrisJoke;
