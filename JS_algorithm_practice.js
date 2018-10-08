
// Using slice and splice to insert elements of array 1 to n index of array 2.
// another important use is the spread operator 
// **note: this is an exercise from Freecodecamp
function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1);
    console.log(newArr);

    return newArr;

  }
  
//   frankenSplice([1, 2], ["a", "b"], 1);
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)


// ---------------------------------------------------------------------------------


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));

/* A truthy value is a value that translates to true when evaluated in a Boolean context.
   All values are truthy unless they are defined as falsy (i.e. except for false, 0, "", null, undefined and NaN). */