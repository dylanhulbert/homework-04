var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");

var submissionResponseEl = document.querySelector("#response");

submitEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(event);
  
  var response = nameInput.value;
  submissionResponseEl.textContent = response;
});


var timeEl = document.querySelector(".countdown");
var secondsLeft = 20;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 2000);
}

setTime();

var allQuestions = [{
	question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
  choices: [
  "The User's machine running a Web browser", 
  "The Web server", 
  "Your mom's iPhone", 
  "Robots"],
	correctAnswer: 0
},
{
	question: "Which of the following syntax is correct to refer an external script called “formValidation.js”?",
  choices: [
  "script href = “formValidation.js”", 
  "script source = “formValidation.js”", 
  "script src = “formValidation.js”", 
  "script refer to external computer thing = “formValidation.js”"],
	correctAnswer: 3
},
{
	question: "What JavaScript keyword declares a variable?",
  choices: [
  "var", 
  "if", 
  "for", 
  "declare.variable.please"],
	correctAnswer: 0
},
{
	question: "How can you add a comment in Javascript?",
  choices: [
  "//this is a comment", 
  "!this here is a comment", 
  "-- comments for everyone! --", 
  "c.nope"],
	correctAnswer: 0
},
{	
	question: "How do you create a function in Javascript?",
  choices: [
  "()function.myFunction", 
  "function = myFunction", 
  "function myFunction", 
  "myFunction.whatever"],
	correctAnswer: 1
}];

//Reference to tags
var questionTitle = document.getElementById('questionTitle');
var selectionList = document.getElementById('selectionList');
var nextButton = document.getElementById('nextButton');

//Initiating some variables
var i = 0;
var length1 = allQuestions.length;
var correctAnswer = 0;

nextButton.onclick = function() {
    /*itterate through questions*/    
    if(i>allQuestions.length -1){/*go to first when reached last*/
       i=0;       
    }    
    populateQuestion(i);
    i++;
};

function populateQuestion(qNum) {
    var individualQuestion = allQuestions[i];
    questionTitle.innerText = individualQuestion.question;
    
    selectionList.innerHTML = ""; //reset choices list
    for(key in individualQuestion.choices){
        var radioBtnName = "question"+i+"_choice";
        var choiceText = individualQuestion.choices[key];
        selectionList.appendChild(createLi(radioBtnName,choiceText));
    }
}

function createLi(name, choiceText) {
        var e = document.createElement('li');
        var radioHtml = '<input type="radio" name="' + name + '"';    
        radioHtml += '/>';
        radioHtml += choiceText;        
        e.innerHTML = radioHtml;        
        return e;
    }