//# sourceURL=objectOrientation.js

function firstObject() {
    debugger;

    var student = new Object;
    student.name = "Homer Simpson";
    student.grade = 3;

    var dude = {}
    dude.name = "Hans";
    dude.say = function () {
        console.log("Modul-Eigenschaft: " + dude.name);
    };

    dude.say();
}

function objectInitializer() {
    debugger;

    var dog = {
        name: "Giro",
        bark: function () {
            console.log("My name is: " + this.name);
        },
        hunt: function () {
            console.log("I am hunting a rabbit");
        }
    }
    console.log(dog.name);
    dog.bark();
    dog.hunt();
}

//var cable = { Id: 17, Text: "USB Cable", Amount: 11 };

//if (typeof usbcable === "undefined") {
//    var usbcable = { Id: 17, Text: "USB Cable", Amount: 11 };
//}

//// or a shorter version
//var mycable = window.cable || { Id: 17, Text: "USB Cable", Amount: 11 };

function safelyCreate() {

    debugger;

    // not safe, if there's another object with this name we will overwrite it
    var cable = { Id: 17, Text: "USB Cable", Amount: 11 };

    // check for "undefined" before creating
    if (typeof usbcable === "undefined") {
        var usbcable = { Id: 17, Text: "USB Cable", Amount: 11 };
    }

    // or a shorter version
    var mycable = window.calble || { Id: 17, Text: "USB Cable", Amount: 11 };
}

function constructorFunction() {
    debugger;

    function SoccerPlayer(name, goals) {
        this.name = name;
        this.goals = goals;
    }
    var arn = new SoccerPlayer("Marco Arnautovic", 3);
    var alb = new SoccerPlayer("David Alaba", 2);
    var jan = new SoccerPlayer("Marc Janko", 4);
}

function objectWithMethod() {
    debugger;

    function SoccerPlayer(name, goals) {
        this.name = name;
        this.goals = goals;
        this.scoreGoal = () => {
            console.log("I am " + this.name + " and I scored " + this.goals + " goals!");
        }
    }
    
    var marko = new SoccerPlayer("Marko Arnautovic", 3);
    marko.scoreGoal();
    var alb = new SoccerPlayer("David Alaba", 2);

    marko.tellScore = function () { console.log("Until now I scored " + this.goals + " goals") }
    marko.scoreGoal();
    marko.tellScore();
    alb.tellScore();
}

function prototypeBasics() {
    debugger;

    function Circle(radius) {
        this.Radius = radius;
    }

    Circle.prototype.pi = Math.PI;
    Circle.prototype.calculateArea = function () {
        console.log("Area of a cirle with radius " + this.Radius + " is: " + this.pi * Math.pow(this.Radius, 2));
    }

    var circleA = new Circle(10);
    var circleB = new Circle(5);
    circleA.calculateArea();
    circleB.calculateArea();

    //Extending builtin objects
    debugger;
    Array.prototype.showMax = function () {
          var max = this[0];
          for (var i = 1; i < this.length; i++) {
              if (max < this[i]) {
                  max = this[i];
              }
          }
          return max;
      }

    var array = new Array(9, 1, 11, 3, 4);
    var max = array.showMax();
    console.log(max);  // 11
}

function thisInObjects() {
    debugger;

    var dog = {
        Name: "Giro",
        Breed: "Galgo Espanol",
        Run: function () {
            console.log("I am " + this.Name + " and I am running");
        }
    }

    dog.Bark = function () {
        console.log("I am " + this.Name + " and I am barking");
        console.log("I am " + Name + " and I am barking"); //Name is not defined
    }

    dog.Run();
    dog.Bark();
}


function inheritance() {
    debugger;

    function Person(name) {
        debugger;
        this.name = name;
        this.sayName = function() {
            console.log("Hi, I am " + this.name);
        }
    }

    function Student(name, grade) {
        debugger;
        //this.name = name;
        Person.call(this, name);
        this.grade = grade;
    }
    Student.prototype = new Person();
    
    var alex = new Student("Alex", "First");
    alex.sayName();
}

function methodOverriding() {
    debugger;

    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayName = function () {
        console.log("Hi, I am " + this.name);
    }

    function Student(name, grade) {
        debugger;
        Person.call(this, name);
        this.grade = grade;
    }

    Student.prototype = new Person();

    Student.prototype.sayName = function () {
        console.log("Hi, I am " + this.name + ", i go to grade " + this.grade);
    }

    var alex = new Student("Alex", "First");
    alex.sayName();
}