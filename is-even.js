console.log('is even started')
const isEven = function(num) {
    const div = num % 2 
    return div === 0;
}

const isOdd = function(num) {
    const div = num % 2 
    return div !== 0;
}

const exportedPart = {
    isNumberEven: isEven,
    isOdd: isOdd
};

module.exports = exportedPart;