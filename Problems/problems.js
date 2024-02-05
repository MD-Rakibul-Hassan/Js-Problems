/*
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
*/
function celsiusToFahrenheit (celsius) {
      const fahrenheit = (celsius * 9/5) + 32;
      return fahrenheit;
}
const fahrenheit = celsiusToFahrenheit(40);
console.log(fahrenheit);
/*
Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2
*/
const numbers = [5,6,11,12,98, 5,];
const find = 5;
function countReapeated (number,findingElement) {
      let count = 0;
      for (num of number) {
            if (num === findingElement) {
                  count ++;
            }
      }
      return count
}
const repeatedValue = countReapeated(numbers,find);
console.log(repeatedValue);
/*
Task-3:
Write a function to count the number of vowels in a string.
*/
const vowels = ["a","e","i","o","u","A","E","I","O","U"];
function countVowels (string) {
      let vowelsList = 0;
      for (str of string) {
            if (vowels.includes(str)) {
                  vowelsList++;
            }
      }
      console.log(vowelsList)
}
countVowels("I Love Bangladesh")
/*
Task-4:
Write a function to find the Higest word in a given string.
sample-input: I am learning Programming to become a programmer
sample-output: Programming
*/
const string = "I am learning Program to become a programmer";
function findHeightWord (str) {
      const stringToArray = str.split(" ");
      let longestLength = 0;
      for (value of stringToArray) {
            if(value.length > longestLength) {
                  longestLength = value.length;
            }
      }
      return longestLength;
}
const longestLength = findHeightWord(string);
console.log(longestLength);
/*
Task-5:
Generate a random number between 10 to 20.
*/
function generateRandomNumber (n1,n2) {
      return Math.floor(Math.random () * (n2 - n1 + 1) + n1)
}
const randomNumber = generateRandomNumber(10,20);
console.log(randomNumber)