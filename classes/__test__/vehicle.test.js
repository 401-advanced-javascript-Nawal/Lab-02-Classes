'use strict';

const VehicleConstructor = require('../vehicle-constructor.js');

let types = ['Constructor'];

describe('Vehicles Constructor', () => {

  describe('Car Constructor', () => {
    
    function getCar(type) {
      switch(type) {
      case 'Constructor':
        return new VehicleConstructor.Car('foo');
      default:
        return {};
      }
    }
    
    types.forEach( type => {
      
      let car = getCar(type);

      it(`${type} (Car) has 4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });

      it(`${type} (Car) cannot do a wheelie`, () => {
        expect(car.wheelie).toBeUndefined();
      }); 
    });

  });

  describe(`Motorcycle Constructor `, () => {

    function getMotorcycle(type) {
      switch(type) {
      case 'Constructor':
        return new VehicleConstructor.Motorcycle('foo');
      default:
        return {};
      }
    }

    types.forEach( type => {

      let motorcycle = getMotorcycle(type);

      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle.drive()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });
      
    });

  });

}); // End of Vehicle Constructor 

/****************************************** Vehicle Class **********************************************************/
const VehicleClass = require('../vehicle-class.js');

let typesClass = ['Class'];

describe('Vehicles Class', () => {

  describe('Car Class', () => {

    function getCarClass(type) {
      switch(type) {
      case 'Class':
        return new VehicleClass.Car('foo');
      default:
        return {};
      }
    } // end of getCarClass function 

    typesClass.forEach( type => {
      
      let car = getCarClass(type);

      it(`${type} (Car) has 4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });

    }); // end of foreach 


  }); // End of Car Class testing 


  describe(`Motorcycle Class `, () => {

    function getMotorcycleClass(type) {
      switch(type) {
      case 'Class':
        return new VehicleClass.Motorcycle('foo');
      default:
        return {};
      }
    } // end of getMotorcycleClass function 

    typesClass.forEach( type => {
      
      let motorcycle = getMotorcycleClass(type);

      it(`${type} (Motorcycle) has 4 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can drive`, () => {
        expect(motorcycle.drive()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) can do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });

    }); // end of foreach 

  }); // End of Motorcycle Class testing 

});// End of Vehicle Class 
