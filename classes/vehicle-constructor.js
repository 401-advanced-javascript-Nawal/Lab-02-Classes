'use strict';

// Vehicle Constructor
const Vehicle = function( name, wheels ) {

  this.name = name;
  this.wheels = wheels;

};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};
/************************************** End Of Vehicle Constructor **************************************/

// Car Constructor 4 Wheels
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

// Car using the Vehicle's methods 
Car.prototype = new Vehicle();
/************************************** End Of Car Constructor *******************************************/

// Motorcycle Constructor 2 Wheels
const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

// Motorcycle using the Vehicle's methods 
Motorcycle.prototype = new Vehicle();

// Method for Motorcycle constructor only
Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};
/************************************** End Of Motorcycle Constructor **************************************/


// To be able to use the below constructors outside of this file 
module.exports = {Car, Motorcycle};