// storing all the variables
const player1 = {
  name:"Player1",
  score: 0,
  display: document.querySelector('.player1Display'),
  button: document.querySelector('#player1Btn'),
  div:document.querySelector('.scoreKeeper div:nth-of-type(1)') 
}
console.log(player1.div)
const player2 = {
  name:"Player2",
  score: 0,
  display: document.querySelector('.player2Display'),
  button: document.querySelector('#player2Btn'),
  div:document.querySelector('.scoreKeeper div:nth-of-type(2)') 
}
const player3 = {
  name:"Player3",
  score: 0,
  display: document.querySelector('.player3Display'),
  button: document.querySelector('#player3Btn'),
  div:document.querySelector('.scoreKeeper div:nth-of-type(3)') 
}
const player4 = {
  name:"Player4",
  score: 0,
  display: document.querySelector('.player4Display'),
  button: document.querySelector('#player4Btn'),
  div:document.querySelector('.scoreKeeper div:nth-of-type(4)')
}
const player5 = {
  name:"Player5",
  score: 0,
  display: document.querySelector('.player5Display'),
  button: document.querySelector('#player5Btn'),
  div:document.querySelector('.scoreKeeper div:nth-of-type(5)') 
}
let isGameOver=false;
let winningScore=1;
const playersArray=[player1,player2,player3,player4,player5];
let winningScoreSelect=document.querySelector('#upTo');

// Event Listeners
winningScoreSelect.addEventListener('change',function(){
  winningScore=parseInt(winningScoreSelect.value);
  reset();
})
 
player1.button.addEventListener("click",function(){
  letsPlay(player1,[player2,player3,player4,player5])
})
player2.button.addEventListener("click",function(){
  letsPlay(player2,[player1,player3,player4,player5])
})
player3.button.addEventListener("click",function(){
  letsPlay(player3,[player1,player2,player4,player5])
})
player4.button.addEventListener("click",function(){
  letsPlay(player4,[player1,player2,player3,player5])
})
player5.button.addEventListener("click",function(){
  letsPlay(player5,[player1,player2,player3,player4])
})
document.querySelector("#reset").addEventListener('click',reset);

// main logic
function letsPlay(player,opponentArray){
  if(!isGameOver){
    player.score++;
    if(player.score===winningScore){
      console.log("same score");
      isGameOver=true;
      player.button.disabled=true;
      player.div.classList.add('winner');
      document.querySelector(".gameWinner").textContent=player.name;
      document.querySelector('h1').classList.add('block');
      document.querySelector('h1').classList.remove('none');
      setTimeout(() => {
        document.querySelector('h1').classList.add('none');
      }, 3000);
      for(let opponent of opponentArray){
        opponent.button.disabled=true;
        opponent.div.classList.add('looser');
     
      }
    }
    player.display.textContent=player.score;
  }
}
// reset game
function reset(){
  isGameOver=false;
  for(let player of playersArray){
   player.button.disabled=false;
   player.div.classList.remove('winner','looser');
   player.display.textContent=0;
   player.score=0;
  }
  
}


