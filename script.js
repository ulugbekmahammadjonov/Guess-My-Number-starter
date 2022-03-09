'use strict';
 
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const again = document.querySelector('.again');
const input = document.querySelector('.guess');
const body = document.getElementsByTagName("body")
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');

let guessNumber;


 function setNumber(){
     guessNumber = Math.floor(Math.random()*21);
 }
 setNumber()

check.addEventListener("click", ()=>{
    Score()
   
    if(input.value < guessNumber){
        message.textContent="Too low"
        document.body.style.backgroundColor = '#222';
    }else if(input.value > guessNumber){
        message.textContent = "Too high"
        document.body.style.backgroundColor = '#222 ';
    }else if(input.value == guessNumber){
        message.textContent ="Currect Number"
        document.body.style.backgroundColor="green"
        number.textContent =guessNumber
    }
})

again.addEventListener("click", ()=>{
    if (highscore.textContent == 0) {
      highscore.textContent = score.textContent;
    }else if (highscore.textContent < score.textContent) {
      highscore.textContent = score.textContent;
    } 
    
   
    Update();
})

function Update(){
    message.textContent = 'Start guessing...';
    input.value=""
    document.body.style.backgroundColor = '#222 ';
    score.textContent=20
    number.textContent="?"
    setNumber()
}

function Score(){
    // highscore.textContent = score.textContent
    if(guessNumber != input.value){
        score.textContent--
    }
}
function Highscore(){
    
    if(input.value!=guessNumber){
            highscore.textContent--
    }
}
