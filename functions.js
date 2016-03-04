/*Functions
Functions are great, they take data (input), do stuff with that data and then return it to you all shiny and fancy (output).

Below are some specifications for Functions to be built.*/

//run node function.js in command line to confirm

//Declare 2 Variables

var a = 2;
var b = 3;

/*Function - add
This function returns the result of adding a and b together. Store this value in a variable named sum.*/

function add(n1, n2){
  return n1 + n2;
}
var sum = add(a,b);
console.log('function add: ' + sum);


/*Function - subtract
This function returns the result of subtracting b from a Store this value in a variable named difference*/

function subtract(n1, n2){
  return n2 - n1;
}

var difference = subtract(a, b);
console.log('function subtract: ' + difference);

/*Function - multiply
This function returns the result of multiplying b by a. Store this value in a variable named product*/

function multiply(n1, n2){
  return b * a;
}
var product = multiply(a, b);
console.log('function multiply: ' + product);

/*Function - checkDifference
This function accesses the value stored in the difference variable and uses this number to return the string "My football team lost X times this week", where X is the value stored in difference.*/

function checkDifference(){
  return "My shetty football team lost " + difference + " times this week";
}
console.log(checkDifference());


/*Function - checkSum
This function checks the value stored at sum and uses that number to print to the screen the phrase "I CAN ADDZ X NUMBERS" where X is the value stored in the variable sum .*/

function checkSum(){
  return "I CAN ADDZ " + sum + " NUMBERS G!";
}

console.log(checkSum());

/*Function - checkProduct
This function checks the value stored at product and multiplies it by the number stored at difference and then prints the result to the console.*/

function checkProduct(n1, n2){
  return n1 * n2;
}

var totalProduct = checkProduct(product, difference);
console.log('function checkProduct = ' + totalProduct);

/*Function - addThenSubtract
This function takes three Number arguments named by you, then adds the first two arguments together. Then with the sum of that operation, subtract the value at the third argument. This function should make use of your previous functions.

example: addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2*/

function addThenSubtract(n1, n2, n3){
  return (n1 + n2) - n3;
}
var addThenMinus = addThenSubtract(sum, difference, product);
console.log('function addThenSubtract = ' + addThenMinus);


/*Function - addThenMultiply
This function takes three Number arguments named by you, then adds the first two arguments together. Then with the sum of that operation multiply it by the third argument. This function also should make use of your previous functions.

Store the return of this function to a variable named howMany*/

function addThenMultiply(n1, n2, n3){
  return (n1 + n2) * n3;
}
var howMany = addThenMultiply(sum, difference, product);
console.log('function addThenMultiply = ' + howMany);


/*Function - createFullName
@param Datatype: String firstName
@param Datatype: String lastName 
@return Datatype: String
This function takes two String arguments firstName and lastName. This function returns back a string which represents someone's full name.

Call this function and pass your first and last name into it. Store the return value to a variable named myFullName*/

function createFullName(firstName, lastName){
  return "Yo, my damn name is " + firstName + " " + lastName + "!";
}
var myFullName = createFullName("Samuel", "Jackson");
console.log(myFullName);


/*Function - verifyDrinkingAge
@param Datatype: Number age
@return Datatype: Boolean
This function takes one Number argument age. This function returns the Boolean value true or false if age is lower than the legal drinking age in the state of Hawaii.

Call this function and pass in a number value. Store the return value to a variable named canDrinkBeer*/

function verifyDrinkingAge(age){
  if(age >=21){
    return true;
  }else{
    return false;
  }
}

var canDrinkBeer = verifyDrinkingAge(50);
console.log('Brah, u can drink or wat? ' + canDrinkBeer);



/*Function - throwParty
This function checks the value stored at the canDrinkBeer variable and if the value is false it should print to a message to the screen, "The Party will have tons of Cake!" otherwise this message should be "This Party will have an open bar".*/


function throwParty(){
  if(canDrinkBeer === false){
    return "The pahty will have tons of Carrot Cake!";
  }else{
    return "Dis pahty will have an open bah cuz!";
  }
}
console.log(throwParty());


/*Function - eatFood
This function takes 3 arguments firstName, lastName, food and prints out a message to your screen. Internally this function will make use of the createFullName function you created earlier.

exmaple input: if someone called your program like this eatFood( "John", "Papa", "Pizza" )

example output: "John Papa loves to eat Pizza"

exmaple input: if someone called your program like this eatFood( "Peter", "Bojangles", "California Burritos" )

example output: "Peter Bojanglesloves loves to eat California Burritos"*/

function eatFood(firstName, lastName, food){
  return firstName + " " + lastName + " loves to eat " + food +".";
}

var eaten = eatFood("Biggie", "Smallz", "manapuas");
console.log(eaten);


/*Function - repeater
This function will print to the screen X amount of times. Where X is the value stored at howMany. Inside of this function it will check if the value of canDrinkBeer, if the value is true the message will be "Bacon Pancakes, makin' Bacon Pancakes..." othewise the message will be "Let it go.... LET IT GOOOOOOoOoOoOo..."*/

function repeater(printX, oldEnuff){
  for(var i = 0; i<printX; i++){
    if(oldEnuff){
    console.log("Bacon Pancakes, makin' Bacon Pankcakes...");
  }else{
    console.log("Let it go....LET IT GOOOOOOoOoOoOo");
  }
}
}

repeater(howMany, canDrinkBeer);




/*function repeater(num){
  if(canDrinkBeer === true){
   message = "Bacon pancakes, makin' Bacon pancakes...";
  }else{
   message = "Let it go...Let it Goooooooooooo";
 }
  for(var i = 0; i<num; i++){
  console.log(message);
 }
}

var howMany = repeater(5);
console.log(howMany);*/