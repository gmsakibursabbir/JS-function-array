# JS-function-array

  - [Function](#function)
    - [Parameter & Argument](#Parameter-&-Argument)
    - [Callback Function](#callback-function)


## **Function**
--------------

A Function is a block of code that performs a specific task. And javascript has huge inbuilt functions.    

In javascript function is defined with the `function` keyword. The basic rules of naming a function are similar to naming a variable. The body of function is written within {}.

Declare a function 

```js
// declaring a function named greet()
function greet() {
    console.log("Hello there");
}

```
Calling a Function

To call above declared function named `greet()`. We just have to called it.

```js
// function call
greet();

```

Example:

```js
// program to print a text
// declaring a function
function greet() {
    console.log("Hello there!");
}

// calling the function
greet();


```
### **Parameter & Argument**

A parameter is a variable in the declaration of the function.

An argument is the actual value of the variable that gets passed to the function.




![Alt text](image.png)


### **Callback Function**

A callback function can run after another function has finished
we can pass functions as parameters to other functions and call them inside the outer functions.


```js


function scriptRunning(callback) {
  console.log("Running the Script...");
  // Using setTimeout to simulate an asynchronous operation
  setTimeout(function() {
    callback("Operation Done");
  }, 2000);
}
 
// Defining callback function
function recallFunction(result) {
  console.log("Result: " + result);
}
 
// Call the main function with the callback function
mainFunction(recallFunction);

```

**Output**

```
Running the Script...
Result: Operation Done

```






## **Array**
--------------

