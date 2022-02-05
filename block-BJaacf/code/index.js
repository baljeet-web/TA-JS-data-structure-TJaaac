// 1. Create an array named numbers and store 5 number values in it

let numbers=[9,56,54,100,19,5,21];

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i] ;
}
console.log(sum);
    


// 3. Calculate the average of array items and print it to the console using console.log()
average = sum / (numbers.length);
console.log(average);

// 4. Find the highest number in the array and print it to the console using console.log()

let highest = numbers[0];
for (let i =0; i<numbers.length; i++){
    if (highest < numbers[i]){
        highest = numbers[i];
    }
}
console.log(highest)

// 5. Find the lowest number in the array and print it to the console using console.log()

let lowest = numbers[0];
for (let i =0; i<numbers.length; i++){
    if (lowest > numbers[i]){
        lowest = numbers[i];
    }
}
console.log(lowest)

// 6. Find the even numbers in the array and print them to the console using console.log()

let even = [];
for (let number of numbers){
    if (number % 2 ===0){
        even.push(number)
    }
}
console.log(`The even numbers in array are ${even}`)
// 7. Find the odd numbers in the array and print them to the console using console.log()

let odd = [];
for (let number of numbers){
    if (number % 2 !== 0){
        odd.push(number)
    }
}
console.log(`The odd numbers in array are ${odd}`)


// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

let numberDivisibleBy5 = [];
for (let number of numbers){
    if (number % 5 === 0){
        numberDivisibleBy5.push(number)
    }
}
console.log(`The numbers divisible by 5 in this array is/are ${numberDivisibleBy5}`)

// 9. Log all the element of the array one by one

console.log(numbers);

// 10. Find all the number in the array that is divisible by 3

let numberDivisibleBy3 = [];
for (let number of numbers){
    if (number % 3 === 0){
        numberDivisibleBy3.push(number)
    }
}
console.log(`The numbers divisible by 3 in this array is/are ${numberDivisibleBy3}`)