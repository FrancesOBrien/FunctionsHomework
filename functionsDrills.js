/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */


/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
// const sayHello = function(greeting) {
//   console.log(greeting)
// }
// sayHello('hello world')

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */

// const print = function (message) {
//   console.log('jesus wept ' + message)
// }
// print('from the stress');

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
// const printMessage = function(message) {
//   let newMessage = 'Todays message is : ' + message
//   console.log(newMessage)
// }

// printMessage('Kasper is the light and the way')

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
// const powerOfTwo = function(a) {     //reformatted into FUNCTION EXPRESSION, named the variable
//     console.log(a ** 2)              //I think the goal is to have the perameter ** 2, added console.log here instead of return
//   }                                  //maybe return would work but I'm not clear on that
// powerOfTwo(5);                       //call the function and pass the argument.

  
//   /*
  //  * Prompt 5:
  //  *
  //  * Create a function called reverseMessage. This function should take
  //  * a parameter called message. When invoked and passed a string, print the
  //  * string in reverse. (hint: look up some ways of doing this.)
  //  */
  

// const reverseMessage = function(message) {
//   console.log([...message].reverse().join(""))
// }
// spread syntax breaks the parameter into an array of characters
// .reverse reverses the array
// .join concatenates the array and ("") formats it back into a string
// I found this info in discussions on stackoverflow and looked up each property using mdn.
 
// reverseMessage("esperanto");
// reverseMessage("sphinx of black quartz judge my vow")

  /*
   * Prompt 6:
   *
   * Create a function called multiply that takes two parameters: a and b. When
   * invoked, multiply a times b. If b an argument is not passed in for b, then
   * double a (i.e. multiply it by two).
   *
   * Hint: use a default parameter.
   */
  
  // const multiply = function(a,b = '2') {
  //   console.log(a * b)
  // }
  // //used Week 2 Day 1 notes for default perameters
  // multiply(4);
  // multiply(4,6)
  /*
   * Prompt 7:
   *
   * Fix the following code. HINT: Think Objects :)
   */
  
  /** Starter Code */

  // const makePerson = function(a,b) {
  //   console.log(a,b)
  // }

  // makePerson('Zakk', 'F')
  // makePerson('Jimmy', 'B')

//   const makePerson = function(a, b) {
//     console.log('a ', + 'b')
//   }
// makePerson('Zakk', 'F');
// makePerson('Jimmy', 'B')
  
  
  // /*
  //  * Prompt 8:
  //  *
  //  * Write a function that returns an object. The object can be anything.
  //  */
  
//   let dog = {
//     name: "Teacake",
//     breed: "Labrador",
//     color: "Black"
//   }

//   let fish = {
//     name: "Oscar",
//     breed: "Beta",
//     color: "Blue"
//   }


//   const fetchPet = function(pet) {
//      console.log(pet)   
//   }
//  fetchPet(dog);
//  fetchPet(fish) 
  
  /*
   * Prompt 9:
   *
   * Write a function that returns an array. The array can be of anything.
   */
  // const getArray = function(array) {
  //       return (array)
  // }
  // getArray(["cannolini", "orecchiette", "reisling", "shallot"])
  
  // /*
  //  * Prompt 10:
  //  *
  //  * Write a function that, when called, adds a number passed in as a parameter to
  //  * the sum variable below. Invoke your method a few times and then print the sum
  //  */
  
  /** Starter Code */
  // let sum = 0
  // const addOneMore = function(a) {
  //     return sum = (a + sum);
  //   }
  // addOneMore(4);
  // addOneMore(5);
  // addOneMore(6);
  // console.log(sum)

  
  /*
   * Prompt 11:
   *
   * Write a function that takes an array of number values and returns the sum.
   * Test it out to make sure it works.
   */
  // const sumArray = function(array) {
        
  // }
  // sumArray([1, 2, 3, 4])
  // console.log(sumArray)
  // // /*
  //  * Prompt 12:
  //  *
  //  * Write a function that takes a string and returns an array of every word in
  //  * the string.
  //  */
  // const listMessage = function(message) {
  //     console.log([message])
  //   }

  //  // using my answer from the reverse questions, I just omitted the .reverse step from the function
     
  //   listMessage("sphinx of black quartz judge my vow")
  
  
  /*
   * Prompt 13:
   *
   * How can you write a function so that this expression works? It should print
   * the string "this works!"
   */
  
  /** Starter Code */
//  const testFunc = () => {
//   console.log("this works!")
//  }
//   testFunc()
  
  
  /*
   * Prompt 14:
   *
   * Write a function that takes the add function below as a parameter and invokes
   * it, passing in 2 and 4.
   */
  
  /** Starter Code */
  // const addTwoPerams = function(a, b) {
  //   console.log(a + b)
  // }
  // addTwoPerams(2,4);

  
  
  /*
   * Prompt 15:
   *
   * Write a function that returns another function. Have the inner function print
   * the string "hello world"
   */