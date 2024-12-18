/* CLASSES AND OBJECTS IN JAVASCRIPT */



// declearing object :
// there are two methods of declearing the object 
// 1) . threw the dop operator
// 2) [] threw the array bracket operator


let person = {
        name : "nikhil",
        lastname : "lathiya"
};

person.age =  19; /// declaring one propertiey outside the object and assign them


// object . property  here object is person and properties are name , last name 
console.log(person.lastname);// print the last name property : by using . operator
console.log(person['name']);// by using [] 
console.log(person);  // prints all the properties in object 

console.log(person.age);

person.name = "Roman"; // We can also modify the the name variable ...outside the brackets 
console.log(person.name)


delete person.name; /// it will delete the name property from the object
console.log(person);


console.log( 'height' in person); // it will check weather the property is int the object or not if yes then it will return true else false



// ******* for in loop for accessing all the properties in the object *********

/************ Note the . operator cant be use in loops **************/
for (let i in person)
{
    document.write(`${i} and the value is ${person[i]} <br>`);
}




// *******************************************************************************

// *********************declaring methods in js ******************************

// there are 4 ways to declare the methods in js 



let college = {

    std_name : "nikhil",
    std_year: 3,
// 3)
    // sayHello: function() {
    //     console.log("hello");
    // } 

    sayHello()
    {
        console.log("thank you ");
    }

};

college.sayHello();  // op for 3 and 4 th 

// // 1) 
// college.sayHello  =  function (){
//     console.log("hello dnv college");
// }

// college.sayHello();

// // 2)
// function greet()  // creating normal function
// {
//     console.log("hello nikhil !");
// }

// college.yo = greet(); /// assign the function to the variable 


