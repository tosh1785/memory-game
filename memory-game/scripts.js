

const cards = document.querySelectorAll(".memory-card");
//let image = document.getElementsByTagName("img");
//const imageArray = Array.from(image);

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;





/*function cardShuffle(){
  let randomCard;
  for(let i = 0; i < imageArray.length; i++){
    randomCard = Math.floor(Math.random()* imageArray.length);
    //let imgOne = imageArray[i];
    let newImage = imageArray[randomCard];
    //imageArray[i] = imgTwo;
    //imageArray[randomCard] = imgOne;
    }
  
}

cardShuffle();*/

function flipCard() {
  if(lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
    }

    
      secondCard = this;
      hasFlippedCard = false;
      
      checkForMatch();
    
    }
      


function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
 }

function disableCards() {
  firstCard.removeEventListener('click', flipCard());
   secondCard.removeEventListener('click', flipCard());

   resetBoard();
 }

function unflipCards() {
    lockBoard = true;
   setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
       
        resetBoard();
  }, 2000);
 }  



cards.forEach(card => card.addEventListener('click', flipCard));


function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 8);
    card.style.order = ramdomPos;
    });
 })();