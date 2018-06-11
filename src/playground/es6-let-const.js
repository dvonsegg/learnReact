var nameVar = 'Anderew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Deborah';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var PetName = 'hal';
    return PetName;
}

console.log(getPetName());

//block scoping

var fullName = 'Deborah von Seggern';
if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);