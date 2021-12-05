// ****************************************************TASK 1 - OBJECTS****************************************************
const PersonA = {
name: 'Karen',
age:'21',
location: 'Spain',
likes: 'Pizza'
};

const PersonB = {
    name: 'Kaycee',
    age:'32',
    location: 'Rowley Regis',
    likes: 'Cyrstals'
    };

const PersonC = {
    name: 'Orson',
    age:'17',
    location: 'Perr     y Barr',
    likes: 'Cricket'
    };
const PersonD = {
    name: 'Kassim',
    age:'33',
    location: 'Nigeria',
    likes: 'Moimoi'
    };


console.log (PersonA.name)

function Biography (Person) {
return "Hi, my name is " + Person.name + " I am " + Person.age + " years old, I live in " + Person.location + " and I like " + Person.likes + "."
};

console.log (Biography (PersonB));



// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

 const x = 6;
 const y = 4;

 const addition = x + y;

 console.log("Addition: x + y " + addition);

 const subtraction = x - y;

 console.log("Subtraction: x - y " + subtraction);

 const multiplication = x * y;

 console.log("multiplication: x * y " + multiplication);

 const division = x / y;

 console.log("Division: x / y " + division);

const tally = x * y - x;

console.log ("tally: x * y - x " + tally )

const tally1 = x * x;

console.log ("tally1: x * x " + tally1 )

const tally2 = x + x + y;

console.log ("tally2: x + x + y " + tally2 )

const tally3 = x * y / x;

console.log ("tally3: x * y / x " + tally3 )


// ****************************************************TASK 3****************************************************

const Drivingage = 18;
const Myage = 30;

var isAmIOldEnoughToDrive = Myage > Drivingage;

console.log ('Am I Old Enough To Drive? '+ isAmIOldEnoughToDrive);

var isAmIOldEnoughToDrive = PersonC.age > Drivingage;

console.log ('Am I Old Enough To Drive? ' + isAmIOldEnoughToDrive);

// ****************************************************HOMEWORK Calculator****************************************************

 const calculator = (operator, ...numbers) => {
    const Key = '+-*/';
    const ind = Key.indexOf(operator);
    return numbers.reduce((acc, val) => {
       switch(operator){
          case '+': return acc+val;
          case '-': return acc-val;
          case '*': return acc*val;
          case '/': return acc/val;
          case '%': return acc%val;
       };
    });
 };
 console.log(calculator('+', 12, 450));
 console.log(calculator('-', 89, 210));
 console.log(calculator('*', 12, 95));
 console.log(calculator('/',120,7));
 console.log(calculator('%',150,33));

// ****************************************************HOMEWORK Counter****************************************************


// difference in ages between two people
const difference = (PersonB.age- PersonA.age)

// the older of two people
const older = (true, false)

// Functions

 function olderAge  (Person, Person) {
    if (Person.age<Person.age){
        return false;
    }
    
    else{
        return true;
    }
}
console.log (olderAge (PersonA, PersonB))


function WhoIsOlder (Person, Person) {
 return PersonB.name + ' is ' + difference + ' years older than ' + PersonA.name
};

console.log (WhoIsOlder(PersonB, PersonA))













