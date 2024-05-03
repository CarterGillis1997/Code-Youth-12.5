const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey

console.log(randomName)