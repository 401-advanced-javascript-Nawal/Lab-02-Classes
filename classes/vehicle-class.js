'use strict';

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


class Car extends Vehicle {

    constructor(name, wheels) {

        // To be able to use the Vehicle constructor we use SUPER either for methods 
        super(name,4);
    }

    super.drive()

} // end of Car Class 

module.exports = Car;