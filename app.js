

// Exercise 1

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


  // Exercise 2

  const isAdult = (age) => {
    return age >= 18 ? 'Adult' : 'Minor';
  }
  
  console.log('Exercise 2 Result:', isAdult(21)); 
  console.log('Exercise 2 Result:', isAdult(16));

  // Exercise 3
  const isCharAVowel = (char) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
  }
  
  console.log('Exercise 3 Result:', isCharAVowel("a")); //  true
  console.log('Exercise 3 Result:', isCharAVowel("y")); 

  // Exercise 4
const generateEmail = (name, domain) => `${name}@${domain}`;

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com")); //  "johnsmith@example.com"

  // Exercise 5
  const greetUser = (name, timeOfDay) => `Good ${timeOfDay}, ${name}!`;

  console.log('Exercise 5 Result:', greetUser("Sam", "morning")); //  "Good morning, Sam!"


  // Exercise 6


  const maxOfThree = (x, y, z) => Math.max(x, y, z);

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


  // Exercise 7
  const calculateTip = (billAmount, tipPercentage) => (billAmount * tipPercentage) / 100;

  console.log('Exercise 7 Result:', calculateTip(50, 20));


  // Exercise 8
const convertTemperature = (temp, scale) => {
  if (scale === 'C') {
    return temp * 9/5 + 32; // Convert Celsius to Fahrenheit
  } else if (scale === 'F') {
    return (temp - 32) * 5/9; // Convert Fahrenheit to Celsius
  } else {
    return "Invalid scale";
  }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C")); 
console.log('Exercise 8 Result:', convertTemperature(32, "F"));


  // Exercise 9

  const basicCalculator = (num1, num2, operation) => {
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
      default:
        return 'Invalid operation';
    }
  }
  
  console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract")); // Expected: 5
  console.log('Exercise 9 Result:', basicCalculator(10, 0, "divide")); // Expected: Cannot divide by zero