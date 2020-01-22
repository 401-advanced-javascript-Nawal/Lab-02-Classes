'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');

// Implement a car and motorcycle using a Constructor

console.log(' \n\n****************** Machines Constructors *******************');
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());


// Implement a car and motorcycle using a Class
const VehicleClass = require('./vehicle-class.js')

console.log(' \n\n ****************** Machines Classes ************************* ');
const mazdaClass = new VehicleClass.Car('Mazda 3');
console.log('Mazda Name :' , mazdaClass.name , '\n Mazda Drive() :' , mazdaClass.drive() , '\n Mazda Stop() :' , mazdaClass.stop());

const harleyClass = new VehicleClass.Motorcycle('Harley');
console.log('\n Harley Name :' , harleyClass.name , '\n Harley wheelie() :' , harleyClass.wheelie() , '\n Harley Stop() :' , harleyClass.stop());

// PART 2
const validator = require('../validator/validator.js');
