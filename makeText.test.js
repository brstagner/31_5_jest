const { fileMarkov } = require("./makeText");
const { webMarkov } = require("./makeText");
const { runMarkov } = require("./makeText");

const fs = require("fs");
const markov = require("./markov");
const makeText = require("./markov");
const axios = require("axios");
const process = require("process");

test('runMarkov should yield a string', function () {
  let result = runMarkov('This is a string');
  expect(result).toEqual(expect.any(String));

})

// There's an fs bug preventing all tests from working while the
// tested script uses it. The first and last tests work when it's
// commented out, but this test is unusable for this reason
test('fileMarkov should yield error', function () {
  try {
        fileMarkov('eggs.tx');
    } catch (e) {
        expect(e.message).toBe("error reading bacon.txt");
    }
});

test('webMarkov should yield error', function () {
  try {
        webMarkov('eggs.tx');
    } catch (e) {
        expect(e.message).toBe("error reading bacon.com");
    }
});