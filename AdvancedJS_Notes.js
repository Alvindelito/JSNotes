// Ternary operator - do an if-else with one line using ternary operator

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(false) ? "You may enter" : "Access denied";

var automatedAnswer = 
    "Your account # is " + ( isUserValid(true) ? "1234" : "not available");

automatedAnswer;

// Not ideal way (old way)
function condition() {
    if (isUserValid(true)) {
        return "you may enter";
    } else {
        return "access denied";
    }
}

var answer2 = condition();
answer2;

// --------------------------------------------------------------

// Switch statements
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

console.log(moveCommand("back"));

// ---------------------------------------------------------------

// Destructuring

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

/*Old way
 const player = obj.player;
 const experience = obj.experience;
 let wizardLevel = obj.wizardLevel;
*/

const { player, experience } = obj;
//           ^select properties you want from the object
console.log(player, experience);

let { wizardLevel } = obj;
wizardLevel;

// Dynamic assignment in objects
const name = 'john snow';
const obj2 = {
    [name]: 'hello',
    [1 + 2]: 'hihi'
}

obj2;

const a = 'Simon';
const b = true;
const c = {};

// ---------------------------------------------------------------------------------------

// Template Strings
/* old way
const greeting = "Hello " + name + " you seem to do be doing " + greeting + "!"
*/

// new way
const name2 = "Sally";
const age = 34;
const pet = "horse";
const greetingBest = `Hello ${name2} you seem to be ${age} and cool ${pet} you have`;

greetingBest;

// ---------------------------------------------------------------------------------------

// Default arguments

// This function provides a default argument if there is no change being made. Allows 
// a function to go through without failing
function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10} and cool ${pet} you have`;
}
console.log(greet());
console.log(greet("john", 50, "monkey"));

// ---------------------------------------------------------------------------------------

// Symbol (not as important)
// Symbols are used because they create a completely unique type, to make sure there's never going to
// be a conflict.
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(sym2 === sym3);


// ---------------------------------------------------------------------------------------

// Arrow functions

// old way
function add(a, b) {
    return a + b;
}

// new way
const add = (a, b) => a + b;
/* Another way
const add = (a, b) => {
    return a + b;
}
 */

 // ---------------------------------------------------------------------------------------



// IMPORTANT
//Closures a function ran. the function executed. it's never going to execute again
// but it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope

const first = () => {
    const greet = 'Hi';
    const second = () => {
        console.log(greet);
    }
    return second;
}


const newFunc = first();
newFunc();

// --------------------------------------------------------

// IMPORTANT
// Currying - the process of converting a function that takes multiple arguments into a 
// function that takes them one at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)(4));
const multiplyBy5 = curriedMultiply(5);

console.log(multiplyBy5(3));

// ----------------------------------------------------

// IMPORTANT
// Compose - act of putting two functions together to form a third function 
// where the output of one function is the input of the other

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

console.log(compose(sum, sum)(5));

// Avoiding side effects and functional purity
/* Console.logs are side effects
    Functions that affect the outside world/scope are side effects */

/* Functional purity is a concept where in order to write good programs, we want
    to avoid side effects and we always want a return. */

/* Determinism **IMPORTANT** - no matter what the inputs, the return value will always be the same.
The input whatever we put in the parementers, whether it's empty or it has certain parameters,
It always returns the same value */