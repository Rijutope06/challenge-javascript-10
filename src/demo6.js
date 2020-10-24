const faker = require("faker");

const numbersArray = [];

for (let index = 0; index < 1000; index++) {
  numbersArray.push(faker.random.number(1000));
}

const getMaxNumber = (numbersArray) => {
  return numbersArray.reduce((number, value) => {
    if (number < value) {
      number = value;
    }
    return number;
  });
};

const getMinNumber = (numbersArray) => {
  return numbersArray.reduce((number, value) => {
    if (number > value) {
      number = value
    }
    return number;
  });
};

const getAverage = (numbersArray) => {
  let total = numbersArray.reduce((number, value) => {
    return number = value
  });
  let average = total / numbersArray.length;
  return mean;
};

module.exports = { getMaxNumber, getMinNumber, getAverage };
