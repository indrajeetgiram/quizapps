import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class JavascriptComponent implements OnInit {
  questions = [
    {
      question: "What is the output of: console.log(typeof undefined)?",
      options: ["'undefined'", "'null'", "'object'", "'number'"],
      correct: 0,
      explanation: "'typeof undefined' returns 'undefined' because 'undefined' is a primitive type."
    },
    {
      question: "What does the `isNaN()` function do?",
      options: [
        "Checks if a value is null",
        "Checks if a value is undefined",
        "Checks if a value is not a number",
        "Checks if a value is a valid integer"
      ],
      correct: 2,
      explanation: "`isNaN()` checks if a value is not a number, and returns true if the value cannot be converted into a valid number."
    },
    {
      question: "Which of these is not a valid way to declare a variable in JavaScript?",
      options: ["var", "let", "const", "define"],
      correct: 3,
      explanation: "`define` is not a valid JavaScript keyword. Use `var`, `let`, or `const` to declare variables."
    },
    {
      question: "What is the default value of an uninitialized variable in JavaScript?",
      options: ["null", "undefined", "0", "'' (empty string)"],
      correct: 1,
      explanation: "Uninitialized variables in JavaScript have a default value of `undefined`."
    },
    {
      question: "Which of the following methods is used to parse a JSON string into an object?",
      options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.toObject()"],
      correct: 1,
      explanation: "`JSON.parse()` is used to parse a JSON string and convert it into a JavaScript object."
    },
    {
      question: "What is the output of: console.log(2 + '2')?",
      options: ["4", "'22'", "NaN", "TypeError"],
      correct: 1,
      explanation: "In JavaScript, when a number is added to a string, the number is converted to a string, resulting in string concatenation ('22')."
    },
    {
      question: "Which of these methods is used to add an element to the end of an array?",
      options: ["push()", "pop()", "unshift()", "shift()"],
      correct: 0,
      explanation: "The `push()` method adds one or more elements to the end of an array."
    },
    {
      question: "What is the purpose of the `bind()` method?",
      options: [
        "To bind an event to an element",
        "To bind the value of `this` to a function",
        "To bind two arrays together",
        "To bind a function to a variable"
      ],
      correct: 1,
      explanation: "The `bind()` method creates a new function that has its `this` keyword set to the specified value."
    },
    {
      question: "What does the `===` operator do in JavaScript?",
      options: [
        "Checks for equality without type conversion",
        "Checks for equality with type conversion",
        "Checks for inequality",
        "Throws an error if the types do not match"
      ],
      correct: 0,
      explanation: "`===` checks for strict equality without performing type conversion."
    },
    {
      question: "Which method is used to remove the last element from an array?",
      options: ["pop()", "push()", "shift()", "unshift()"],
      correct: 0,
      explanation: "The `pop()` method removes the last element from an array and returns it."
    },
    {
      question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
      options: ["true", "false", "TypeError", "NaN"],
      correct: 1,
      explanation: "Due to floating-point precision issues, `0.1 + 0.2` does not equal `0.3` exactly in JavaScript."
    },
    {
      question: "Which of these is a falsy value in JavaScript?",
      options: ["0", "'0'", "[]", "{}"],
      correct: 0,
      explanation: "`0` is a falsy value in JavaScript, while other values like strings and objects are truthy."
    },
    {
      question: "What is the purpose of the `map()` method?",
      options: [
        "To iterate over an array and return a new array",
        "To filter elements from an array",
        "To find a specific element in an array",
        "To sort an array"
      ],
      correct: 0,
      explanation: "The `map()` method creates a new array by applying a function to each element of the original array."
    },
    {
      question: "What will be the output of: console.log([1, 2] + [3, 4])?",
      options: ["[1, 2, 3, 4]", "'1,23,4'", "TypeError", "NaN"],
      correct: 1,
      explanation: "Arrays are converted to strings during addition, resulting in '1,23,4'."
    },
    {
      question: "Which of these methods can be used to stop an interval in JavaScript?",
      options: ["clearInterval()", "stopInterval()", "pauseInterval()", "resetInterval()"],
      correct: 0,
      explanation: "`clearInterval()` is used to stop an interval that was set using `setInterval()`."
    },
    {
      question: "What does the `Object.keys()` method do?",
      options: [
        "Returns all key-value pairs of an object",
        "Returns all the keys of an object as an array",
        "Returns the length of an object",
        "Deletes all keys of an object"
      ],
      correct: 1,
      explanation: "`Object.keys()` returns an array containing all the keys of an object."
    },
    {
      question: "What is a promise in JavaScript?",
      options: [
        "An API to create synchronous code",
        "An object representing the eventual completion or failure of an asynchronous operation",
        "A way to handle errors in synchronous code",
        "A function that resolves or rejects immediately"
      ],
      correct: 1,
      explanation: "A promise represents the eventual result of an asynchronous operation, providing methods to handle success or failure."
    },
    {
      question: "What does the `call()` method do?",
      options: [
        "Creates a new function with a specified context",
        "Calls a function with a specific `this` value and arguments",
        "Binds a function to a specific object",
        "Executes a function immediately"
      ],
      correct: 1,
      explanation: "The `call()` method calls a function with a specific `this` value and arguments."
    },
    {
      question: "What is the purpose of the `finally` block in a try-catch-finally statement?",
      options: [
        "To handle exceptions",
        "To execute code regardless of the result",
        "To log errors",
        "To terminate the program"
      ],
      correct: 1,
      explanation: "The `finally` block executes code regardless of whether an exception was thrown or caught."
    },
    {
      question: "What is the value of `this` inside a regular function in strict mode?",
      options: ["Global object", "undefined", "null", "The function itself"],
      correct: 1,
      explanation: "In strict mode, `this` inside a regular function is `undefined` if it is not explicitly bound."
    },
    {
      question: "What is the output of: console.log(Boolean(''))?",
      options: ["true", "false", "undefined", "null"],
      correct: 1,
      explanation: "An empty string is a falsy value in JavaScript, so `Boolean('')` returns `false`."
    },
    {
      question: "Which of the following is not a primitive data type in JavaScript?",
      options: ["String", "Number", "Object", "Symbol"],
      correct: 2,
      explanation: "`Object` is not a primitive data type; it is a reference type in JavaScript."
    },
    {
      question: "What does the `typeof` operator return for an array?",
      options: ["'array'", "'object'", "'list'", "'undefined'"],
      correct: 1,
      explanation: "Arrays are objects in JavaScript, so `typeof []` returns `'object'`."
    },
    {
      question: "What is the purpose of the `setTimeout()` function?",
      options: [
        "To execute a function at regular intervals",
        "To execute a function after a specified delay",
        "To pause execution of the code",
        "To stop the execution of a function"
      ],
      correct: 1,
      explanation: "`setTimeout()` is used to execute a function once after a specified delay (in milliseconds)."
    },
    {
      question: "Which of these values is not falsy?",
      options: ["false", "0", "'false'", "null"],
      correct: 2,
      explanation: "`'false'` is a non-empty string, so it is truthy, unlike the other options which are falsy."
    },
    {
      question: "What is the output of: console.log(1 == '1')?",
      options: ["true", "false", "undefined", "TypeError"],
      correct: 0,
      explanation: "`==` performs type coercion, so `1 == '1'` evaluates to `true`."
    },
    {
      question: "What is the purpose of the `filter()` method?",
      options: [
        "To filter out duplicate values in an array",
        "To create a new array with elements that pass a test",
        "To remove elements from an array",
        "To sort elements in ascending order"
      ],
      correct: 1,
      explanation: "`filter()` creates a new array with elements that satisfy a given condition."
    },
    {
      question: "What does the `Promise.resolve()` method do?",
      options: [
        "Creates a rejected promise",
        "Creates a resolved promise",
        "Creates a pending promise",
        "Creates a promise that resolves with a delay"
      ],
      correct: 1,
      explanation: "`Promise.resolve()` returns a promise that is resolved with the given value."
    },
    {
      question: "What is the difference between `null` and `undefined`?",
      options: [
        "`null` represents an uninitialized variable, and `undefined` represents a missing variable.",
        "`null` is a type, but `undefined` is not.",
        "`null` represents the intentional absence of a value, while `undefined` means a variable is declared but not assigned.",
        "`undefined` represents an object, but `null` does not."
      ],
      correct: 2,
      explanation: "`null` is used to indicate the intentional absence of a value, while `undefined` means a variable is declared but not assigned."
    },
    {
      question: "What is the purpose of the `find()` method?",
      options: [
        "To locate an index in an array",
        "To find the last element in an array",
        "To return the first element that satisfies a condition",
        "To return all elements that satisfy a condition"
      ],
      correct: 2,
      explanation: "`find()` returns the first element in an array that satisfies the provided testing function."
    },
    {
      question: "What does the `Object.assign()` method do?",
      options: [
        "Creates a deep copy of an object",
        "Merges properties of multiple objects into one object",
        "Deletes properties from an object",
        "Freezes an object to make it immutable"
      ],
      correct: 1,
      explanation: "`Object.assign()` copies the properties of one or more source objects to a target object."
    },
    {
      question: "What will be the output of: console.log(typeof NaN)?",
      options: ["'NaN'", "'undefined'", "'number'", "'object'"],
      correct: 2,
      explanation: "`NaN` is of type `number` in JavaScript, even though it represents 'Not-a-Number'."
    },
    {
      question: "What is the output of: console.log([] == false)?",
      options: ["true", "false", "undefined", "TypeError"],
      correct: 0,
      explanation: "The empty array `[]` is truthy, but during type coercion with `==`, it is converted to `false`, resulting in `true`."
    },
    {
      question: "What is the purpose of `Object.freeze()`?",
      options: [
        "To prevent adding new properties to an object",
        "To make an object immutable",
        "To seal the properties of an object",
        "To create a deep copy of an object"
      ],
      correct: 1,
      explanation: "`Object.freeze()` makes an object immutable by preventing any changes to its properties."
    },
    {
      question: "What is the difference between `map()` and `forEach()`?",
      options: [
        "`map()` modifies the original array, while `forEach()` does not.",
        "`map()` returns a new array, while `forEach()` does not.",
        "`forEach()` can chain methods, but `map()` cannot.",
        "`map()` works only on objects, while `forEach()` works on arrays."
      ],
      correct: 1,
      explanation: "`map()` creates and returns a new array, while `forEach()` executes a provided function on each element but does not return anything."
    },
    {
      question: "What is the output of: console.log('5' * 2)?",
      options: ["10", "'52'", "NaN", "TypeError"],
      correct: 0,
      explanation: "In JavaScript, the `*` operator converts strings to numbers, so `'5' * 2` results in 10."
    },
    {
      question: "What does the `includes()` method do?",
      options: [
        "Checks if an element exists in an array or string",
        "Adds an element to an array",
        "Removes an element from an array",
        "Returns the index of an element"
      ],
      correct: 0,
      explanation: "`includes()` checks if a given element exists in an array or string, returning true or false."
    },
    {
      question: "What is the difference between `call()` and `apply()`?",
      options: [
        "`call()` accepts arguments as an array, while `apply()` accepts arguments individually.",
        "`apply()` is faster than `call()`.",
        "`apply()` accepts arguments as an array, while `call()` accepts arguments individually.",
        "They are interchangeable and have no differences."
      ],
      correct: 2,
      explanation: "`apply()` accepts arguments as an array, while `call()` requires arguments to be passed individually."
    }];

  currentQuestionIndex = 0;
  score = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion(): void {
    const questionData = this.questions[this.currentQuestionIndex];
    document.getElementById("question")!.textContent = questionData.question;
    const optionsContainer = document.getElementById("options")!;
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "btn btn-outline-primary mb-2 option-btn";
      button.textContent = option;
      button.onclick = () => this.checkAnswer(index);
      optionsContainer.appendChild(button);
    });

    document.getElementById("explanation")!.style.display = "none";
    document.getElementById("next-btn")!.setAttribute("disabled", "true");
    this.updateProgressBar();
  }

  checkAnswer(selectedIndex: number): void {
    const questionData = this.questions[this.currentQuestionIndex];
    const explanationBox = document.getElementById("explanation")!;
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach((button) => {
      button.classList.remove("correct", "incorrect");
      button.setAttribute("disabled", "true");
    });

    if (selectedIndex === questionData.correct) {
      buttons[selectedIndex].classList.add("correct");
      this.score++;
      explanationBox.className = "alert alert-success explanation";
      explanationBox.textContent = "Correct! " + questionData.explanation;
    } else {
      buttons[selectedIndex].classList.add("incorrect");
      buttons[questionData.correct].classList.add("correct");
      explanationBox.className = "alert alert-danger explanation";
      explanationBox.textContent = "Incorrect! " + questionData.explanation;
    }

    explanationBox.style.display = "block";
    document.getElementById("next-btn")!.removeAttribute("disabled");
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.loadQuestion();
    } else {
      this.displayScore();
    }
  }

  displayScore(): void {
    const quizContainer = document.getElementById("quiz-container")!;
    quizContainer.innerHTML = `
      <h3 class="text-center">Quiz Completed!</h3>
      <p class="text-center">Your score: <strong>${this.score}/${this.questions.length}</strong></p>
      <div class="text-center mt-3">
        <button class="btn btn-success" (click)="restartQuiz()">Restart Quiz</button>
      </div>
    `;
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;

    const quizContainer = document.getElementById("quiz-container")!;
    quizContainer.innerHTML = `
      <div class="progress-container mb-4">
        <div id="progress-bar" class="progress-bar"></div>
      </div>
      <h4 id="question" class="mb-4"></h4>
      <div id="options" class="mb-3"></div>
      <div id="explanation" class="alert explanation"></div>
      <button id="next-btn" class="btn btn-primary mt-3" (click)="nextQuestion()" disabled>Next Question</button>
    `;
    this.loadQuestion();
  }

  updateProgressBar(): void {
    const progressBar = document.getElementById("progress-bar")!;
    const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
    progressBar.style.width = progress + "%";
  }
}
