 //***************************************************/
 // get user entered flashcard type of Basic or Cloze /
 //***************************************************/
 var version = process.argv[2];
 //*******************************/
 // Load the NPM Package inquirer /
 //*******************************/
var inquirer = require("inquirer");
//******************************/
// Include the exported modules /
//******************************/
var BasicData = require("./BasicCard");
var ClozeData = require("./ClozeCard");
//***********************************************/
// counter for each type of flashcard processing /
//***********************************************/
var counterBasic = 0;
var counterCloze = 0;

function playGame() {
  //*******************************************************/
  // If either counter is greater than 7 then stop running /
  //*******************************************************/
  if ((counterBasic <= 7) && (counterCloze <= 7)) {
    //******************************************************/
    // Prompt User with question based on type of flashcard /
    //******************************************************/
    if (version == "Basic") {
      var flashcardData = BasicData.arrayBasicData[counterBasic].split("-");
      var front = flashcardData[0];
      var back = flashcardData[1];
      var basicFlashcard =  new BasicData.BasicCard(front,back);
      var count = counterBasic;
      count++;

      inquirer.prompt([
        {
          type: "input",
          message: "Flashcard #" + count + "--> " + basicFlashcard.front,
          name: "front"
        },
        {
          type: "input",
          message: basicFlashcard.back,
          name: "back"
        }
      ])
      .then(function(inquirerResponse) {
        if (counterBasic < 7) {
          counterBasic++;
          //******************/
          // call recursively /
          //******************/
          playGame();
        }
      }); 
    } else if (version == "Cloze") {
      var flashcardData = ClozeData.arrayClozeData[counterCloze].split("-");
      var partial = flashcardData[0];
      var cloze = flashcardData[1];
      var fullText = partial.replace("..."," " + cloze + " ")
      var clozeFlashcard =  new ClozeData.ClozeCard(partial,cloze,fullText);
      var count = counterCloze;
      count++;

      inquirer.prompt([
        {
          type: "input",
          message: "Flashcard #" + count + "--> " + clozeFlashcard.partial,
          name: "front"
        },
        {
          type: "input",
          message: clozeFlashcard.cloze,
          name: "back2"
        }
      ])
      .then(function(inquirerResponse) {
        if (counterCloze < 7) {
          counterCloze++;
          //******************/
          // call recursively /
          //******************/
          playGame();
        }
      }); 
    }
  } 
}
//**************/
// priming call /
//**************/
playGame();  

      