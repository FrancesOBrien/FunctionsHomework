// //Prompt 1: I want you to write a function that has a dog age, the function is for the dogs birthday and will increase the dogs age by 1.
// Prompt 2: I want you to make an array of dog names with 5 dogs. The dogs are at doggy daycare. The last dog in the array got picked up and three new dogs arrived
// Prompt 3: I want you to make a user object with 5 properties (name, age, email, friends, and hobbies). ONE function will add 1 to the age, ANOTHER FUNCTION will add a new friend.

// let dog = {
//     name: "Teacake",
//     age: 4,
//     birthdate: "06-12-2018"

// let dog = {
//     name : "fido",
//     birthdate : new Date(2022, 9, 11),
//     color: 'brown',
//     breed: "German Sheppard",
//     age : 2
//     }
// const isItMyDogsBirthday = (dog) => {
//     let currentDate = new Date();
//     birthdate = dog.birthdate;
//     if(currentDate.getMonth() === birthdate.getMonth() && currentDate.getDay() === birthdate.getDay()) {
//          dog.age++;
//     }
// }
// console.log(dog.age);
// isItMyDogsBirthday(dog);
// console.log(dog.age);
// }
// function trackDogAge(){
//     dog.age = dog.age + 1
//     console.log(dog.age)
//     console.log(dog)
// }
// trackDogAge();

// let dayCareRoster = ["Oscar", "Teacake", "Lola", "Heywood", "Mitzy"];
//     dayCareRoster.pop()
//     dayCareRoster.push("Jaeger", "Brulee", "Killian")
//     console.log(dayCareRoster)


// let user = {
//     name: "Teacake",
//     age: 4,
//     email: "teacake@gmail.com",
//     friends: ["Oscar", "Mitzy", "Lana"],
//     hobbies: ["Kick Fetch", "Cuddling", "Basking"],
// }

// function addAYear(){
//     user.age = user.age + 1
//     console.log(user)
// }
// addAYear() //call this every birthday?

// function addABuddy(){
//     user.friends.push("Jaeger")
//     console.log(user)
// }
// addABuddy()

// let studentGrade = 80
// const grade = (parameter) = {
//     studentGrade = parameter
// }
// grade(80);
// console.log('Grade ', studentGrade)
// grade(55);
// grade(99);

// let kindergartenClass = ["Maddalena", "Han", "Arissa", "Darren", "Malu"];

// const addStudent(name) => {
//     kindergartenClass.push(name)
// }
//     addStudent: ("Mika");
//     addStudent: ("Jorge");
//     addStudent: ("Locke")
// console.log(kindergartenClass)
// return addStudent()

// let presentDogs = ["Oscar", "Teacake", "Lola", "Heywood", "Mitzy"];

// function addDogs(newDogs) {
//     let newDogs = ["Jaeger", "Brulee", "Hero"]
//     presentDogs.push(newDogs)
//     console.log(presentDogs)
// }
// return addDogs


//////////BEGIN DAY 2 NOTES!///////////
/we want to make a function that can add any student to the class

// let myClass = ["Frances", "Sol", "Ashunti"]

// const addStudentAndReturnClass = (newStudent) => {
//     myClass.push(newStudent);
//     return myClass
// }
// addStudentAndReturnClass("Eric")
// let returnedValue = addStudentAndReturnClass("Moses")
// console.log(returnedValue)

// const getInfo = () => {

//     let user = {
//         name: "Bruce",
//         email: "etc@gmail.com",
//         friendlist: ["Frances", "Disa"],
//     }

//     return user

// }

// let userInformation = getInfo()

// console.log(userInformation)

// const mogwai = {}

// mogwai.name = "Gizmo"
// mogwai.age = 4000
// mogwai.color = "brown"

// console.log(mogwai)

// const bourough = {
//     name: "The Bronx",
//     clout: "10/20",
// }
// console.log(bourough)

// const obj = {
//     salutation: 'hi',
//     count: 4
// }

// if (obj.salutation === 'hi') {
//     console.log('ok');
// }

// for (let i = 0; i < obj.count; i++) {
//     console.log(i)
// }

// const cohort = {
//     id: 'SEIR Flex Madeline',
//     students: ['Diana', 'Julio', 'Cory'],
//     instructors: ['Arthur', 'Nando', 'Teo', 'Sean'],
//     addStudent: function (name) {
//         name = name[0].toUpperCase() + name.substr(1).toLowerCase()
//         this.students.push(name);
//     },
//     pickRandomStudent: function() {
//         const rndIdx = Math.floor(Math.random() * this.students.length);
//         return this.students[rndIdx];
//     }
// };

// class Car {
//     // object properties are all inside the Car class
//     // class is the blueprint for all objects in that class
// }

// const newCar = new Car();


// class Vehicle {
//     constructor(vin, make) {
//         this.vin = vin;
//         this.make = make;
//         console.log('hello world');
//         //return is not needed
//         //because the new object is returned by default
//     }
// }

// const plane = new Vehicle('X123Y', 'Boeing');

// console.log(plane)

// class Vehicle {
//     constructor(speed, color) {
//         this.vehicleSpeed = speed;
//         this.vehicleColor = color;
//         this.logSpeed = () => {
//             console.log(this.vehicleSpeed)
//         }
//     }

// }

// const myNewCar = new Vehicle(240, 'yellow');
// const mylesNewCar = new Vehicle(1000, 'red');
// mylesNewCar.logSpeed()


// class Vehicle {
//     constructor(speed, color, owner, year) {
//       this.vehicleSpeed = speed;
//       this.vehicleColor = color;
//       this.vehicleOwner = owner;
//       this.vehicleYear = year;
//       //  prompt 2: Add a new property to class Vehicle called "vehicleYear" (and the parameter "year).
//       this.logVehicleInformation = () => {
//         console.log(this.vehicleSpeed, this.vehicleColor, this.vehicleOwner, this.vehicleYear)
//         // prompt 3: Add a new property to class Vehicle called "logVehicleInformation" that will log the speed, color, owner, and year of the vehicle.
//       }
//     }
//   }
//  //prompt 1: Use class Vehicle to make 3 new vehicles called plane, car, and train.
//   const plane = new Vehicle(600, 'grey', 'Delta', 1968)
//   const car = new Vehicle(125, 'metallic hot chocolate', 'Frances', 2009)
//   const train = new Vehicle(357, 'white', 'TGV', 2007)

//   plane.logVehicleInformation()
//   car.logVehicleInformation()
//   train.logVehicleInformation()


// // Prompt 4: Create a new class called "Doctor" that will make new objects. The class should have at least 4 properties (for example "age"). One property should be a function that will log "time to go to work!". One property should be a list of coworkers.

// class Doctor {
//     constructor(age, specialty, metro, cohort) {
//         this.doctorAge = age;
//         this.doctorSpecialty = specialty;
//         this.doctorMetro = metro;
//         this.doctorCohort = cohort;
//         this.remindToLeave= () => console.log("time to go to work!")
//     }
// }

// const eye = new Doctor (47, "optometry", "Pittsburgh", ["Cinda", "Jorge", "Lorraine"])
// console.log(eye)
// eye.remindToLeave()


//Prompt 5: create a new class called "User" that will make new objects. The class should have user information and the ability to login the user and logout the user - console.log("you are logged in!");

class User {
    constructor(name, course, location,) {
        this.userName = name;
        this.userCourse = course;
        this.userLocation = location;
        this.logIn = (signIn) => {
            if (signIn == true) {
            console.log("you are logged in!");
            } else {
            console.log("you are logged out!");
        }
        }
    }
}

const frances = new User("Frances", "Software Engineering", "Pittsburgh");

console.log(frances);
frances.logIn(1);
frances.logIn(0);









