console.log('is odd started')
const isEven = require('./is-even').isNumberEven;
const isOdd = (num) => {
    return !isEven(num);
}

module.exports = isOdd;