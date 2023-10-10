let countrys = ["Bangladesh", "India", "Nepal", "Pakistan", "Bhutan"];

// countrys[5] = "Sri Lanka";
// countrys.splice(1, 7);
// countrys.slice(7, 0, "NEW Nation");

console.log(countrys);
console.log(countrys.slice(1));
console.log(countrys.pop());

for (let i = 0; i < countrys.length; i++) {
    console.log(i, countrys[i]);
  }

for (let country of countrys) {
	console.log(country);
}



function scriptRunning(callback) {
    console.log("Running the Script...");
    setTimeout(function () {
      callback("Operation Done");
    }, 2000);
  }
  
  function recallFunction(result) {
    console.log("Result: " + result);
  }
  
  scriptRunning(recallFunction);



var numbers = [1, 2, 3, 4, 5];

function mainFunction(callback) {
  console.log("Performing operation...");

  numbers.forEach(callback);
}

function callbackFunction(number) {
  console.log("Result: " + number);
}

mainFunction(callbackFunction);
