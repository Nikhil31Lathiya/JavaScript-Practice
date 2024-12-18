// alert("hello world");

// there are three ways to declare the variable 
//     1) var
//     2) let
//     3) const =----> means constaint whose value cant be changed



// variable name is case sensective and we can start with $ ,  _ , and alphabets 

// var a = 5;
// let b = 6 ;
// let c = "nikhil";

// console.log(b);

// alert(`hello ${c} `);  // -----> we can also print like this



//-----> it is used to give the default value to the null or undefined variable 
// let a = null;
// document.write(a ?? "Guest user");
// alert(a ?? "guest user") ;



// turnery operator 

// let max = 5>6 ? "false" : "true" ; 

// document.write(max);




// let num = false;

// console.log(typeof num);

// let newNum = Number(num);

// console.log(typeof newNum);


// let arr = ["english" , "computer" , "maths" , "science" ];

// arr.forEach(myFu);

// function myFu(value)
// {
//     console.log(`value is ${value}`);
// }


// function myFun(num)
// {
//     for(let i=1 ; i<=10 ; i++)
//     {
//         document.write(`${num} X ${i} = ${num*i} `);
        
//         document.write("<br>");
//     }

// }


// myFun(5);



// pass any number of argument function (argumeents as object) 
// function myFun()
// {
//     let sum = 0;
//         if(arguments.length == 0)
//         {
//             document.write("no argument are passed ...!!!");
//         }
//         else{

//             for(let i = 0 ; i<arguments.length ; i++)
//             {
//                 sum +=arguments[i];
//             }

//             document.write("the total is " + sum);
//         }
// }

//  let add = myFun;
//  add(5,10);



//Anonymous Function---> it showld be termminated with ; 

// function stored in variable ...names show 
// let show = function()
// {
//   console.log("hello ");

// };  

// show();

            //function name or function        , delay time in miliseconds 1s =1000ms
// setTimeout(function(){document.write("Nikhil")},3000);


    
    let msg = "hello world";

    function show()
    {
        console.log(msg);
    }

show();
