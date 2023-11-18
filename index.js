
let attemt = 0;
let won = 0;
let los = 0;

// find all element here
let guessNumber = document.querySelector('#guessNumber')
let btn = document.querySelector('button')
let entered = document.querySelector('.entered')
let randomNumber = entered.nextElementSibling;
let reminAttempt = randomNumber.nextElementSibling;
let result = document.createElement('p')
let body = document.querySelector('.body')


// Create a element with js
result.classList.add('result')
body.appendChild(result)


// Lister
btn.addEventListener('click',()=>{
    event.preventDefault();
    if(guessNumber.value > 5){
        alert('Guess a number between 1-5')
    }else{
        let inputed = guessNumber.value;
    check(inputed)
    attemt++;
    reminAttempt.innerHTML = `Your remin attemt ${5 - attemt}`
    if(attemt === 5){
        btn.disabled = true;
        guessNumber.disabled = true;
    }else{
    }
    }


})


// checking match

function  check(inputed){
     let rand = randNo(5);
     if(inputed == rand){
         won++;
        }else{
            los++
            entered.innerHTML = `You have enterd: ${inputed} Random number was: ${rand}`;
        }
        result.innerHTML = `Win :${won} & Lost :${los}`

}




// Random Number Creation
function randNo(limit){
    return Math.floor(Math.random() * limit )  + 1;

}
