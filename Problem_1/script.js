
function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.getType = function () {
    return this.type;
}


// Factory Function

function createCar(make, model, year) {
    const currYear = new Date().getFullYear();

    if (year > currYear) {
        throw new Error("Year cannot be set in the future.")
    }

    return {
        make, model, year,
        getCarInfo() {
            return `Year': ${this.year}, Make: ${this.make}, Model: ${this.model}`;

        },

        updateYear(newYear) {
            if (newYear <= currYear) {
                this.year = newYear;
            } else {
                throw new Error("Year cannot be set in the future.")
            }
        }
    };
}

//Constructor Function

function Car(make, model, year){
    const currYear = new Date().getFullYear();

    if ( year > currYear){
        throw new Error("Year cannot be set in the future.")
    }

    this.make = make;
    this.model = model;
    this.year = year;

    this.getCarInfo = function(){
        return `Year: ${this.year}, Make: ${this.make}, Model: ${this.model}`;
    };

    this.updateYear = function (newYear){
        if (newYear <= currentYear){
            this.year = newYear;
        }else{
            throw new Error("Year cannot be set in the future.");
        }     
    };
}


// ES6 Class

class CarClass{
    constructor(make, model, year){
        const currentYear = new Date().getFullYear();

        if ( year > currentYear){
            throw new Error("Year cannot be set in the future.")
        }

        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo(){
        return `Year: ${this.year}, Make: ${this.make}, Model: ${this.model}`;
    }


    //Static Method

    static createFromString(carString){
        const [make, model, year] = carString.split(', ');
        return new CarClass(make, model, parseInt(year, 10));
    }

    //getters and setters

    get carYear(){
        return this.year;
    }

    set carYear(newYear){
        const currentYear = new Date().getFullYear();
        if (newYear <= currentYear){
            this.year = newYear;

        } else{
            throw new Error("Year cannot be set in the future");
        }
    }
}

//Vehicle Management System 
class VehicleManagementSystem{
    constructor(){
        this.vehicles = []        
    }

    addVehicle(vehicle){
        this.vehicles.push(vehicle);
    }

    listVehicles(){
        return this.vehicles.map(vehicle => vehicle.getCarInfo()).join('\n');
    }
}


const system = new VehicleManagementSystem();

const car = new CarClass('Toyota', 'Corolla', 2020);

system.addVehicle(car);

console.log(system.listVehicles())