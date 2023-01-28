/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

function runMarkov (text) {
    let mm = new markov.MarkovMachine(text);
    // console.log(mm.makeText());
    return mm.makeText();
}

runMarkov('the cat in the hat is the cat in the hat');

function fileMarkov (path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`error reading ${path}`, err)
            process.kill(1);
        }
        else {
            runMarkov(data);
        }
    })
}

async function webMarkov (url) {
    try {
        let res = await axios.get(url);
        runMarkov(res.data);
    }
    catch {
        console.log(`error reading ${url}`);
    };
};

if (process.argv[2] === 'url') {
    webMarkov(process.argv[3]);
}
else {
    fileMarkov(process.argv[3]);
};

module.exports = {
    runMarkov,
    webMarkov
};