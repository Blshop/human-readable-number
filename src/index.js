module.exports = function toReadable (number) {
    let result = []
    number = number.toString()
    if (number.length == 3){
        result.push(numbers[number[0]]+' hundred')
        number = number.replace(number[0],'')
    }
    if(number == '00'){
    }
    else if(number<20 || number[1]=='0'){
        result.push(numbers[parseInt(number)])
    }
    else if(number == 0){
        result.push(numbers[0])
    }
    else{
        result.push(numbers[number[0]*10] + ' ' + numbers[number[1]])
    }
    return result.join(' ')
}

let numbers = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
    '100': 'hundred',
}
