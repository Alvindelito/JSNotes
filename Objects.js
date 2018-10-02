// Reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

// object2 references object1 and will change accordingly if object1 changes
// Object1 and object3 are completely different objects
//  even though they have the same value
// Applies to arrays as well

// -------------------------------------------------------

// Context vs scope

// Scope is the boundaries within a function

// 'this' refers to what object it's inside of
/*  Example: on the chrome dev tools,
    typing 'this.alert()' will trigger the alert because
    it 'this' references the window object.  */

// Instantiation - when you make a copy of an object and reuse the code
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

// When you extend a class, you must use 'super' to access its properties
class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
// const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.play();
wizard1.introduce();
// wizard2.introduce();