console.log("making sure that it works");
//arguement object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55,2));

// this keyword - no longer bound

const user = {
    name: 'Deborah',
    cities: ['Cibolo', 'San Antonio', 'Seattle'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '.');     
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 3, 4, 5, 6],
    mulitplyBy: 42,
    multiply() {
        return this.numbers.map((answer) => answer * this.mulitplyBy);
    }

};

console.log(multiplier.multiply());