// for (let i = 0; i < 3; i++) { if (i == 1) continue; console.log( i ); }





// Exercise 1 : List Of People
// Instructions
// let people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?



let people = ["Greg", "Mary", "Devon", "James"];
let favPeople = people.slice(1)
favPeople[2] = "Jason"
favPeople.push("Meir")
console.log (favPeople)
let maryIndex = people.indexOf("Mary");
console.log (maryIndex)

newPeople=favPeople.slice(-3)
newPeople.pop()
console.log(newPeople)
let newPeopleIndex = newPeople.indexOf("foo")
console.log (newPeopleIndex)

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.



for (let i = 0; i < favPeople.length; i++) {
    console.log(favPeople[i]);
    if (i > 1 )
        break;
};


// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus


let colors = ["red", "yellow", "blue", "orange", "green"]
let choice = ["#1", "#2", "#3", "#4", "#5"]

for (let y=0; y<colors.length;  y++) {
    console.log( `my ${choice[y]} choice is ${colors[y]} `)
}

// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?



   let c = (prompt("choose a number"))
   for (let c = 0 ; c < 10 ; c++)
  while (c++ < 10) {
    if (c > 0);
    continue;
    
}

// Exercise 4 : Building Management
// Instructions: Review About Objects

// Copy and paste this object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log (building.numberOfFloors)
console.log (building.numberOfAptByFloor.firstFloor , building.numberOfAptByFloor.thirdFloor)
console.log (building.nameOfTenants[1])
console.log (building.numberOfRoomsAndRent.dan[0])

console.log (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1])

building.numberOfRoomsAndRent.dan[1] = "1200"
console.log (building.numberOfRoomsAndRent.dan[1])


// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for loop, console.log the keys of the object.
// Using a for loop, console.log the values of the object.

// let family = {
//     firstname: Dad
//     lastname: smith
//         eyecolor : {
//             dad: green
            
//         } 
// }

// Exercise 6
// Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  for (let x in details) {
      console.log(x)
      console.log(details[x])
  }



//   Exercise 7 : Secret Group
//   Instructions
//   let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//   A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//   Hint: a string is an array of letters
//   Console.log the name of their secret society. The output should be “ABJKPS”


let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names=names.sort ()
console.log (names)

for (i=0; i < names.length; i++)
console.log(names[i][0]);

