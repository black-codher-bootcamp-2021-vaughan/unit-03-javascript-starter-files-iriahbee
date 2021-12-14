// ****************************************************TASK 1****************************************************
const animals = ['cat', 'dog', 'monkey', 'lion', 'crocodile', 'snake', 'rabbit']; 

animals.pop('');

console.log(animals)











// ****************************************************TASK 2****************************************************

const names1 =['jack', 'john', 'peter', 'paul', 'cindy', 'lisa', 'jeff','corrine', 'claire', 'diane',];

names1.sort ();

console.log (names1);

names1.sort ().reverse ();

console.log (names1);



const numbers = [5, 325, 67, 100000, 150]

//*Lowest Ascending *// 
numbers.sort(function(a, b){return a-b});

console.log (numbers) 

//*Highest descending*//
numbers.sort(function(a, b){return b-a});

console.log (numbers)



// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];
function compare(a, b,) {
  const personA = a.age;
  const personB = b.age;

  return personA > personB ? 1:-1;
}

people.sort(compare)

console.log (people)

function Returnages() {
names=[];

for (let index = 0; index< people.length; index++) {const person = people [index].name; names.push (person);

}; 

return names;

}

console.log ('for loop', Returnages());