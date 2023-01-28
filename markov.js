/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map();

    for (let i = 0; i < this.words.length; i++){
      let word = this.words[i];
      let next = this.words[i + 1] || null;

      if (chains.has(word)) {
        chains.get(word).push(next);
      }
      else {
        chains.set(word, [next]);
      }
    }
    return this.chains = chains;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let chains = this.makeChains();
    let chainsArray = Array.from(chains.keys());

    let word = chainsArray[Math.floor(Math.random() * chainsArray.length)];
    let output = '';

    for (let i = 0; i < numWords; i++){
      output += ` ${word}`;
      if (typeof (chains.get(word)) === 'string') {
        word = chains.get(word);
        if (word === null) {
          word = chainsArray[Math.floor(Math.random() * chainsArray.length)]
        }
      }
      else if (word === null) {
        word = chainsArray[Math.floor(Math.random() * chainsArray.length)]
      }
      else {
        word = chains.get(word)[Math.floor(Math.random() * chains.get(word).length)];
        if (word === null) {
          word = chainsArray[Math.floor(Math.random() * chainsArray.length)]
        }
      }
    }
    return output;
  }
}

module.exports = {
  MarkovMachine
};