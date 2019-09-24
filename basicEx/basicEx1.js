console.log("Hello from the Console");
document.write("Hello form the Browser" + "<br>");


/*
1.
Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. 
This program should generate a different random number every time, that should be between -5c and 25c. 
If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate". */

/*if (a > 100) {
   console.log("a is greater than 100");
} else {
   console.log("a is less than or equal to 100");
}*/
/*let random = Math.floor((Math. random() * 26) +  -5);
	document.write(random);

	if (random >= -5 && random <= 10) {
		document.write(" The weather is cold" + "<br>");
	} else {
		document.write(" The weather is moderate" + "<br>");
	}
*/

/*
2.
Create a JavaScript function to find the highest value in an array. 
E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9.
*/
/*let max = array[0];
for (let i = 1; i < arrayLength; ++i) {
  if (array[i] > max) {
    max = array[i];
  }
}*/

/*let array = [5, 8, 99, 198, 4, 23, 783, 26789, 12, 4, 346758697];
	console.log(
 	Math.min(...array)
 	)
 	document.write(
 		Math.max(...array)
 	)*/

/*function array = [5, 2345, 7654, 9876543, 1];
 	let max = array[0];
for (let i = 1; i < array.length; ++i) {
  if (array[i] < max) {
    okei = array[i];
  }
}
	document.write(okei);
	array();*/


/*
3.
Create a JavaScript function to calculate the product of the values in an array. You can have as many values in an array as you want.
E.g. If we pass the following values 1, 3, 7, 10, 2 we should get the number 420 printed on the screen.*/

/*function multiply = [a, b, c, d, e] {
	let result1 = a * b * c * d * e;
	return result1;
}
console.log(multiply(45, 2, 5, 11, 9));


function multiply_1(a,b) {
   let result = a*b;
   return result;
}

*/



/*let multi = [6, 8, 1, 2, 9, 66];
let total = 1;

for (let i = 0; i < multi.length; ++i) {
    total = total * multi[i];
}

alert(total);*/

/*
4. 
Now when you have program Temperature v1.0 done it time to upgrade it to the version 2.0. 
Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages
(e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition.
*/

let random = Math.floor((Math. random() * 55) + -21); 

	if (random >= 32) {
		document.write(" The weather is hot" + "<br>" + '<img src="img1.jpg">');
	}
	
	else if (random >= -20 && random <= 10 ) {
		document.write(" The weather is cold "  +  "<br>" + '<img src="img2.jpg">');

	}
	else {
		document.write(" The weather is moderate " +  "<br>" + '<img src="img3.jpg">');

	}
	

/*Martin = 76

Thomas = 85

Klaus = 65

Maria = 93

David = 81
*/
