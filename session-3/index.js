// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let a =5;
const b =10;
let c = a + b;

console.log ("Original Output: " + c);

a =20;

console.log ("after 'a' has been updated" + c)

c = a + b;

console.log ("after 'c' has been updated to use the new 'a' value" + c)


function sayHey( )  {
    console. log ( "Hey!") ; 
    }
    
    sayHey( ) ;

function conversation( ) {
    sayHey( ) ;
    console. log("How are you?") ;
    console. log("Goodbye") ;
}

conversation( )

function futureAge () {
    
    let currentage = 23;
    
    var x = 5;
    
    const answer = currentage + x;

    let name = "Mary";
    
    return "Hi " + name + " !"  + " You will be "  + answer  +  " years old in 5 years. " 
}

console.log(futureAge())