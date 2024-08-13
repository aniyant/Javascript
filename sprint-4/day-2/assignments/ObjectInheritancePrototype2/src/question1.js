// ## Question 1:
Vehicle:
properties:
// manufacturer (String): The company that produced the vehicle.
// model (String): The specific model name of the vehicle.
// year (number): The manufacturing year of the vehicle.
// color (String): The color of the vehicle.
// licensePlate (String): The license plate number of the vehicle.
// mileage (number): The total mileage of the vehicle.
// fuelType (String): The type of fuel the vehicle uses (e.g., gasoline, diesel).
// Methods:
// start(): returns a string as {manufacturer} {model} engine started.
// stop(): returns a string as {manufacturer} {model} engine stopped.
// accelerate(speed): returns a string as {manufacturer} {model} is accelerating to {speed} mph.
// where speed is input
// brake(): returns a string as {manufacturer} {model} is applying brakes.

Vehicle.prototype.start = function(){
    return `${this.manufacturer} ${this.model} engine started.`
};
Vehicle.prototype.stop = function(){
    return `${this.manufacturer} ${this.model} engine stopped.`
};
Vehicle.prototype.accelerate = function(speed){
    return `${this.manufacturer} ${this.model} is accelerating to ${speed} mph.`
}
Vehicle.prototype.brake = function(){
    return `${this.manufacturer} ${this.model} is applying brakes.`
}
function Vehicle(manufacturer,model,year,color,licensePlate,mileage,fuelType) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.color = color;
    this.licensePlate = licensePlate;
    this.mileage = mileage;
    this.fuelType = fuelType;
}

// const genericVehicle = new Vehicle(
//   "Generic",
//   "Vehicle",
//   2023,
//   "Black",
//   "GENERIC001",
//   0,
//   "Unknown"
// );
// //properties
// console.log(genericVehicle.manufacturer); // Generic
// console.log(genericVehicle.model); // Vehicle
// console.log(genericVehicle.year); // 2023
// console.log(genericVehicle.color); // Black
// console.log(genericVehicle.licensePlate); // GENERIC001
// console.log(genericVehicle.mileage); // 0
// console.log(genericVehicle.fuelType); // Unknown

// //methods
// console.log(genericVehicle.start()); // Generic Vehicle engine started.
// console.log(genericVehicle.accelerate(30)); // Generic Vehicle is accelerating to 30 mph.
// console.log(genericVehicle.stop()); // Generic Vehicle engine stopped.

// **Car (inherits from Vehicle)**:
//     - **`Additional properties`**:
//         1. `numDoors` (number): The number of doors the car has.
//         2. `numSeats` (number): The number of seats available in the car.
//     - **`Additional methods`**:
//         1. `lock()`: **`returns`** a string as `{manufacturer} {model} doors locked.`
//         2. `unlock()`: **`returns`** a string as `{manufacturer} {model} doors unlocked.`
//         3. `adjustSeatPosition(position)`: **`returns`** a string as `{manufacturer} {model} seat position adjusted to {position}.`
//            - where **position** is input
//            - Adjusts the position of the seat in the car.
//         4. `playMusic()`: **`returns`** a string as `{manufacturer} {model} is playing music.`

Car.prototype.lock = function(){
    return `${this.manufacturer} ${this.model} doors locked.`
}
Car.prototype.unlock = function(){
    return `${this.manufacturer} ${this.model} doors unlocked.`
}
Car.prototype.adjustSeatPosition = function(position){
    return `${this.manufacturer} ${this.model} seat position adjusted to ${position}.`
}
Car.prototype.playMusic = function(){
    return `${this.manufacturer} ${this.model} is playing music.`
}
function Car(manufacturer,model,year,color,licensePlate,mileage,fuelType,numDoors,numSeats) {
    Vehicle.call(this,manufacturer,model,year,color,licensePlate,mileage,fuelType);
    this.numDoors = numDoors;
    this.numSeats = numSeats;
}
Object.setPrototypeOf(Car.prototype,Vehicle.prototype);

// const hondaCivic = new Car(
//   "Honda",
//   "Civic",
//   2023,
//   "Blue",
//   "HONDA001",
//   0,
//   "Gasoline",
//   4,
//   5
// );

// //properties
// console.log(hondaCivic.manufacturer); // Honda
// console.log(hondaCivic.model); //Civic
// console.log(hondaCivic.year); // 2023
// console.log(hondaCivic.color); // Blue
// console.log(hondaCivic.licensePlate); // HONDA001
// console.log(hondaCivic.mileage); // 0
// console.log(hondaCivic.fuelType); // Gasoline
// console.log(hondaCivic.numDoors); // 4
// console.log(hondaCivic.numSeats); // 5

// //methods
// console.log(hondaCivic.lock()); //Honda Civic doors locked.
// console.log(hondaCivic.adjustSeatPosition("Driver")); //Honda Civic seat position adjusted to Driver.
// console.log(hondaCivic.playMusic()); //Honda Civic is playing music.
// console.log(hondaCivic.unlock()); //Honda Civic doors unlocked.

// **ElectricCar (inherits from Car)**:
//     - **`Additional properties`**:
//         1. `batteryCapacity` (number): The capacity of the electric car's battery.
//         2. `chargeLevel` (number): The current level of charge in the battery. (The default value should be 100);
//         3. The fuelType should be "Electric" by default.
//     - **`Additional methods`**:
//         1. `charge()`: **`returns`** a string as `{manufacturer} {model} is charging.`
//         2. `checkChargeLevel()`: **`returns`** a string as `{manufacturer} {model} has {chargeLevel}% charge.`
//         3. `driveElectric()`: **`returns`** a string as `${manufacturer} ${model} is driving using electric power.`

ElectricCar.prototype.charge = function(){
    return `${this.manufacturer} ${this.model} is charging.`;
}
ElectricCar.prototype.checkChargeLevel = function(){
    return `${this.manufacturer} ${this.model} has ${this.chargeLevel}% charge.`
}
ElectricCar.prototype.driveElectric = function(){
    return `${this.manufacturer} ${this.model} is driving using electric power.`
}

function ElectricCar(manufacturer,model,year,color,licensePlate,mileage,numDoors,numSeats,batteryCapacity,chargeLevel=100,) {
    Car.call(this,manufacturer,model,year,color,licensePlate,mileage,"Electric",numDoors,numSeats);
    this.batteryCapacity = batteryCapacity;
    this.chargeLevel = chargeLevel;
}

Object.setPrototypeOf(ElectricCar.prototype,Car.prototype);

// const teslaModelS = new ElectricCar(
//   "Tesla",
//   "Model S",
//   2023,
//   "Red",
//   "TESLA001",
//   0,
//   4,
//   5,
//   85
// );
// //properties
// console.log(teslaModelS.manufacturer); // Tesla
// console.log(teslaModelS.model); //Model S
// console.log(teslaModelS.year); // 2023
// console.log(teslaModelS.color); //Red
// console.log(teslaModelS.licensePlate); // TESLA001
// console.log(teslaModelS.mileage); // 0
// console.log(teslaModelS.fuelType); // Electric
// console.log(teslaModelS.numDoors); // 4
// console.log(teslaModelS.numSeats); // 5
// console.log(teslaModelS.batteryCapacity); // 85
// console.log(teslaModelS.chargeLevel); // 100


// //methods
// console.log(teslaModelS.start()); // Tesla Model S engine started.
// console.log(teslaModelS.accelerate(60)); // Tesla Model S is accelerating to 60 mph.
// console.log(teslaModelS.driveElectric()); // Tesla Model S is driving using electric power.
// console.log(teslaModelS.checkChargeLevel()); // Tesla Model S has 100% charge.
// console.log(teslaModelS.stop()); // Tesla Model S engine stopped.
// console.log(teslaModelS.charge()); // Tesla Model S is charging.

// don't remoove below export statement
export { Vehicle, Car, ElectricCar };
