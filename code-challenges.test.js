// ASSESSMENT 2: Coding Practical Questions with Jest

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
// input: an object with numbers
// output: true if the number is evenly divisible by three, false otherwise
// It will need a function that divides the number inside an object by 3
// It will require using conditional statements:
// if (number % 3 === 0) then it is true
// else it is false

// // // a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // // // Expected output: "15 is divisible by three"

// describe('divideByThree', () => {
//         it('should return "15 is divisible by three" for object1', () => {
//             expect(divideByThree(object1)).toEqual('15 is divisible by three')
//     })})

// const object2 = { number: 0 }
// // // // // Expected output: "0 is divisible by three"
// describe('divideByThree', () => {
    //     it('should return "0 is not divisible by three" for object2', () => {
        //         expect(divideByThree(object2)).toEqual('0 is not divisible by three')
        //     })})

// const object3 = { number: -7 }
// // // // // Expected output: "-7 is not divisible by three"
// describe('divideByThree', () => {
    //     it('should return "-7 is not divisible by three" for object3', () => {
        //         expect(divideByThree(object3)).toEqual('-7 is not divisible by three')

// // b) Create the function that makes the test pass.
// const divideByThree = (obj) => { 
//    if (obj.number % 3 === 0) {
//         return (`${obj} is divisible by three`)
//     } else {
//         return (`${obj} is not divisible by three`)
//     }}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:
// input: an array of words
// output: an array of all the words capitalized
// It will need a function that capitalizes all the words in an array
// It will require using the for loop
// It will require using the capitalize function
// It should return an array with all words capitalized

// describe("capitalize", () => {
//     it("returns an array of all the words capitalized", () => {
//         expect(capitalize("string")).toEqual(["STRING"])
// })
// })
// const allCaps = (array) => {
//     return array.map(word => {
//         return word.toUpperCase()
//         })
// }
// // a) Create a test with expect statements for each of the variables provided.

// // Create a test using the variables provided to capitalize the first letter of every word

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// describe("capitalize", () => {
    //     it("returns an array of all the words' first letter capitalized'", () => {
        //         expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        //     })})

// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// describe("capitalize", () => {
    //     it("returns an array of all the words' first letter capitalized'", () => {
        //         expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })})

// // b) Create the function that makes the test pass.
// const capitalize = (array) => {
//         return array.map(word => {
//                 return (word.charAt(0).toUpperCase() + word.slice(1))
//             })
//         }

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // Pseudo code:
// // input: a string
// // output: the index of the first vowel
// // It will need a function that takes in a string and logs the index of the first vowel
// // It will require using the for loop
// // It will require using the indexOf function
// // It should return the index of the first vowel

// // a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// // Expected output: 1
// describe ('firstVowel', () => {
//     it ("returns the index of the first vowel", () => {
//         expect(firstVowel(vowelTester1)).toEqual(1)
// })})

// const vowelTester2 = "academy"
// // Expected output: 0
// describe ('firstVowel', () => {
//     it ("returns the index of the first vowel", () => {
//         expect(firstVowel(vowelTester2)).toEqual(0)
// })})

// // const vowelTester3 = "challenges"
// // // Expected output: 2 
// describe ('firstVowel', () => {
//     it ("returns the index of the first vowel", () => {
//         expect(firstVowel(vowelTester3)).toEqual(2)
// })})

// // // b) Create the function that makes the test pass
// const firstVowel = (string) => {
//     const vowels = ['a','e','i','o','u'];
//         for (let i = 0; i < string.length; i++) {
//             if (vowels.includes(string[i].toLowerCase())) {
//                 return i
//             }
//         }
//    }
