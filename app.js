/*` let first_Name = "cedrick";
let second_Name = "simwa";
let third_Name = "mulema";
let fourth_Name = "yoh";
console.log(`jina yangu ni ${first_Name} ${second_Name} ${third_Name} 
${fourth_Name}`);

var A = 30;
var B = 40;
let sum = A + B;
console.log(`THE SUM O THE ABOVE TWO NUMBERS IS ${sum}`);*/
//let A = 40;
//let C = 50;
//console.log(A === A);
/*let student1 = 18;
let student2 = 20;
console.log(student1 >= 18);*/
/*let fisrtName = "cedrick";
let secondName = "simwa";
let lastName = "mulema";
let age = 29;
console.log(
  `my full name is ${fisrtName} ${secondName} ${lastName} and my age is ${age}`
);*/
/*let fruit = [
  "mango",
  "orange",
  "avocado",
  "guavas",
  "watermelon",
  "blueberries",
  "apple",
];
console.log(fruit[6]);
let years = [2000, 2001, 2002, 2003, 2004, 2005];
console.log(years[4]);*/
/*function hello() {
  console.log("hello world");
}
hello();
/*function fullName(firstName, secondName, lastName) {
  console.log(`my fullname is ${firstName} ${secondName} ${lastName}`);
}
fullName("john", "smliga", "ics");*/

/*let makungu= function() {
console.log("hello world")

}
name ();*/

/*var car = { colour: "red", price: "2000,000", model: "BMW" };
console.log(car.model);

let person = {
  firstName: "cedrick",
  secondName: "simwa",
  lastName: "mulema",
  age: 24,
  hello: function () {
    console.log("how are you doing");
  },
};*/

//introduction to conditional statement
//if statement,if Els statement,switch statement,
//If statements
/*let age = 10;
if (age >= 50) {
  console.log("you are an adult");
} else {
  console.log("kid you are");
} */
//else statements

/*let supermarket = {
  Name: "Eldoret",
  location: "eldoret",
  employees: 50,
  size: "500 by 500",

  commodity: function (fname, sname, lname) {
    console.log(`my full name is ${fname}  ${sname}  ${lname}`);
  },
};
supermarket.commodity("cedrick", "milimo", "makungu");

function add(a, b) {
  a[0] = a[0] + b[0];
}
let number1 = [20];
let number2 = [30];
add(number1, number2);
console.log(number1[0]);

//switch statement
let dice = 10;
switch (dice) {
  case 1:
    console.log("you have rolled 1");
    break;
  case 2:
    console.log("you have rolled 2");
    break;
  case 3:
    console.log("you have rolled 3");
    break;
  case 4:
    console.log("you have rolled 4");
    break;
  case 5:
    console.log("you have rolled 5");
    break;
  case 6:
    console.log("you have rolled 6");
    break;
  default:
    console.log(" invalid number");
}*/

/*function areaofacircle() {
  let pi = 3.14;
  let radius = 48;
  let area = pi * radius * radius;
  console.log(area);
}
areaofacircle();

function addition() {
  let number1 = 20;
  let number2 = 30;
  let number3 = number1 + number2;
  console.log(number3);
}
addition();

function sc() {
  let pi = 3.14;
  let radius = 48;
  const half = 0.5;
  let area = half * pi * radius * radius;
  console.log(area);
}
sc();*/

//while loop checks the condition,then executes the loop
/*let age = 10;
while (age < 100) {
  console.log("hello world");
  age++;
}*/
/*const marks = function (a) {
  while (a > 50) {
    console.log(a);
    a++;
  }
  console.log("above average");
};
marks();

const countdown = function (number) {
  while (number > 0) {
    console.log(number);
    number--;
  }
  console.log("blast off!");
};
countdown(5);

//do-while loops
// the do-while loops executes the loop and then checks the conditions
let i = 1;
let n = 5;
do {
  console.log(i);
  i++;
} while (i <= n);

//for...in loop statements creates a loop with 3 optional expression


//epression 1 is executed(on time)before the execution of the code
//expression 2defines the condition for executing the code block
//expresssion 3 is executed(every time)after the code block has been executed
*/
/*let i;
for (let i = 0; i <= 10; i++) {
  console.log("the number is" + " " + i);
}*/

/*
## Variables #1

1. create "firstName" and "last_name" variables
2. assign your values
3. create "address" variable and assign "main street" value to it
4. re-assign address to "first street" later
5. log all values in the console

*/

let first_Name = "cedrick";
let second_Name = "simwa";
let address = "main street";
let address2 = "first street";
console.log(first_Name);
console.log(second_Name);
console.log(address);
console.log(address2);

/*
## Concatenate Strings #2

1. create "street" and "country" variables
2. assign your values
3. create "fullMailingAddress" variable and assign
   the result of "street + country"
4. remember about the space
5. log "fullMailingAddress" in the console

*/

let street = "Eldoret";
let country = "kenya";
let fullmailingaddress = "Eldoret,Kenya";
console.log(fullmailingaddress);

/*

## Numbers #3

1. create "score1", "score2", "score3" variables and
   assign values (0-100)
2. calculate total score and average score, and assign them to the variables.
3. log total score and average score

4. create "plates" variable and assign 20
5. create "people" variable and assign 7
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
9. log message

*/

let score1 = 20;
let score2 = 30;
let score3 = 40;
let totalscore = 20 + 30 + 40;
let averagescore = totalscore / 3;
console.log(totalscore);
console.log(averagescore);

let plates = 20;
let people = 7;
let plates2 = 13;
let plate3 = 13 + 1;
console.log(`There are ${plate3} plates available`);

/*

## Arrays #4

1. create "fruits" array and store some fruit values
2. setup the last item as number (random)
3. assign first fruit to the variable
4. re-assign last array item to the actual fruit
5. log both first fruit variable and entire fruits array

*/

let fruits = ["berries", "mango", "orange", , 45];
let goodfruit = fruits[0];
fruits[3] = "guavas";
console.log(goodfruit, fruits);

/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

*/

const calculateTotal = function random(subTotal, tax) {
  return subTotal + tax;
};

const order1 = calculateTotal(6, 2);
const order2 = calculateTotal(15, 3);
const order3 = calculateTotal(25, 5);

const orders = [order1, order2, order3];
console.log(orders);

/* 
## Objects #6

1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods

*/

const car = {
  make: "nissan",
  model: "BMW",
  year: 2020,
  colors: ["Black", "red", "blue", "white"],
  hybrid: false,
  drive: function () {
    console.log("hello world");
  },
  stop: function () {
    console.log("miss you");
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();

/* 
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects
*/

const person1 = {
  name: "cedrick",
  age: 24,
  status: "resident",
};

const person2 = {
  name: "sharon",
  age: 20,
  status: "tourist",
};
const age = person2.age;
const status = person1.status;

if (age >= 18 && status === "resident") {
  console.log("hello world");
} else {
  console.log("you are not eligible");
}

/* 
## Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter

*/

function fullName({ firstName, lastName }) {
  const fullName = `my name is ${firstName} ${lastName}.`;
  return fullName.toUpperCase();
}

console.log(fullName({ lastName: "cedrick", firstName: "simwa" }));
