const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let a = expr.split("**********");
  let nameWord = a.map(function (decode) {
    const b = decode.length / 10;
    let messageAppeal = "";

    for (let index = 0; index < b; index++) {
      let nameWord = "";
      for (let x = index * 10; x < index * 10 + 10; x += 2) {
        if (decode[x] + decode[x + 1] === "10") {
          nameWord += ".";
        } else if (decode[x] + decode[x + 1] === "11") {
          nameWord += "-";
        }
      }

      messageAppeal += MORSE_TABLE[nameWord];
    }
    return messageAppeal;
  });

  let finishResult = nameWord.join(" ");
  return finishResult;
}

module.exports = {
  decode,
};
