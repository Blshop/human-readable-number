const numbers = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
};

module.exports = function toReadable(number) {
  const result = [];
  let strNumber = number.toString();
  if (number === 0) return 'zero';
  if (strNumber.length === 3) {
    result.push(`${numbers[strNumber[0]]} hundred`);
    strNumber = strNumber.slice(1);
  }
  if (strNumber < 20 && parseInt(strNumber, 10) !== 0) {
    result.push(numbers[parseInt(strNumber, 10)]);
  } else if (parseInt(strNumber, 10) !== 0) {
    result.push(numbers[parseInt(strNumber[0], 10) * 10]);
    if (parseInt(strNumber[1], 10) !== 0)
      result.push(numbers[parseInt(strNumber[1], 10)]);
  }
  return result.join(' ');
};
