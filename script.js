
let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const reamaning=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')

let prevguess=[];
let numguess=1;

let playgame=true;

if(playgame){
   submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    // console.log(guess);
    validateguess(guess);
   })
}
function validateguess(guess){
     if(isNaN(guess)){
        alert('please enter a valid number')
     }
     else if(guess <1){
        alert('please enter a number more than 1')
     }
     else if(guess>100){
        alert('please enter number less than 100')
     }
     else{
        prevguess.push(guess);
        if(numguess===11){
            displayguess(guess);
            displaymessage(`game over.random number was ${randomNumber}`)
            endgame();
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
     }
}

function checkguess(guess){
     if(guess===randomNumber){
        displaymessage(`you guessed it right`)
        endgame()
     }
     else if(guess<randomNumber){
        displaymessage(`number is tooo low`)
     }
     else if(guess>randomNumber){
        displaymessage(`number is tooo high`)
     }
}

function displayguess(guess){
      userInput.value='';
      guessSlot.innerHTML +=`${guess}, `;
      numguess++;
      reamaning.innerHTML=`${11-numguess}`;
}
function displaymessage(message){
      lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endgame(){
       userInput.value='';
       userInput.setAttribute('disabled','');
       p.classList.add('button');
       p.innerHTML=`<h2 id="newgame">start new game</h2>`;
       startOver.appendChild(p);
       playgame=false;
       newgame();
}

function newgame(){
      const newgamebutton=document.querySelector('#newgame')
      newgamebutton.addEventListener('click',function(e){
      randomNumber=parseInt(Math.random()*100+1);
      prevguess=[];
      numguess=1;
      guessSlot.innerHTML='';
      reamaning.innerHTML=`${11-numguess}`;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      playgame=true;
      })
}
