'use strict';

// Vehicle Class 
class Vehicle {

    constructor(name, wheels) {

        this.name = name;
        this.wheels = wheels;
    }

    drive() 
    {
        return 'Moving Forward';
    }

    stop() 
    {
        return 'Stopping';
    }
} // end of Vehicle Class 


// Car Class 
class Car extends Vehicle {

    constructor(name, wheels) {

        // To be able to use the Vehicle constructor we use SUPER either for methods 
        super(name, 4);
    }

    // Call car drive when Vehicle run
    run() 
    {
        super.drive();
    }

    run() 
    {
        super.stop();
    }
} // end of Car Class 


// Motorcycle Class 
class Motorcycle extends Vehicle {

    constructor(name, wheels) {
        // To be able to use the Vehicle constructor we use SUPER either for methods 
        super(name, 2);
    }

    // Call Motorcycle drive when Vehicle run
    run() 
    {
        super.drive();
    }

    run() 
    {
        super.stop();
    }

    wheelie() 
    {
        return 'Wheee!';
    }
} // end of Motorcycle Class 


module.exports = { Car, Motorcycle };