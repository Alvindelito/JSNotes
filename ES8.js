// string padding

// .padStart()
// .padEnd()


'Turtle'.padStart(10); //Output: "    Turtle"

// Adds spaces before or after the string, including the string itself.
// Example above, 4 spaces added in beginning.

'Turtle'.padEnd(10); //Output: "Turtle    "

const fun = (a, //This format best used for long lists of parameters
            b,
            c,
            d,) => {
    console.log(a);
}

fun(1,2,3,4) //output: 1

// Object.values
// Object.entries
// Object.keys 

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

// Old way
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

/* Output:
username0 Santa
username1 Rudolf
username2 Mr.Grinch */

// Newer way

Object.values(obj).forEach(value => {
    console.log(value);
})
/* Output:
Santa
Rudolf
Mr.Grinch */

Object.entries(obj).forEach(value => {
    console.log(value);
})
// returns an array of both property and value of the object


Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
