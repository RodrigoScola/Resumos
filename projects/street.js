class ShiftCipher {
  constructor(count) {
    this._count = count;
  }
  encrypt(string) {
    let word = string.toLowerCase().split("");
    for (let letter in word) {
      if (!word[letter].match(/[a-z]/)) {
        continue;
      }
      word[letter] = word[letter].charCodeAt(0) + this._count;
      if (word[letter] > 122) {
        word[letter] = 97 + (word[letter] - 123);
      }
      word[letter] = String.fromCharCode(word[letter]);
    }
    return word.join("").toUpperCase();
  }
  decrypt(string) {
    let word = string.toLowerCase().split("");
    for (let letter in word) {
      if (!word[letter].match(/[a-z]/)) {
        continue;
      }
      word[letter] = word[letter].charCodeAt(0) - this.count;
      if (word[letter] < 97) {
        word[letter] = 123 - (97 - word[letter]);
      }
      word[letter] = String.fromCharCode(word[letter]);
    }

    return word.join("");
  }
}
const s = new ShiftCipher(1);

console.log(s.decrypt("a"));
