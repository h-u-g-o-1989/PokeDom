class Encounter {
  //adding the new parameter question so we can pass in the questions object
  constructor(x, y, question, answer) {
    this.x = x;
    this.y = y;
    this.question = question;
    this.answer = answer;
  }
  //   onceFound() {
  //     console.log("THIS IS WHERE I WANT THE ENCOUNTER TO F@#& OFF!!!");
  //     this.x = -100;
  //     this.y = -100;
  // }
  draw() {
    image(encounterPic, this.x * 75, this.y * 75, CELL_SIZE, CELL_SIZE); // multiply the x and y by 75 to convert it to our coordinates on the grid
  }
  //cant find a way to delete the encounters so
  //want a function that moves encounters off the map once they have been found, so it "clears" the map
}
/* i want to create a new variable that will store the questions for each encounter, these will be stored in an array so we can iterate through them
now the encounter will take three parameters, the x the y and the question, so in the 
new variable we can create any number of new encounters and change the question in each of them
so each new encounter will basically be a new question*/

/* if NEXT CODE DOESNT WORK ctrl Z until here*/
/*add another element to each encounter object, this way we can predetermine the correct answer
as a b c or d and then we in the function where we check if the answer is the same as the one we defined 
we can pass that function into the onclick, there we can can set the parameters as 
the encounter answer, and individually set buttonA's second parameter to "A" and bs to "B" etc
so that they match with the correctAnswer string, that way if the string from the button is the same
as the string from the encounter object then they got the answer right else they got it wrong.*/

let theQuestionsLevelOne = [
  new Encounter(8, 5, {
    found: "You've found a wild HTML",
    question: "What does HTML stand for?",
    answerA: "Hyper Text Markup Language",
    answerB: "Hyper type mess linguistics",
    answerC: "How to make linguini",
    answerD: "Have time make later",
    correctAnswer: "A",
  }),
  new Encounter(10, 2, {
    found: "You've found a wild HTML",
    question: "What kind of language is HTML?",
    answerA: "Scripting",
    answerB: "Markup",
    answerC: "Programming",
    answerD: "Network",
    correctAnswer: "B",
  }),
  new Encounter(2, 9, {
    found: "You've found a wild HTML",
    question: "In what year was HTML first proposed?",
    answerA: "2000",
    answerB: "1995",
    answerC: "1990",
    answerD: "1985",
    correctAnswer: "C",
  }),
  new Encounter(3, 1, {
    found: "You've found a curveball",
    question: "Who is known as the creator of the World Wide Web?",
    answerA: "Charles Darwin",
    answerB: "Tim Berners-Lee",
    answerC: "Steve Jobs",
    answerD: "Bill Gates",
    correctAnswer: "B",
  }),
  new Encounter(7, 9, {
    found: "You've found a wild HTML",
    question: "What is the correct tag for an ordered list?",
    answerA: "< ordered list >",
    answerB: "< ul >",
    answerC: "< ol >",
    answerD: "< li >",
    correctAnswer: "C",
  }),
];
let theQuestionsLevelTwo = [
  new Encounter(7, 5, {
    found: "You've found a wild CSS",
    question: "What does CSS stand for?",
    answerA: "Cool Styling Stuff",
    answerB: "Creative Style Sheets",
    answerC: "Computer Style Sheets",
    answerD: "Cascading Style Sheets",
    correctAnswer: "D",
  }),
  new Encounter(3, 9, {
    found: "You've found a wild CSS",
    question: "What is the correct way to access an id in CSS?",
    answerA: "@",
    answerB: ">/",
    answerC: "#",
    answerD: "~",
    correctAnswer: "C",
  }),
  new Encounter(1, 5, {
    found: "You've found a wild CSS",
    question: "How do you comment out in CSS?",
    answerA: "/* */",
    answerB: "// //",
    answerC: "{ }",
    answerD: "$",
    correctAnswer: "A",
  }),
  new Encounter(10, 8, {
    found: "You've found a wild CSS",
    question: "Which property is used to change the background colour?",
    answerA: "color",
    answerB: "bgcolor",
    answerC: "backgroundColor",
    answerD: "background-color",
    correctAnswer: "D",
  }),
  new Encounter(6, 2, {
    found: "You've found a wild CSS",
    question: "How do we insert a background-image?",
    answerA: "src=",
    answerB: "loadImage =",
    answerC: "url=",
    answerD: "Img",
    correctAnswer: "C",
  }),
];
let theQuestionsLevelThree = [
  new Encounter(4, 2, {
    found: "You've found a wild JavaScript",
    question: "A Boolean is a Data Type?",
    answerA: "true",
    answerB: "possibly",
    answerC: "false",
    answerD: "truthy",
    correctAnswer: "A",
  }),
  new Encounter(2, 9, {
    found: "You've found a wild JavaScript",
    question: "How do we write to the console?",
    answerA: "console.blog",
    answerB: "console-log",
    answerC: "console.log",
    answerD: "log.this",
    correctAnswer: "C",
  }),
  new Encounter(5, 7, {
    found: "You've found a wild JavaScript",
    question: "How do we write if something is not equal to?",
    answerA: "i !== x",
    answerB: "i > x",
    answerC: "i < x",
    answerD: "i = x-i",
    correctAnswer: "A",
  }),
  new Encounter(8, 4, {
    found: "You've found a wild JavaScript",
    question: "How do we call a function?",
    answerA: "call my function( )",
    answerB: "function.call( )",
    answerC: "function( )",
    answerD: "please just work( )",
    correctAnswer: "C",
  }),
  new Encounter(10, 9, {
    found: "You've found a wild JavaScript",
    question: "How do we write an if statement?",
    answerA: "if this then that",
    answerB: "if( i === 0 )",
    answerC: "if. i = 0",
    answerD: "if i === 0",
    correctAnswer: "B",
  }),
];
let theQuestionsLevelFour = [
  new Encounter(3, 5, {
    found: "You've found a wild Heisenberg",
    question: "Which year was Breaking Bad first aired?",
    answerA: "2007",
    answerB: "2008",
    answerC: "2010",
    answerD: "2011",
    correctAnswer: "B",
  }),
  new Encounter(2, 9, {
    found: "You've found a wild Heisenberg",
    question: "Which area of science does Walt teach at school?",
    answerA: "Chemistry",
    answerB: "Biology",
    answerC: "Physics",
    answerD: "Maths",
    correctAnswer: "A",
  }),
  new Encounter(9, 3, {
    found: "You've found a wild Heisenberg",
    question: "Name the plant Walt used to poison a child?",
    answerA: "tilly of the valley",
    answerB: "poisonous tomatoes",
    answerC: "lilly of the valley",
    answerD: "poisin ivy",
    correctAnswer: "C",
  }),
  new Encounter(5, 6, {
    found: "You've found a wild Heisenberg",
    question:
      "What nickname does Jesse give to the RV he uses with Walt to cook meth?",
    answerA: "home",
    answerB: "meth palace",
    answerC: "the krystal ship",
    answerD: "the cook house",
    correctAnswer: "C",
  }),
  new Encounter(10, 8, {
    found: "You've found a wild Heisenberg",
    question: "Name the two elements from the breaking bad title?",
    answerA: "Bromium, Barry",
    answerB: "Bromine, Barium",
    answerC: "Boron, Bismuth",
    answerD: "Beryllium, Boron",
    correctAnswer: "B",
  }),
];

/* now i could create a second class in which the questions can be passed into, this now needs to be initialised on 
the game page, so i change this.encounter to = the collectables class and pass in the parameter theQuestions
then we need to loop through the array of questions so we can draw each one of them, this should work??!!?*/

class Collectables {
  constructor(theQuestions) {
    this.lives = 3;
    this.numberOfQuestions = 5;
    this.fence = document.getElementById("fence");
    this.fence2 = document.getElementById("fence2");
    this.finished = document.getElementById("finished");
    this.finishedSecret = document.getElementById("finishedSecret");
    this.finalScore = document.getElementById("theFinalScore");
    this.finalScoreBonus = document.getElementById("theFinalScoreBonus");
    this.endScore = document.getElementById("theEndScore");
    this.start = document.getElementById("start");
    this.textWindow = document.getElementById("text-window");
    this.gameLost = document.getElementById("lost");
    this.found = document.getElementById("found");
    this.question = document.getElementById("question");
    this.answerA = document.getElementById("answerA");
    this.answerB = document.getElementById("answerB");
    this.answerC = document.getElementById("answerC");
    this.answerD = document.getElementById("answerD");
    this.buttonA = document.getElementById("buttonA");
    this.buttonB = document.getElementById("buttonB");
    this.buttonC = document.getElementById("buttonC");
    this.buttonD = document.getElementById("buttonD");
    this.pokeBall1 = document.getElementById("scoreCount1");
    this.pokeBall2 = document.getElementById("scoreCount2");
    this.pokeBall3 = document.getElementById("scoreCount3");
    this.pokeBall4 = document.getElementById("scoreCount4");
    this.pokeBall5 = document.getElementById("scoreCount5");
    this.pokeBall6 = document.getElementById("scoreCount6");
    this.pokeBall7 = document.getElementById("scoreCount7");
    this.heart1 = document.getElementById("life1");
    this.heart2 = document.getElementById("life2");
    this.heart3 = document.getElementById("life3");
    this.restartButton = document.getElementById("restartButton");
    this.restartGameButton = document.getElementById("restartGame");
    this.restartGameButtonBonus = document.getElementById("restartGameBonus");
    this.livesAndHealth = document.getElementById("topBoard");

    this.arrayOfQuestions = [...theQuestions]; //changed it so we delete from a copy of the array then when we reload the game we start with a new copy.
  }
  draw() {
    for (let i = 0; i < this.arrayOfQuestions.length; i++) {
      this.arrayOfQuestions[i].draw();
    }
  }

  /* now that the constructor of the collectables has the elements by Id I need a function that will "open" the 
  text window and change the inner HTML to the current ecnounter! should just be able to reset this.question.innerHtml 
  to = the encounter.question.found, if this works then just repeat for all the answers etc, can make the window
  "open" by changing the display from none in the css to flex, use the .style.display and set it = "flex", same way i changed the 
  pictures opacity when practicing, this function will then get called where the console log is declaring i have found a collectable,
  */
  openTextWindow(encounter) {
    this.window = true;
    this.found.innerHTML = encounter.question.found;
    this.question.innerHTML = encounter.question.question;
    this.answerA.innerHTML = encounter.question.answerA;
    this.answerB.innerHTML = encounter.question.answerB;
    this.answerC.innerHTML = encounter.question.answerC;
    this.answerD.innerHTML = encounter.question.answerD;
    this.textWindow.style.display = "flex";
    noLoop();

    buttonA.onclick = () => {
      this.checkForCorrectAnswer(encounter, "A");
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    buttonB.onclick = () => {
      this.checkForCorrectAnswer(encounter, "B");
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    buttonC.onclick = () => {
      this.checkForCorrectAnswer(encounter, "C");
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    buttonD.onclick = () => {
      this.checkForCorrectAnswer(encounter, "D");
      this.textWindow.style.display = "none";
      this.window = false;
      loop();
    };
    /*want to call no loop here and then once button has been clicked 
    we want to call loop, this is so player stops when text window is open
    and then can move again once the text window has closed*/
  }

  /* write a new function that checks if the answer is the correct one, 
  takes those two parameters, then answer===correctanswer then score++ else life--
  will need to set those to this.life and this.score, then set second version of each
  to grab the html elements, then set the html to be equivilant of this.score and this.lives*/
  checkForCorrectAnswer(encounter, answer) {
    if (answer === encounter.question.correctAnswer) {
      this.numberOfQuestions--;
      this.roundScore++;
      game.addScore();
      if (game.roundScore === 1) {
        this.pokeBall1.style.opacity = "100";
      }
      if (game.roundScore === 2) {
        this.pokeBall2.style.opacity = "100";
      }
      if (game.roundScore === 3) {
        this.pokeBall3.style.opacity = "100";
      }
      if (game.roundScore === 4) {
        this.pokeBall4.style.opacity = "100";
      }
      if (game.roundScore === 5) {
        this.pokeBall5.style.opacity = "100";
      }
    } else {
      this.numberOfQuestions--;
      this.roundScore--;
      game.lowerLives();
      if (game.lives === 2) {
        this.heart3.style.opacity = "20%";
      }
      if (game.lives === 1) {
        this.heart2.style.opacity = "20%";
      }
      if (game.lives === 0) {
        this.heart1.style.opacity = "20%";
      }
    }
    let thisQuestionIndex = this.arrayOfQuestions.indexOf(encounter);
    this.arrayOfQuestions.splice(thisQuestionIndex, 1);
    console.log(thisQuestionIndex);
    /* way to open the bottom sqaures of path once all the encounters have been found 
    then when player walks off screen the next level loads, or could re writes size of 
    canvas, have this level on top half and then bottom half would be next level, would have to be 
    900px wide and 1800px tall, so would then have to change grid so its width is by 12 but height is by
    24 so we can keep the cell sizes the same.*/
    if (this.numberOfQuestions === 0 && game.levelCount === 0) {
      this.fence.style.display = "none";
      game.player.deadZones = [
        { x: 4, y: 1 },
        { x: 5, y: 1 },
        { x: 6, y: 1 },
        { x: 7, y: 1 },
        { x: 3, y: 2 },
        { x: 4, y: 2 },
        { x: 5, y: 2 },
        { x: 6, y: 2 },
        { x: 7, y: 2 },
        { x: 2, y: 4 },
        { x: 8, y: 8 },
        { x: 1, y: 11 },
        { x: 2, y: 11 },
        { x: 3, y: 11 },
        { x: 4, y: 11 },
        { x: 7, y: 11 },
        { x: 8, y: 11 },
        { x: 9, y: 11 },
        { x: 10, y: 11 },
      ];
    }
    if (game.levelCount === 1 && this.numberOfQuestions === 0) {
      this.fence2.style.display = "none";
      game.player.deadZones = [
        { x: 3, y: 0 },
        { x: 4, y: 0 },
        { x: 4, y: 1 },
        { x: 4, y: 3 },
        { x: 7, y: 2 },
        { x: 8, y: 2 },
        { x: 7, y: 3 },
        { x: 8, y: 3 },
        { x: 6, y: 6 },
        { x: 8, y: 8 },
        { x: 2, y: 4 },
        { x: 2, y: 11 },
        { x: 3, y: 11 },
        { x: 4, y: 11 },
        { x: 5, y: 11 },
        { x: 6, y: 11 },
        { x: 7, y: 11 },
        { x: 8, y: 11 },
        { x: 9, y: 11 },
        { x: 10, y: 11 },
      ];
    }
    if (
      game.levelCount === 2 &&
      this.numberOfQuestions === 0 &&
      game.score >= 14
    ) {
      this.finished.style.display = "none";
      game.secretLevel();
      this.numberOfQuestions = 5;
    } else if (
      game.score <= 13 &&
      game.levelCount === 2 &&
      this.numberOfQuestions === 0
    ) {
      this.finalScore.innerHTML = game.score;
      this.finished.style.display = "flex";
    }

    if (game.levelCount === 3 && this.numberOfQuestions === 0) {
      this.finalScoreBonus.innerHTML = game.score;
      console.log("this is the questions number ", this.numberOfQuestions);
      this.finishedSecret.style.display = "flex";
    }
    if (game.lives === 0) {
      this.endScore.innerHTML = game.score;
      // if (game.levelCount === 0) {
      //   pokemonSong.stop();
      // }

      this.gameLost.style.display = "flex";
    }

    this.restartButton.onclick = () => {
      if (game.levelCount === 0) {
        pokemonSong.stop();
      }

      if (game.levelCount === 1) {
        westernSong.stop();
      }
      if (game.levelCount === 2) {
        thronesSong.stop();
      }
      if (game.levelCount === 3) {
        breakingBits.stop();
      }
      game.resetScore();
      game.resetLives();
      game.resetLevel();
      game.initialiseGame();
      this.fence.style.display = "flex";
      this.gameLost.style.display = "none";
      this.start.style.display = "flex";
      this.fence2.style.display = "none";
      this.heart1.style.opacity = "100%";
      this.heart2.style.opacity = "100%";
      this.heart3.style.opacity = "100%";
      this.livesAndHealth.style.zIndex = "-1";
    };
    this.restartGameButton.onclick = () => {
      if (game.levelCount === 0) {
        pokemonSong.stop();
      }
      if (game.levelCount === 1) {
        westernSong.stop();
      }
      if (game.levelCount === 2) {
        thronesSong.stop();
      }
      if (game.levelCount === 3) {
        breakingBits.stop();
      }
      game.resetScore();
      game.resetLives();
      game.resetLevel();
      game.initialiseGame();
      this.fence.style.display = "flex";
      this.fence2.style.display = "none";
      this.finished.style.display = "none";
      this.start.style.display = "flex";
      this.heart1.style.opacity = "100%";
      this.heart2.style.opacity = "100%";
      this.heart3.style.opacity = "100%";
      this.livesAndHealth.style.zIndex = "-1";
    };
    this.restartGameButtonBonus.onclick = () => {
      if (game.levelCount === 0) {
        pokemonSong.stop();
      }
      if (game.levelCount === 1) {
        westernSong.stop();
      }
      if (game.levelCount === 2) {
        thronesSong.stop();
      }
      if (game.levelCount === 3) {
        breakingBits.stop();
      }
      game.resetScore();
      game.resetLives();
      game.resetLevel();
      game.initialiseGame();
      this.fence.style.display = "flex";
      this.fence2.style.display = "none";
      this.finishedSecret.style.display = "none";
      this.start.style.display = "flex";
      this.heart1.style.opacity = "100%";
      this.heart2.style.opacity = "100%";
      this.heart3.style.opacity = "100%";
      this.livesAndHealth.style.zIndex = "-1";
    };
  }
  newRound() {
    this.pokeBall1.style.opacity = "50%";
    this.pokeBall2.style.opacity = "50%";
    this.pokeBall3.style.opacity = "50%";
    this.pokeBall4.style.opacity = "50%";
    this.pokeBall5.style.opacity = "50%";
  }
  /* next thing is to write the html questions and answers with buttons, then need to use the document.getElementById to 
make the text window appear when we step on one of the collectables, we also then need to change the innerHTML to the relevant encounter*/
}
