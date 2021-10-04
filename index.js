const isDivisibleBy = (input, divisor) => input % divisor === 0

const isLeapYear = (value) =>  isDivisibleBy(value, 400) || (isDivisibleBy(value, 4) && !isDivisibleBy(value, 100))

exports.isLeapYear = isLeapYear;