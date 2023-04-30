// ASSESSMENT 2: Coding Conceptual Questions

// // --------------------1) What will this log?

// const cohort = "Charlie 2023"
// console.log(cohort.split(""))

// // a) Your answer: 
    // ['C','h','a','r','l','i','e','2','0','2','3']

// // b) Verify and explain:
    // ['C', 'h', 'a', 'r','l', 'i', 'e', ' ','2', '0', '2', '3']

    // // The .split built-in method turns strings into an array and based on the separator (""), the resulting cohort array splits each character separately. In my original answer I forgot to acknowledge that the space also counts since it technically is a character. 



// // --------------------2) What will this log?

// const greeter = (name) => {
//    `Hello, ${name}!`
//    }
// console.log(greeter("LEARN Student"))

// // a) Your answer: 
    // undefined
  
// // b) Verify and explain:
    // undefined

    // // The log came out as undefined because if you use curly braces there must be a there a 'return' statement that explicitly states what should be shown after. If the user wanted to show "Hello, LEARN Student!" the could have written it like:
    // // const greeter = (name) => {
    // //   return `Hello, ${name}!`
    // // }
    // // or like:
    // // const greeter = (name) => `Hello, ${name}!`
    // // console.log(greeter("LEARN Student"))
    // // The second one works because using the arrow function syntax creates an implicit return if the function body is a single expression even without curly braces. It is also important to use backticks or else the string interpolation will not work.



// // --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// // a) Your answer: 
    // [8, 10, 12, 14, 16]

// // b) Verify and explain:
    // [8, 10, 12, 14, 16]
    // //  The .map method used on the array creates a new array with the same number of elements as the original and does not alter the original. The arrow function then takes every element (the iteration) and returns an array that multiplied each single number by 2 until every number in the original array is through. 



// // --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// // a) Your answer:
    // [11, 13, 15]

// // b) Verify and explain:
    // [11, 13, 15]
    //  The .filter method filters out every element in the array that is not a multiple of 2. The condition (number % 2 !== 0) checks whether each number is odd or even.
    // 0 is the value compared to the result of 'number % 2'. If the remained of the divided number is equal to 0, then it is evaluated as false and filtered out of the returning array.If the number is odd, the expression is evaluated as true and shown when logged. 



// // --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// // a) Your answer:
    // "JavaScript"

// // b) Verify and explain:
    // "JavaScript"
    // myCodingSkills is an object with four key-value pairs. The syntax used to log the object accesses the first key-value pair and returns the 0th index which was "JavaScript".



// // --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Charlie"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// // a) Your answer:
    // Learn {student:'George', cohort:'Charlie', year:2023}

// // b) Verify and explain:
    // Learn { student: 'George', cohort: 'Charlie', year: 2023 }
    // Learn is a class that is used as a blueprint to create new objects. There are three objects in this class where the 'student' object is set to the inputted value of the 'name', the 'cohort' set to a string, and the 'year' set to a number. Since "George" was the input and the only one changed, it was passed through the constructor method along with the other two.
    // .this is used here since it's all nested inside the const