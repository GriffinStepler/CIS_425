 // window.alert("Hello world!");
 console.debug("Debug: hello world");
 console.log("Hello world!");

 // formally, there are no data types
 // variables don't need to be declared in advance
 // you can change the types of values in variables
 var name = "Mary";
 var name = 4.3;

 // declare a variable
 var number1 = "1";
 // string interpolation
 console.log(`number1 is ${number1}`);

 var number2 = "5.3";
 console.log(`number1 is ${number2}`);

 var total = parseInt(number1) + Number.parseFloat(number2);

 //total = 0.1 + 0.2;
 console.log(`total is ${total}`);


 // console.log("Hello " + name);

 for(i = 0; i < 5; i++ ){
     console.log(i);
     document.write(`<p style="color: blue;">${i}</p>`);
     document.write("<br>");
 }

