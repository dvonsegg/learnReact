// console.log('Testing Arrow functions');

// const square = function (x) {
//     return x * x;
// };

//   //  const squareArrow = (x) => {
//   //      return x * x;
//   //  };

// const squareArrow = (x) => x * x;


// console.log(square(8));
// console.log(squareArrow(9));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Mike Brown'));

const getFirstNameAgain = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameAgain('Dave Smith'));