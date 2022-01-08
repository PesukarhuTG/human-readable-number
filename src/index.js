module.exports = function toReadable(number) {

  let simpleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let str = number.toString();

  if (number > 0 && number < 21 || number === 0) {
    return simpleDigits[number];
  }

  if (number > 20 && number < 100) {
    if (+str[1] === 0) {
      return `${dozens[+str[0]]}`;
    } else {
      return `${dozens[+str[0]]} ${simpleDigits[+str[1]]}`;
    }
  }

  if (number > 99 && number < 1000) {
    if (+str[1] === 0 && +str[2] === 0) {
      return `${simpleDigits[+str[0]]} hundred`;
    } else if (+str[1] === 0) {
      return `${simpleDigits[+str[0]]} hundred ${simpleDigits[+str[2]]}`;
    } else if (+str[1] === 1) {
      return `${simpleDigits[+str[0]]} hundred ${simpleDigits[+str[1] + str[2]]}`;
    } else if (+str[2] === 0) {
      return `${simpleDigits[+str[0]]} hundred ${dozens[+str[1]]}`;
    } else {
      return `${simpleDigits[+str[0]]} hundred ${dozens[+str[1]]} ${simpleDigits[+str[2]]}`;
    }
  }

}
